import { useTheme } from "../../../Contexts/ThemeContext";
import "../styles/AnimatedBackground.css";

export default function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`sky ${theme} absolute top-0 left-0 w-full h-full overflow-hidden`}>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
    </>
  );
}
