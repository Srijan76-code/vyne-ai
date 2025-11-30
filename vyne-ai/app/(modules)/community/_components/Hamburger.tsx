import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react";

const Hamburger = () => {
  return (
    <div>
      {/* <ButtonGroup className="bg-black"> */}
        {/* <ButtonGroup className="bg-black"> */}
          {/* <Button size="sm" variant="outline" className="bg-black">
            <ExternalLinkIcon />
          </Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border cursor-pointer border-neutral-800" size="sm" variant="ghost" aria-label="More Options">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-52 font-urbanist bg-black"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PencilIcon />
                  Edit
                </DropdownMenuItem>

              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        {/* </ButtonGroup> */}
      {/* </ButtonGroup> */}
    </div>
  );
};

export default Hamburger;
