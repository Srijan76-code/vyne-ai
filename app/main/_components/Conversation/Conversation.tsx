import useChatStore from "@/store/useChatStore";
import React from "react";
import Content from "../ChatBox/Content";
import Summary from "../ChatBox/Summary";

type AiFile = {
  path: string;
  contents: string;
};

const ConversationComp = () => {
  const { messages } = useChatStore();

  return (
    <div>
      {messages.map((msg, idx) => (
        <div className="flex gap-4 flex-col" key={idx}>
          <div
            className={`py-2 px-3 my-2 text-sm rounded-md text-white ${
              msg.role === "user" && "bg-neutral-900 self-end"
            }`}
          >
            {msg?.role === "assistant" && typeof msg.content === "object" && (
              <div className="text-sm space-y-4">
                <Content object={msg.content as { files: AiFile[]; summary?: string } | undefined} />
                <Summary object={msg.content as { files: AiFile[]; summary?: string } | undefined} />
              </div>
            )}

            <p className="text-sm ">
              {msg?.role === "user" && typeof msg.content === "string" ? msg.content : null}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationComp;
