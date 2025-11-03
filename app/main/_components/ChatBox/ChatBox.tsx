import React from "react";
import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/components/ai-elements/task";
import AiInput from "@/sections/Chat/AiInput";
import TextType from "@/components/TextType";
import ShinyText from "@/components/ShinyText";
import Content from "./Content";
import Summary from "./Summary";
import { useStatus } from "@/store/useStatus";
import ReasoningComp from "./ReasoningComp";
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
const ChatBox = ({ object, submit, isLoading, stop }: ChatBoxProps) => {
  const { status } = useStatus();
  return (
    <div className="flex flex-col h-full">
      {/* Empty State */}
      {status == "ready" &&
        (!object || !object.files || object.files.length === 0) && (
          <div className="text-center py-72 ">
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

      {status == "submitted" &&
        (!object || !object.files || object.files.length === 0) && (
          <ShinyText
            text="Generating your response..."
            disabled={false}
            speed={2.5}
            className="custom-class text-center py-72"
          />
        )}

      {/* <ReasoningComp/> */}

      <Content object={object} />
      <Summary object={object} />

      {/* <AiInput
              object={object}
              submit={submit}
              isLoading={isLoading}
              stop={stop}
            /> */}
    </div>
  );
};

export default ChatBox;
