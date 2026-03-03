import { useTheme } from "../../../Contexts/ThemeContext";
import Input from "../../..//components/ui/Input/Input";
import Button from "../../../components/ui/Button/Button";
import TextArea from "../../../components/ui/TextArea/TextArea";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <>
      {/* Formulario de contacto */}
      <div className="relative z-10">
        <form className=" text-black flex flex-col gap-5 sm:min-w-sm">
          <Input type="text" name="name" placeholder="nombre" required />
          <Input type="email" name="email" placeholder="email" required />
          <TextArea name="message" placeholder="Mensaje" required />
          <Button
            type="submit"
            className={`button-app ${theme}`}
            text={`Enviar`}
          />
        </form>
      </div>
    </>
  );
}
