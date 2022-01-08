import type { ReactNode } from "react";
import { Size } from "../../types";
import { twMerge } from "tailwind-merge";

interface Props {
  id?: string;
  label?: string;
  size?: Size;
  children: ReactNode;
}

const LABEL_STYLES_ON_SIZE: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function FieldLayout(props: Props) {
  const { children, label, id, size } = props;
  const labelSizeStyle = LABEL_STYLES_ON_SIZE[size!]
  const labelClass = twMerge("px-1", labelSizeStyle)
  const labelled = Boolean(label);
  return (
    <div className="grid gap-1">
      {labelled && <label className={labelClass} htmlFor={id}>{label}</label>}
      {children}
    </div>
  );
}
