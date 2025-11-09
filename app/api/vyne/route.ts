import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamObject } from "ai";
import { ProjectSchema } from "./schema";
import Prompt from "./Prompt";

export const maxDuration = 100;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API - Received request body:", body);

    const clientMessages = body.map((msg:any)=>{
      if (msg.role=="assistant" ){
        return {
          role:"assistant",
          content: msg.content.summary
        }
      }else return msg
    
    })

    const systemMessage = {
      role: "system",
      content: Prompt(),
    };
    const messages = [systemMessage, ...clientMessages];
    console.log("API - Constructed messages:", messages);

    const result = await streamObject({
      model: google("models/gemini-2.5-pro"),
      schema: ProjectSchema,
      messages: messages,
    });
    console.log("API - Generated result:", result);

    return result.toTextStreamResponse();
 
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










