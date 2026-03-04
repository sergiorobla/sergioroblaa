// src/pages/home/Contact.tsx (o donde lo tengas)
import { useTheme } from "../../../Contexts/ThemeContext";
import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Buttons/Button";
import TextArea from "../../../components/ui/TextArea/TextArea";
import { useContactForm } from "../../../hooks/useContactForm"; // ← importa el hook

export default function Contact() {
  const { theme } = useTheme();
  const { formRef, handleSubmit } = useContactForm();

  return (
    <div className="relative z-10">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="text-black flex flex-col gap-5 sm:min-w-sm max-w-lg"
      >
        <Input type="text" name="name" placeholder="nombre" autoComplete="name" />
        <Input type="email" name="email" placeholder="email" autoComplete="email" />
        <TextArea
          name="message"
          className="bg-white p-2 rounded-lg tracking-wide min-h-10 max-h-40"
          placeholder="Mensaje"
        />
        <Button type="submit" className={`button-app ${theme}`} text="Enviar" />
      </form>
    </div>
  );
}
