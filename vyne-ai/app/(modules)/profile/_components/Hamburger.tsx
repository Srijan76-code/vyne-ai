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


const Hamburger = ({ remix, id, name, setName}: {remix?: boolean, id: string, name: string, setName: (name: string) => void}) => {
  return (
    <div className="flex gap-2 items-center ">
 


      {!remix &&
        <AlertEditProject setName={setName} id={id}  name= {name}/>
      }
        <AlertDeleteProject id={id} />



    </div>
  );
};

export default Hamburger;
