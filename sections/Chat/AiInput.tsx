"use client";

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import useChatStore from "@/store/useChatStore";
import { useStatus } from "@/store/useStatus";
import { GlobeIcon } from "lucide-react";
import { useRef, useState } from "react";
import type { ChatStatus } from "ai";

type AiFile = {
  path: string;
  contents: string;
};

type RoleType = "user" | "assistant" | "system";
type Message = { role: RoleType; content: string | { files: AiFile[]; summary?: string } };

interface ChatBoxProps {
  object: { files?: AiFile[]; summary?: string } | undefined;
  submit: (messages: Message[]) => void;
  isLoading: boolean;
  stop: () => void;
}

// const models = [
//   { id: "gpt-4", name: "GPT-4" },
//   { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
//   { id: "claude-2", name: "Claude 2" },
//   { id: "claude-instant", name: "Claude Instant" },
//   { id: "palm-2", name: "PaLM 2" },
//   { id: "llama-2-70b", name: "Llama 2 70B" },
//   { id: "llama-2-13b", name: "Llama 2 13B" },
//   { id: "cohere-command", name: "Command" },
//   { id: "mistral-7b", name: "Mistral 7B" },
// ];

// const SUBMITTING_TIMEOUT = 200;
// const STREAMING_TIMEOUT = 2000;

const AiInput = ({ submit, isLoading }: ChatBoxProps) => {
  const { messages, addMessage } = useChatStore();
  const [text, setText] = useState<string>("");
  const { status, setStatus } = useStatus();

  // const [status, setStatus] = useState<
  //   "submitted" | "streaming" | "ready" | "error"
  // >("ready");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const stop = () => {
    console.log("Stopping request...");

    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setStatus("ready");
  };

  const handleSubmit = (message: PromptInputMessage) => {
    // If currently streaming or submitted, stop instead of submitting
    if (status === "streaming" || status === "submitted") {
      stop();
      return;
    }

    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    setStatus("submitted");

    console.log("Submitting message:", message);

    // setTimeout(() => {
    //   setStatus("streaming");
    // }, SUBMITTING_TIMEOUT);

    // timeoutRef.current = setTimeout(() => {
    //   setStatus("ready");
    //   timeoutRef.current = null;
    // }, STREAMING_TIMEOUT);
  };

  return (
    <div className="flex flex-col  justify-end size-full">
      <PromptInput
        className="bg-black"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.1), transparent 70%), #000000",
        }}
        globalDrop
        multiple
        onSubmit={handleSubmit}
      >
        <PromptInputBody className="">
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>
          <PromptInputTextarea
            className="p-4 "
            onChange={(e) => setText(e.target.value)}
            ref={textareaRef}
            value={text}
            disabled={isLoading}
          />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputActionMenu>
              <PromptInputActionMenuTrigger />
              <PromptInputActionMenuContent>
                <PromptInputActionAddAttachments />
              </PromptInputActionMenuContent>
            </PromptInputActionMenu>
            <PromptInputSpeechButton
              onTranscriptionChange={setText}
              textareaRef={textareaRef}
            />
          </PromptInputTools>
          <PromptInputSubmit
            disabled={!text || isLoading}
            onClick={() => {
              if (text.trim()) {
                const newMessage: Message = {
                  role: "user",
                  content: text,
                };
                console.log("AiInput - Submitting text:", newMessage);

                const updated = [...messages, newMessage];
                console.log("AiInput - Submitting text:", updated);

                addMessage(newMessage);
                submit(updated);
                setText("");
                setStatus("submitted");
                console.log("AiInput - Submitted");

              }
            }}
            className="!h-8"
            status={status as ChatStatus}
            size="sm"
            variant="ghost"
          />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default AiInput;
