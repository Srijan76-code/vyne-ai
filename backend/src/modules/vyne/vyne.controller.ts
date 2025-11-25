import { Request, Response } from "express";
import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { ProjectSchema } from "./schema";
import Prompt from "./Prompt";

export const generateProject = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    console.log("API - Received request body:", body);

    const clientMessages = body.map((msg: any) => {
      if (msg.role == "assistant") {
        return {
          role: "assistant",
          content: msg.content.summary,
        };
      } else return msg;
    });

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

    const webRes = result.toTextStreamResponse();
    
    res.status(webRes.status);
    webRes.headers.forEach((value, key) => res.setHeader(key, value));
    
    if (webRes.body) {
      const reader = webRes.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(value);
        }
      } finally {
        reader.releaseLock();
      }
    }
    res.end();

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Failed to generate project" });
  }
};
