import type { TextAreaProps } from "../../../types/TextAreaProps";
export default function TextArea({
  name,
  className,
  placeholder,
  required,
}: TextAreaProps) {
  return (
    <>
      <textarea
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
