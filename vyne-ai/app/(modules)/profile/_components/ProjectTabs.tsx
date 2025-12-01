import {
  BoxIcon,
  HouseIcon,
  Layers2,
  PanelsTopLeftIcon,
  UserCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterProjects from "./FilterProjects";
import { Separator } from "@/components/ui/separator";
import FilterRemixProjects from "./FilterRemixProjects";

export default function ProjectTabs() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea className="">
        <div className="w-full flex justify-center">
          <TabsList className="  ">
            <TabsTrigger value="tab-1">
              <UserCircle
                aria-hidden="true"
                className="-ms-0.5 me-1.5 opacity-60"
                size={16}
              />
              User Projects
            </TabsTrigger>
            <TabsTrigger className="group" value="tab-2">
              <Layers2
                aria-hidden="true"
                className="-ms-0.5 me-1.5 opacity-60"
                size={16}
              />
              Remix Projects
            </TabsTrigger>
          </TabsList>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">


        <FilterProjects />
      </TabsContent>
      <TabsContent value="tab-2">
        <FilterRemixProjects />
      </TabsContent>
    </Tabs>
  );
}
