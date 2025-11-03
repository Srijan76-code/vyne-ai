"use client";
import React, { useRef, useEffect } from "react";
import useChatStore from "@/store/useChatStore";
import AiInput from "@/sections/Chat/AiInput";
import ConversationComp from "../Conversation/Conversation";
import ChatBox from "../ChatBox/ChatBox";
import TextType from "@/components/TextType";
import ShinyText from "@/components/ShinyText";
import { useStatus } from "@/store/useStatus";
import Content from "../ChatBox/Content";
import Summary from "../ChatBox/Summary";
import CollapsableContainer from "../Animations/CollapsableContainer";
type AiFile = {
  path: string;
  contents: string;
};

interface ChatBoxProps {
  object: { files: AiFile[]; summary: string } | undefined;
  submit: (text: string) => void;
  isLoading: boolean;
  stop: () => void;
}
export default function FulllChatBoxComp({
  submit,
  object,
  isLoading,
  stop,
}: ChatBoxProps) {
  const { messages } = useChatStore();
  const { status } = useStatus();

  const scrollRef = useRef<HTMLDivElement>(null);

  // auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-[99.99%] text-white">
      <div className="flex-1 overflow-y-auto">
        {/* Empty State */}
        {status == "ready" && (!messages || messages.length === 0) && (
          <div className="text-center py-72  ">
            <p className="text-lg text-neutral-200">
              What do you want to create?
            </p>
            <TextType
              text={[
                "Start building with a single prompt.",
                "No coding needed.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-sm text-neutral-300"
            />
          </div>
        )}

        {/* Conversation container */}

        {messages && messages.length > 0 && (
          <div ref={scrollRef} className="  px-4 py-6 space-y-4 ">
            <ConversationComp />
          </div>
        )}

        {status == "submitted" &&
          (!object || !object.files || object.files.length === 0) && (
            <ShinyText
              text="Generating your response..."
              disabled={false}
              speed={2.5}
              className="custom-class text-center py-72"
            />
          )}

        {status == "streaming" &&
          object &&
          object.files &&
          object.files.length > 0 && (
            <div>
              <Content object={object} />

              <Summary object={object} />
            </div>
          )}
      </div>

      {/* Input bar pinned at bottom */}
      <div className="pt-4 justify-end">
        <AiInput
          object={object}
          submit={submit}
          isLoading={isLoading}
          stop={stop}
        />
      </div>
    </div>
  );
}
