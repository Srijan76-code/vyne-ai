import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamObject } from "ai";
import { ProjectSchema } from "./schema";
import Prompt from "./Prompt";

export const maxDuration = 100;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API - Received request body:", body);

    const clientMessages = body ?? [];
    const systemMessage = {
      role: "system",
      content: `
You are VYNE, an expert AI software architect.
Always return structured data matching the ProjectSchema exactly.
Explain reasoning first ,then provide file structure and finally summary too.
`,
    };
    const messages = [systemMessage, ...clientMessages];
    console.log("API - Constructed messages:", messages);

    const result = await streamObject({
      model: google("models/gemini-2.5-pro"),
      schema: ProjectSchema,
      messages: convertToModelMessages(messages),
    });
    console.log("API - Generated result:", result);

    return result.toTextStreamResponse();
    // return (result as any).toDataStreamResponse({ sendReasoning: true });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate project" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}










