import type { WebContainer } from "@webcontainer/api";


function toBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString('base64');
}

interface VercelFile {
  file: string; 
  data: string; 
  encoding: "base64";
}

export async function BuildAndDeployVercel(webContainer: WebContainer) {
  

  const files: VercelFile[] = [];
  
  // List of directories/files to ALWAYS ignore
  const ignoreList = new Set([
    'node_modules',
    '.git',
    '.DS_Store',
    'dist', 
    '.vercel'
  ]);


  async function collect(base: string) {
    const entries = await webContainer.fs.readdir(base, { withFileTypes: true });

    for (const e of entries) {
      if (ignoreList.has(e.name)) {
        continue; // Skip ignored files/directories
      }
      
      const full = base === '/' ? `/${e.name}` : `${base}/${e.name}`;
      
      if (e.isDirectory()) {
        await collect(full);
      } else {
        const data = await webContainer.fs.readFile(full);
        // Use the relative path from the root, removing the leading '/'
        const relative = full.substring(1); 
        
        files.push({
          file: relative,
          data: toBase64(data),
          encoding: "base64",
        });
      }
    }
  }

  // Start collecting from the root directory
  await collect('/');
  console.log(`🧱 ${files.length} source files collected (node_modules ignored).`);

  // STEP 3: Get Tokens
  const VERCEL_TOKEN = process.env.NEXT_PUBLIC_VERCEL_TOKEN;
  const VERCEL_TEAM_ID = process.env.NEXT_PUBLIC_VERCEL_TEAM_ID; // optional



  if (!VERCEL_TOKEN ) {
    throw new Error(" Missing VERCEL_TOKEN");
  }

  // STEP 4: Prepare the API Payload

  const randomSuffix = Math.random().toString(36).substring(2, 10);
  const uniqueProjectName = `vyne-ai-${randomSuffix}`;
  console.log(`Deploying to NEW unique project: ${uniqueProjectName}`);
  
  const payload = {
    name: uniqueProjectName, 
    files: files, 
    target: "production",
    env: {
      "VITE_MY_API_KEY": "your_secret_api_key_here",
      "VITE_ANALYTICS_ID": "your_analytics_id_here",
    },
    projectSettings: {
      framework: "vite",
      buildCommand: "npm run build",
      installCommand: "npm install",
      devCommand: "npm run dev",
      outputDirectory: "dist",
      rootDirectory: null,
    },
  };

  // STEP 5: Create deployment
  console.log("Creating Vercel deployment (with auto-detection)...");
  const query = new URLSearchParams();
  if (VERCEL_TEAM_ID) {
    query.append("teamId", VERCEL_TEAM_ID);
  }
  
  // We do NOT use "skipAutoDetectionConfirmation=1"
  const apiUrl = `https://api.vercel.com/v13/deployments?${query.toString()}`;
  console.log(`POST ${apiUrl}`);

  const res = await fetch(
    apiUrl,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${VERCEL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("❌ Non-JSON response from Vercel:\n" + text);
  }

  if (!res.ok) {
    throw new Error("❌ Deploy failed:\n" + JSON.stringify(data, null, 2));
  }

  console.log("🚀 Deployment build INITIATED! Vercel is now building your project.");
  console.log("You can monitor the build status for this ID:", data.id);
  console.log("Preview URL:", data.url);
  return data; // {url, id, readyState, ...}
}