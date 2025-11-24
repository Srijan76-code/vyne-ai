import React from "react";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
const ReasoningComp = () => {
  return (
    <Reasoning className="w-full" isStreaming={false}>
      <ReasoningTrigger />
      <ReasoningContent>I need to computer the square of 2.</ReasoningContent>
    </Reasoning>
  );
};

export default ReasoningComp;
