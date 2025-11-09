"use client";
import React, { useEffect, useState } from "react";
import { ProjectSchema } from "@/app/api/vyne/schema";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Deploy from "./Deployment/Deploy";
import MainExplorer from "./FileExplorer/MainExplorer";
import CodeEditorNew from "./CodeEditor/CodeEditorNew";
import WebContainers from "./Webcontainers/Webcontainers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CodeXml, Eye } from "lucide-react";
import { useStatus } from "@/store/useStatus";


import ShinyText from "@/components/ShinyText";
import ChatBox from "./ChatBox/ChatBox";
import useChatStore from "@/store/useChatStore";
import Conversation from "./Conversation/Conversation";
import AiInput from "@/sections/Chat/AiInput";
import FulllChatBoxComp from "./FulllChatBoxComp/FulllChatBoxComp";
import Retry from "./Webcontainers/Retry";

// isLoading-> true when generating
// isLoading-> false when ready
const Home = () => {
  const [tab, setTab] = useState(0);
  const { status, setStatus } = useStatus();
  const { messages, addMessage } = useChatStore();

  const { object, submit, isLoading, stop, error } = useObject({
    api: "/api/vyne",
    schema: ProjectSchema,
    onFinish({ object }) {
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        content: JSON.parse(JSON.stringify(object)),
        timestamp: Date.now(),
      });
    },
    onError(err) {
      console.error("Streaming error:", err);
    },
  });

  //  Watch the state changes
  useEffect(() => {
    if (!isLoading) {
      setStatus("ready");
    }
  }, [isLoading]);

  // console.log("Home - isLoading:", isLoading, "object:", object);

  return (
    <div className="h-dvh p-2">
      <PanelGroup className="gap-[2px]" direction="horizontal">
        <Panel
          style={{
            backgroundColor: "black",
            backgroundImage: `
               radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
               radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
             `,
            backgroundSize: "10px 10px",
            imageRendering: "pixelated",
          }}
          className="p-4 border border-neutral-800 rounded-xl"
          defaultSize={30}
          minSize={20}
          maxSize={50}
        >
          {" "}
          {/* 30% width */}
          <FulllChatBoxComp
            object={object}
            submit={submit}
            isLoading={isLoading}
            stop={stop}
          />
        </Panel>

        <PanelResizeHandle className="w-1 rounded-2xl bg-transparent hover:bg-white/80 hover:shadow-[0_0_10px_#ffffff80] transition-all " />

        <Panel
          className=" border border-neutral-800 rounded-xl"
          defaultSize={70}
          style={{
            backgroundColor: "black",
            backgroundImage: `
               radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
               radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
             `,
            backgroundSize: "10px 10px",
            imageRendering: "pixelated",
          }}
        >
          {" "}
          {/* 75% width */}
          <div className="  ">
            {/* Navbar */}
            <div
              className="flex justify-between items-center px-4 py-2  border-b border-neutral-800 space-x-4"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.1), transparent 70%), #000000",
              }}
            >
              <ButtonGroup>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="border-neutral-900 border"
                      variant="ghost"
                      onClick={() => setTab(0)}
                    >
                      <CodeXml />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Code</TooltipContent>
                </Tooltip>

                <ButtonGroupSeparator className="bg-neutral-900" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="border-neutral-900 border"
                      variant="ghost"
                      onClick={() => setTab(1)}
                    >
                      <Eye />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Preview</TooltipContent>
                </Tooltip>
              </ButtonGroup>
              <div>
                <Retry/>
                <Deploy />
              </div>
            </div>

            <div className="w-full h-full">
              {tab === 0 ? (
                <PanelGroup direction="horizontal">
                  {status == "submitted" &&
                  (!object || !object.files || object.files.length === 0) ? (
                    <div className="flex justify-center mx-auto items-center">
                      <ShinyText
                        text="Your Code will appear here..."
                        disabled={false}
                        speed={2.5}
                        className="custom-class mx-auto text-center py-64"
                      />
                    </div>
                  ) : (
                    <>
                      <Panel defaultSize={30}>
                        {/* Left explorer 30% */}
                        {!isLoading &&
                        messages[messages.length - 1]?.role === "assistant" ? (
                          <MainExplorer
                            object={messages[messages.length - 1].content}
                          />
                        ) : (
                          <MainExplorer object={object} />
                        )}
                      </Panel>

                      <PanelResizeHandle className="w-1 bg-transparent hover:bg-white/80 hover:shadow-[0_0_10px_#ffffff80] transition-all " />

                      <Panel defaultSize={70}>
                        {" "}
                        {/* Editor 70% */}
                        <CodeEditorNew />
                      </Panel>
                    </>
                  )}
                </PanelGroup>
              ) : (
                <Panel>
                  <WebContainers object={object} isLoading={isLoading} />
                </Panel>
              )}
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
