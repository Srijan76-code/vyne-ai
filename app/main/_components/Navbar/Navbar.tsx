import React from "react";
import Deploy from "../Deployment/Deploy";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { CodeXml, Eye } from "lucide-react";
const Navbar = ({ setTab }) => {
  return (
    <div className="h-[5%] flex  items-center space-x-4 ">
      <div className="">logo</div>
      <div className="flex  p-4   border-b border-neutral-800 space-x-4">
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
      </div>
      <Deploy />
    </div>
  );
};

export default Navbar;
