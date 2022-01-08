import type { ForwardedRef, ButtonHTMLAttributes } from "react";
import type { Size } from "../../types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type {} from "react-icons";
import type { ReactNode } from "react";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  size?: Size;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  children: ReactNode;
}

const BUTTON_STYLES_ON_SIZE: Partial<Record<Size, string>> = {
  xs: "px-4 sm:px-4 py-0.5 text-xs",
  sm: "px-4 py-1 text-sm",
  md: "px-8 py-2 text-md",
  lg: "px-12 py-3 text-lg",
  xl: "px-16 py-4 text-xl",
};

export const Button = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      size = "md",
      children,
      iconLeft,
      iconRight,
      ...buttonProps
    } = props;
    const buttonSizeStyles = BUTTON_STYLES_ON_SIZE[size];
    const buttonClass = twMerge("border rounded-lg flex items-center gap-2 font-semibold", buttonSizeStyles, props.className);
    return (
      <button {...buttonProps} ref={ref} className={buttonClass}>
        {iconLeft}
        <span> {children}</span>
        {iconRight}
      </button>
    );
  }
);

Button.displayName = "Button";
