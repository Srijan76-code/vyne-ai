import { Button } from "@/components/ui/button";
import { useDeployStore } from "@/store/useDeployStore";
import { useWebContainerStore } from "@/store/useWebContainerStore";
import { useState } from "react";
import { buildAndDeploy } from "./BuildAndDeploy";
import { HoverButton } from "@/components/Buttons/HoverButton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Deploy = () => {
  const { url, setUrl } = useDeployStore();
  const { webContainer } = useWebContainerStore();
  const [loading, setLoading] = useState(false);

  async function handleDeploy() {
    if (!webContainer) {
      console.log("WebContainer not initialized");
      return;
    }
    setLoading(true);
    try {
      const result = await buildAndDeploy(webContainer);
      console.log("Deployment result:", result);
      if (result?.url) setUrl(result.url);
    } catch (err) {
      console.error("Deployment failed:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="">
      {url ? (
        <div className="text-sm text-green-400 mb-2">
          Deployed at:{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {url}
          </a>
        </div>
      ) : (
      
          <Tooltip>
            <TooltipTrigger asChild>
              <HoverButton onClick={handleDeploy} disabled={loading}>
                {loading ? "Publishing..." : "Publish"}
              </HoverButton>
            </TooltipTrigger>
            <TooltipContent>Publish to web</TooltipContent>
          </Tooltip>
        
      )}
    </div>
  );
};

export default Deploy;
