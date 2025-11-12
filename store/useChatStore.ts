import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Role = 'user' | 'assistant' | 'system';

type AiFile = {
  path: string;
  contents: string;
};

interface AiObject {
  files: AiFile[];
  summary?: string;
}

interface Message {

  role: Role;
  content: string | AiObject; // union type

}

interface ChatStore {
  messages: Message[];
  addMessage: (msg: Message) => void;
  clearMessages: () => void;
}

const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      messages: [],
      addMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'vyne-ai-chat-session',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useChatStore;
