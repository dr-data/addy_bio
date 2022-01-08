import type { InputHTMLAttributes, ForwardedRef } from "react";
import type { Size } from "../../types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { FieldLayout } from "@components/Form/FieldLayout";

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: Size;
}

const INPUT_STYLES_ON_SIZE: Record<Size, string> = {
  xs: "px-2 py-0.5",
  sm: "px-4 py-1",
  md: "px-4 py-2",
  lg: "px-4 py-3",
  xl: "px-4 py-4",
};

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { size = "md", value, className, label, id, ...inputProps } = props;
    const inputSizeStyle = INPUT_STYLES_ON_SIZE[size];
    const inputClass = twMerge("rounded-xl border", inputSizeStyle, className);
    return (
      <FieldLayout label={label} id={id} size={size}>
        <input
          {...inputProps}
          id={id}
          value={value}
          ref={ref}
          className={inputClass}
        />
      </FieldLayout>
    );
  }
);

Input.displayName = "Input";