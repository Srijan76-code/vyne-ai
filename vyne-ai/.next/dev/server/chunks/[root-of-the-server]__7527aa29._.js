module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/deploy/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        // Validate environment variables
        const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
        const CF_PROJECT = process.env.CF_PROJECT;
        const CF_API_TOKEN = process.env.CF_API_TOKEN;
        if (!CF_ACCOUNT_ID || !CF_PROJECT || !CF_API_TOKEN) {
            console.error("Missing Cloudflare env vars");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Missing Cloudflare configuration"
            }, {
                status: 500
            });
        }
        // Get the FormData from the request
        const incoming = await req.formData();
        // Rebuild FormData to ensure file blobs are real Blobs (some runtimes' FormData
        // implementations are not directly forwardable). Also collect diagnostics.
        const forwardForm = new FormData();
        const debugEntries = [];
        const isFileLike = (value)=>typeof value === "object" && value !== null && typeof value.arrayBuffer === "function";
        for (const [key, value] of incoming.entries()){
            try {
                // If value looks like a File (has arrayBuffer), convert to Blob
                if (isFileLike(value)) {
                    const buf = await value.arrayBuffer();
                    const u8 = new Uint8Array(buf);
                    const blob = new Blob([
                        u8
                    ], {
                        type: value.type || "application/octet-stream"
                    });
                    // use the original filename if provided
                    const filename = value.name || key;
                    forwardForm.append(key, blob, filename);
                    debugEntries.push({
                        key,
                        type: "file",
                        size: u8.byteLength
                    });
                } else {
                    forwardForm.append(key, String(value));
                    debugEntries.push({
                        key,
                        type: typeof value
                    });
                }
            } catch (e) {
                console.warn("Failed to convert form entry", key, e);
                // fallback: append stringified value
                forwardForm.append(key, String(value));
                debugEntries.push({
                    key,
                    type: typeof value
                });
            }
        }
        console.log("📤 Forwarding FormData entries to Cloudflare:", debugEntries);
        // Forward the reconstructed FormData to Cloudflare Pages API
        const cfUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT}/deployments`;
        const cfRes = await fetch(cfUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${CF_API_TOKEN}`
            },
            body: forwardForm
        });
        const text = await cfRes.text();
        let data = null;
        try {
            data = JSON.parse(text);
        } catch (err) {
            console.error("Cloudflare returned non-JSON:", cfRes.status, text.slice(0, 500), err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Cloudflare returned non-JSON response (status ${cfRes.status})`,
                details: text.slice(0, 500)
            }, {
                status: 502
            });
        }
        if (!cfRes.ok || !data?.success) {
            console.error("Cloudflare deploy failed:", cfRes.status, data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Cloudflare deploy failed (status ${cfRes.status})`,
                details: data
            }, {
                status: cfRes.status >= 400 ? cfRes.status : 502
            });
        }
        // Log the full response to see what Cloudflare returns
        console.log("📦 Cloudflare deployment response:", JSON.stringify(data, null, 2));
        // After creating the deployment, poll Cloudflare for the deployment stage
        // until it becomes 'completed' or 'failed' (or we timeout). This helps
        // avoid returning a success to the client while Pages hasn't processed
        // the uploaded files yet.
        const deploymentId = data.result?.id;
        async function pollDeployment(id, timeoutMs = 60_000) {
            const start = Date.now();
            const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT}/deployments/${id}`;
            while(Date.now() - start < timeoutMs){
                try {
                    const statusRes = await fetch(url, {
                        headers: {
                            Authorization: `Bearer ${CF_API_TOKEN}`
                        }
                    });
                    const statusJson = await statusRes.json();
                    const stage = statusJson?.result?.latest_stage;
                    console.log("🔁 Poll deployment status:", stage);
                    // Treat Cloudflare stage.status 'success' as a completed stage as well.
                    if (stage && (stage.status === "completed" || stage.status === "published" || stage.status === "success")) {
                        return statusJson;
                    }
                    if (stage && stage.status === "failed") {
                        return statusJson; // caller will inspect and throw
                    }
                } catch (e) {
                    console.warn("Poll error", e);
                }
                // wait 2s then retry
                await new Promise((r)=>setTimeout(r, 2000));
            }
            return null; // timed out
        }
        let finalStatus = null;
        if (deploymentId) {
            finalStatus = await pollDeployment(deploymentId, 90_000);
            console.log("🔚 Final deployment poll result:", finalStatus?.result?.latest_stage);
        }
        // Try different URL formats that Cloudflare might return
        let deploymentUrl = data.result?.url;
        // If no URL in result, construct the production URL manually
        if (!deploymentUrl) {
            // Cloudflare Pages production URL format: https://<project-name>.pages.dev
            deploymentUrl = `https://${CF_PROJECT}.pages.dev`;
            console.log("⚠️ No URL in response, using production URL:", deploymentUrl);
        }
        const finalStage = finalStatus?.result?.latest_stage ?? data.result?.latest_stage;
        // Also log the deployment ID for reference
        console.log("✅ Deployment ID:", deploymentId);
        console.log("✅ Deployment URL:", deploymentUrl);
        console.log("✅ Environment:", data.result?.environment);
        console.log("✅ Latest stage:", finalStage);
        // Optionally, attempt to hit the deployment URL once we believe it is live.
        let siteStatus = null;
        if (deploymentUrl) {
            try {
                const siteResponse = await fetch(deploymentUrl, {
                    method: "HEAD"
                });
                siteStatus = {
                    ok: siteResponse.ok,
                    status: siteResponse.status
                };
            } catch (siteError) {
                console.warn("Failed to HEAD deployment URL", siteError);
                siteStatus = {
                    ok: false,
                    status: null
                };
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            url: deploymentUrl,
            deploymentId: deploymentId,
            environment: data.result?.environment,
            fullResponse: data.result,
            latestStage: finalStage ?? null,
            siteStatus
        });
    } catch (err) {
        console.error("Deployment error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err instanceof Error ? err.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7527aa29._.js.map