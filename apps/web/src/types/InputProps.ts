export interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  autoComplete: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
