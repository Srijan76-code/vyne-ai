import { NextResponse } from "next/server";

interface CloudflareResponse {
  success: boolean;
  result?: {
    id?: string;
    url?: string;
    environment?: string;
    deployment_trigger?: {
      metadata?: {
        branch?: string;
        commit_hash?: string;
      };
    };
    stages?: Array<{
      name?: string;
      status?: string;
    }>;
    latest_stage?: {
      name?: string;
      status?: string;
    };
  };
  errors?: Array<{ code: number; message: string }>;
  messages?: Array<any>;
}



export async function POST(req: Request) {
  try {
    // Validate environment variables
    const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
    const CF_PROJECT = process.env.CF_PROJECT;
    const CF_API_TOKEN = process.env.CF_API_TOKEN;

    if (!CF_ACCOUNT_ID || !CF_PROJECT || !CF_API_TOKEN) {
      console.error("Missing Cloudflare env vars");
      return NextResponse.json(
        { success: false, error: "Missing Cloudflare configuration" },
        { status: 500 }
      );
    }

    // Get the FormData from the request
    const formData = await req.formData();

    // Forward the FormData directly to Cloudflare Pages API
    const cfUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT}/deployments`;
    
    const cfRes = await fetch(cfUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
      },
      body: formData,
    });

    const text = await cfRes.text();
    let data: CloudflareResponse | null = null;
    
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("Cloudflare returned non-JSON:", cfRes.status, text.slice(0, 500));
      return NextResponse.json(
        {
          success: false,
          error: `Cloudflare returned non-JSON response (status ${cfRes.status})`,
          details: text.slice(0, 500),
        },
        { status: 502 }
      );
    }

    if (!cfRes.ok || !data?.success) {
      console.error("Cloudflare deploy failed:", cfRes.status, data);
      return NextResponse.json(
        {
          success: false,
          error: `Cloudflare deploy failed (status ${cfRes.status})`,
          details: data,
        },
        { status: cfRes.status >= 400 ? cfRes.status : 502 }
      );
    }

    // Log the full response to see what Cloudflare returns
    console.log("📦 Cloudflare deployment response:", JSON.stringify(data, null, 2));

    // Try different URL formats that Cloudflare might return
    let deploymentUrl = data.result?.url;
    
    // If no URL in result, construct the production URL manually
    if (!deploymentUrl) {
      // Cloudflare Pages production URL format: https://<project-name>.pages.dev
      deploymentUrl = `https://${CF_PROJECT}.pages.dev`;
      console.log("⚠️ No URL in response, using production URL:", deploymentUrl);
    }

    // Also log the deployment ID for reference
    const deploymentId = data.result?.id;
    console.log("✅ Deployment ID:", deploymentId);
    console.log("✅ Deployment URL:", deploymentUrl);
    console.log("✅ Environment:", data.result?.environment);
    console.log("✅ Latest stage:", data.result?.latest_stage);

    return NextResponse.json({
      success: true,
      url: deploymentUrl,
      deploymentId: deploymentId,
      environment: data.result?.environment,
      fullResponse: data.result, // Include full response for debugging
    });
  } catch (err: unknown) {
    console.error("Deployment error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}



