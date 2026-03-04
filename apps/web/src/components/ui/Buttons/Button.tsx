import type { ButtonProps } from "../../../types/ButtonProps";
import "./Button.css";
import { useTheme } from "../../../Contexts/ThemeContext";

export default function Button({
  type,
  className,
  onClick,
  text,
  children,
}: ButtonProps) {
  const { theme } = useTheme();
  return (
    <>
      <button
        type={type}
        className={`btn-app ${theme} p-2.5 rounded-lg tracking-wide cursor-pointer ${className}`}
        onClick={onClick}
      >
        {children || text}
      </button>
    </>
  );
}
