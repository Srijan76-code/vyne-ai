import { Request, Response } from "express";
import FormData from "form-data";


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

export const deploy = async (req: Request, res: Response) => {
  try {
    const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
    const CF_PROJECT = process.env.CF_PROJECT;
    const CF_API_TOKEN = process.env.CF_API_TOKEN;

    if (!CF_ACCOUNT_ID || !CF_PROJECT || !CF_API_TOKEN) {
      console.error("Missing Cloudflare env vars");
      return res.status(500).json({ success: false, error: "Missing Cloudflare configuration" });
    }

    const form = new FormData();
    
    // Append text fields
    for (const key in req.body) {
      form.append(key, req.body[key]);
    }

    // Append files
    if (req.files) {
      const files = req.files as Express.Multer.File[];
      files.forEach(file => {
        form.append(file.fieldname, file.buffer, { filename: file.originalname, contentType: file.mimetype });
      });
    }

    const cfUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT}/deployments`;

    const cfRes = await fetch(cfUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CF_API_TOKEN}`,
        ...form.getHeaders(),
      },
      body: form as any,
    });

    const text = await cfRes.text();
    let data: CloudflareResponse | null = null;

    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("Cloudflare returned non-JSON:", cfRes.status, text.slice(0, 500));
      return res.status(502).json({
        success: false,
        error: `Cloudflare returned non-JSON response (status ${cfRes.status})`,
        details: text.slice(0, 500),
      });
    }

    if (!cfRes.ok || !data?.success) {
      console.error("Cloudflare deploy failed:", cfRes.status, data);
      return res.status(cfRes.status >= 400 ? cfRes.status : 502).json({
        success: false,
        error: `Cloudflare deploy failed (status ${cfRes.status})`,
        details: data,
      });
    }

    console.log("📦 Cloudflare deployment response:", JSON.stringify(data, null, 2));

    let deploymentUrl = data.result?.url;

    if (!deploymentUrl) {
      deploymentUrl = `https://${CF_PROJECT}.pages.dev`;
      console.log("⚠️ No URL in response, using production URL:", deploymentUrl);
    }

    const deploymentId = data.result?.id;
    console.log("✅ Deployment ID:", deploymentId);
    console.log("✅ Deployment URL:", deploymentUrl);
    console.log("✅ Environment:", data.result?.environment);
    console.log("✅ Latest stage:", data.result?.latest_stage);

    return res.json({
      success: true,
      url: deploymentUrl,
      deploymentId: deploymentId,
      environment: data.result?.environment,
      fullResponse: data.result,
    });

  } catch (err: unknown) {
    console.error("Deployment error:", err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
};
