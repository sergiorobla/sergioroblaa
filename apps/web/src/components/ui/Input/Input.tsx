import type { InputProps } from "../../../types/InputProps";

export default function Input({
  type,
  name,
  placeholder,
  className,
  required = false,
  autoComplete,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`bg-white text-black p-2 rounded-lg tracking-wide ${className}`}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </>
  );
}
