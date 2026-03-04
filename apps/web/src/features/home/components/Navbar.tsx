import ButtonTheme from "../../../components/ui/Buttons/ButtonTheme";
import ButtonLogin from "../../../components/ui/Buttons/ButtonLogin";
import InputSearch from "../../../components/ui/Input/InputSearch";
import { useTheme } from "../../../Contexts/ThemeContext";
import "../styles/Icon.css";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 sm:gap-0 sm:flex-row-reverse justify-between items-center">
        <p className={`text-2xl sm:text-3xl icon ${theme}`}>DanielaQuintero</p>
        <InputSearch />
      </div>
      <div className="flex gap-3">
        <ButtonTheme />
        <ButtonLogin />
      </div>
    </div>
  );
}
