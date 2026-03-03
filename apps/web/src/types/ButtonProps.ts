import type { MouseEventHandler } from "react";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
  disabled?: boolean;
}
