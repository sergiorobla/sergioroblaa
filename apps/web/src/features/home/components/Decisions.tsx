import { useState } from "react";
import Button from "../../../components/ui/Button/Button";
import { useTheme } from "../../../Contexts/ThemeContext";

export default function Decisions() {
  const { theme, toggleTheme } = useTheme();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    createStar();
  };

  // Función para crear estrellas animadas
  const createStar = () => {
    const star = document.createElement("div");
    star.className = `star ${theme}`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 1.2 + 0.6}s`;

    const sky = document.querySelector(".sky");
    if (sky) sky.appendChild(star);

    // Eliminar la estrella despues de la animación
    setTimeout(() => {
      star.remove();
    }, 2000);
  };

  return (
    <>
      {/* Botones de decisiones */}
      <Button
        type="button"
        className={`w-50`}
        onClick={toggleTheme}
        text={`Cambiar a tema ${theme === "claro" ? "oscuro" : "claro"}`}
      />
      <Button
        type="button"
        className={`w-50`}
        onClick={incrementCount}
        text={`Desea una estrella`}
      />
      <p className="text-lg font-medium">
        Has echo {count} {count == 1 ? "click" : "clicks"}
      </p>
    </>
  );
}
