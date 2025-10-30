import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamObject } from 'ai';
import { ProjectSchema } from "./schema";
import Prompt from "./Prompt";


export const maxDuration = 100;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await streamObject({
      model: google("models/gemini-2.5-pro"),
      schema: ProjectSchema,
      messages: convertToModelMessages(Prompt(prompt)),
    });

    // return result.toTextStreamResponse();
return (result as any).toDataStreamResponse({ sendReasoning: true });


  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate project' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


