import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UserContactInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Contacts</Label>
      <div className="flex rounded-md shadow-xs">
        <span className="-z-10 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-muted-foreground text-sm">
                       <svg
                    data-testid="geist-icon"
                    height="16"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{ color: "currentcolor" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z"
                      fill="#71717A"
                    ></path>
                  </svg>
        </span>
        <Input
          className="-ms-px rounded-s-none shadow-none"
          id={id}
          placeholder="@username"
          type="text"
        />
      </div>
    </div>
  );
}
