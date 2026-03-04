import type { MouseEventHandler } from "react";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  text?: string;
  disabled?: boolean;
}
