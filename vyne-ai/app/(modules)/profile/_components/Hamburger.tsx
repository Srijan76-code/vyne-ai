import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CopyIcon,
  ExternalLinkIcon,
  LinkIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import AlertDeleteProject from "./AlertDeleteProject";
import AlertEditProject from "./AlertEditProject";
import { useAuthStore } from "@/stores/useAuthStore";
import AlertRemixDeleteProject from "./AlertRemixDeleteProject";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Hamburger = ({
  deploymentUrl,
  deploymentStatus,
  remix,
  id,
  name,
  setName,
}: {
  deploymentUrl: string;
  deploymentStatus: string;
  remix?: boolean;
  id: string;
  name: string;
  setName: (name: string) => void;
}) => {
  const { user } = useAuthStore();
  const router = useRouter();
  return (
    <div className="flex gap-2 items-center ">
      {deploymentStatus === "success" && deploymentUrl && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                 onClick={() => window.open(deploymentUrl, "_blank")}
                className="text-muted-foreground hover:text-primary cursor-pointer"
                size="icon-sm"
                variant="outline"
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </Button>
            </TooltipTrigger>

            <TooltipContent className="dark px-2 py-1 text-xs">
              View Deployed Website
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {!remix && (
        <>
          <AlertEditProject setName={setName} id={id} name={name} />
          <AlertDeleteProject id={id} />
        </>
      )}
      {user?.id && remix && (
        <AlertRemixDeleteProject id={id} userId={user.id} />
      )}
    </div>
  );
};

export default Hamburger;
