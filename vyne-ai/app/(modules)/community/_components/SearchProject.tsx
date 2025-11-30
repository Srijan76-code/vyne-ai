import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchProject({ search, setSearch }: any) {
  return (
    <div className="w-64 bg-black">
      <InputGroup>
        <InputGroupInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black"
          aria-label="Search"
          placeholder="Search"
          type="search"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
