import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuItem,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputProvider,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
  usePromptInputAttachments,
  PromptInputModelSelect,
  PromptInputModelSelectTrigger,
  PromptInputHeader,
  PromptInputModelSelectValue,
  PromptInputModelSelectItem,
  PromptInputModelSelectContent,
} from '@/components/ai-elements/prompt-input';
import { GlobeIcon } from 'lucide-react';


export const AiInputBox = () => (   

<PromptInput onSubmit={() => {}} className=" bg-[#060010] relative"

    style={{
      background: "#060010",
      backgroundImage: "radial-gradient(circle at 1px 1px, #222222 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}
     >
  <PromptInputHeader>
    <PromptInputAttachments>
      {(attachment) => (
        <PromptInputAttachment data={attachment} />
      )}
    </PromptInputAttachments>
  </PromptInputHeader>
  <PromptInputBody>
    <PromptInputTextarea onChange={(e) => {}} value={''} />
  </PromptInputBody>
  <PromptInputFooter>
    <PromptInputTools>
      <PromptInputActionMenu>
        <PromptInputActionMenuTrigger />
        <PromptInputActionMenuContent>
          <PromptInputActionAddAttachments />
        </PromptInputActionMenuContent>
      </PromptInputActionMenu>
      <PromptInputSpeechButton />
      <PromptInputButton>
        <GlobeIcon size={16} />
        <span>Search</span>
      </PromptInputButton>
      <PromptInputModelSelect onValueChange={(value) => {}} value="gpt-4o">
        <PromptInputModelSelectTrigger>
          <PromptInputModelSelectValue />
        </PromptInputModelSelectTrigger>
        <PromptInputModelSelectContent>
          <PromptInputModelSelectItem value="gpt-4o">
            GPT-4o
          </PromptInputModelSelectItem>
          <PromptInputModelSelectItem value="claude-opus-4-20250514">
            Claude 4 Opus
          </PromptInputModelSelectItem>
        </PromptInputModelSelectContent>
      </PromptInputModelSelect>
    </PromptInputTools>
    <PromptInputSubmit
      disabled={false}
      status={'ready'}
    />
  </PromptInputFooter>
</PromptInput>

    )