import Button from "../../../components/ui/Buttons/Button";
import { useTheme } from "../../../Contexts/ThemeContext";
import { SunDim, Moon } from "lucide-react";

export default function ButtonTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Button type="button" className="w-10" onClick={toggleTheme}>
        {theme === "oscuro" ? (
          <>
            <SunDim className="mr-2 h-5 w-5" />
          </>
        ) : (
          <>
            <Moon className="mr-2 h-5 w-5" />
          </>
        )}
      </Button>
    </>
  );
}
