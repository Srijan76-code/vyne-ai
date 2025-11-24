"use client";

import { Response } from "@/components/ai-elements/response";
import { useState } from "react";

type AiFile = {
  path: string;
  contents: string;
};

interface ChatBoxProps {
  object: { files: AiFile[] ,summary:string} | undefined;
  submit: (context: string) => void;
  isLoading: boolean;
  stop: () => void;
}

export default function ChatBox({
  object,
  submit,
  isLoading,
  stop,
}: ChatBoxProps) {
  const [context, setContext] = useState("");

   console.log("inside chatbox:",object)

  return (
    <div className="w-full h-full overflow-y-auto p-4">
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        
        {/* Input Section */}
        <div className="flex gap-4">
          <textarea
            className="flex-1 border border-gray-300 rounded p-3 min-h-[100px] resize-y"
            placeholder="Describe the website you want to generate..."
            value={context}
            onChange={(e) => setContext(e.target.value)}
            disabled={isLoading}
          />
          <button
            className={`px-6 py-3 rounded font-semibold transition ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
            }`}
            disabled={isLoading}
            onClick={() => {
              if (context.trim()) {
                submit(context);
              }
            }}
          >
            {isLoading ? 'Generating...' : 'Generate Website'}
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="bg-blue-50 border border-blue-200 rounded p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="text-blue-700">
                AI is generating your project... {object?.files?.length || 0} files so far
              </span>
            </div>
            <button
              type="button"
              onClick={() => stop()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Stop
            </button>
          </div>
        )}

        {/* ⭐ Fixed: Check both object AND object.files */}
        {object && object.files && object.files.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">
              Generated Files ({object.files.length})
            </h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {object.files.map((file, index) => (
                <details key={index} className="border border-gray-300 rounded">
                  <summary className="cursor-pointer p-3 bg-gray-50 hover:bg-gray-100 font-mono text-sm">
                    📄 {file.path}
                  </summary>

                </details>
              ))}
            </div>
          </div>
        )}

        {object && object.summary && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Project Summary</h2>
            <div className="p-4 bg-gray-100 border border-gray-300 rounded text-gray-800 whitespace-pre-wrap">
              <Response>

              {object.summary}
              </Response>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!object || !object.files || object.files.length === 0) && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">💡</div>
            <p className="text-lg">Enter a description above to generate a website</p>
            <p className="text-sm mt-2">Try: "Create a todo list app" or "Build a portfolio site"</p>
          </div>
        )}
      </div>
    </div>
  );
}
