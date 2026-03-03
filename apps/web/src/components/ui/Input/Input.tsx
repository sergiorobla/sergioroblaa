import type { InputProps } from "../../../types/InputProps";

export default function Input({
  type,
  name,
  placeholder,
  required = false,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        className="bg-white p-2 rounded-lg tracking-wide"
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
