import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

export function CenteredColumn({ children, className }: Props) {
  const centeredColumnClass = twMerge(
    "max-w-screen-sm mx-auto",
    className
  );
  return <div className={centeredColumnClass}>{children}</div>;
}

export function Centered({ children, className }: Props) {
  const centeredClass = twMerge(
    "max-w-screen-sm mx-auto min-h-screen flex items-center justify-center",
    className
  );
  return <div className={centeredClass}>{children}</div>;
}
