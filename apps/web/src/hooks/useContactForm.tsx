// src/hooks/useContactForm.ts
import { toast } from "sonner";
import { type SubmitEvent, useRef } from "react";

export function useContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const message = (formData.get("message") as string)?.trim() ?? "";

    // Validaciones con toast
    if (!name) {
      toast.error("Nombre requerido", {
        description: "Por favor escribe tu nombre.",
        duration: 5000,
      });
      return;
    }

    if (!email) {
      toast.error("Email requerido", {
        description: "Ingresa tu correo electrónico.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning("Email inválido", {
        description: "El formato del email no es correcto.",
      });
      return;
    }

    if (!message) {
      toast.error("Mensaje requerido", {
        description: "No olvides escribir tu mensaje.",
      });
      return;
    }

    // Simulación de envío (reemplaza con tu fetch real cuando lo tengas)
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1200)), {
      loading: "Enviando mensaje...",
      success: "Mensaje enviado correctamente!",
      error: "Error al enviar. Inténtalo de nuevo.",
    });

    form.reset();
  };

  return {
    formRef,
    handleSubmit,
  };
}
