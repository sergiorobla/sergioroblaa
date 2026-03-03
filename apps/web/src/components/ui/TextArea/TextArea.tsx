import type { TextAreaProps } from "../../../types/TextAreaProps";
export default function TextArea({
  name,
  placeholder,
  required,
}: TextAreaProps) {
  return (
    <>
      <textarea
        name={name}
        className={`bg-white p-2 rounded-lg tracking-wide`}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
