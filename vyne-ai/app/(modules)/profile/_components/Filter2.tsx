import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  setFilter: (filter: string) => void;
  filter: string;
}
const items = [
  { label: "Likes", value: "Likes" },
  { label: "Clones", value: "Clones" },
  { label: "createdAt", value: "createdAt" },
];

const Filter2 = ({ setFilter, filter }: FilterProps) => {
 

  const handleValueChange = (value: string) => {

    setFilter(value);
  };

  return (
    <Select value={filter} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default Filter2;
