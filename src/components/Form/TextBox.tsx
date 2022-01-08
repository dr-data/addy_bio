import type { InputHTMLAttributes } from "react";
import { Size } from "../../types";
import { twMerge } from "tailwind-merge";
import { FieldLayout } from "@components/Form/FieldLayout";

export interface Props
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  size?: Size;
  ref?: string;
}

const TEXTBOX_STYLES_ON_SIZE: Record<Size, string> = {
  xs: "px-4 py-0.5 min-h-screen 14",
  sm: "px-4 py-1 min-h-screen-18",
  md: "px-4 py-2 min-h-screen-24",
  lg: "px-4 py-3 min-h-screen-32",
  xl: "px-4 py-4 min-h-screen-38",
};

export function TextBox(props: Props) {
  const {
    size = "md",
    ref,
    value,
    className,
    label,
    id,
    ...textAreaProps
  } = props;
  const textBoxSizeStyle = TEXTBOX_STYLES_ON_SIZE[size];
  const textBoxClass = twMerge(
    "resize-none md:(resize-y) rounded-xl border-gray-200",
    textBoxSizeStyle,
    className
  );
  return (
    <FieldLayout label={label} id={id} size={size}>
      <textarea
        {...textAreaProps}
        id={id}
        value={value}
        ref={ref}
        className={textBoxClass}
      />
    </FieldLayout>
  );
}
