import { convo } from "@/data/convo";
import useChatStore from "@/store/useChatStore";
import React from "react";
import Content from "../ChatBox/Content";
import Summary from "../ChatBox/Summary";

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
            {msg?.role == "assistant" && (
              
                <div className="text-sm space-y-4">
                  <Content object={msg.content} />
                  <Summary object={msg.content} />
                </div>
            
            )}

            <p className="text-sm ">{msg?.role == "user" && msg.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationComp;
