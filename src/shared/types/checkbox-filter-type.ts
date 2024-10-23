import { ReactNode } from "react";

export interface FilterChecboxProps {
   name?: string;
   text?: string;
   value: string;
   key?: string;
   endAdornment?: ReactNode;
   onCheckedChange?: (checked: boolean) => void;
   checked?: boolean;
}
