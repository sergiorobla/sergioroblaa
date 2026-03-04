import { Home, Cat, Camera, Squirrel } from "lucide-react";
import { useTheme } from "../../../Contexts/ThemeContext";

type MenuDespProps = {
  open: boolean;
};

export default function MenuDesp({ open }: MenuDespProps) {
  const { theme } = useTheme();

  return (
    <ul
      className={`
        absolute top-full -left-13 mt-2
        w-[25vw] min-w-60
        transition-all duration-300 ease-out
        z-50
        menu-list ${theme}
        ${
          open
            ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
            : "opacity-0 -translate-y-3 scale-y-95 pointer-events-none"
        }
      `}
    >
      <li >
        <Home className="h-5 w-5" /> Inicio
      </li>
      <li>
        <Cat className="h-5 w-5" /> Quién soy
      </li>
      <li>
        <Camera className="h-5 w-5" /> Fotografías
      </li>
      <li>
        <Squirrel className="h-5 w-5" /> Hacia el futuro
      </li>
    </ul>
  );
}
