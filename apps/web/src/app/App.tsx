import { useTheme } from "../Contexts/ThemeContext";
import Home from "../features/home/index";
import AnimatedBackground from "../features/home/components/AnimatedBackground";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className={`w-full m-h-[100vh] ${theme} min-h-screen relative`}>
        {/* Fondo de cielo y estrellas */}
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col items-center gap-8 py-12 px-4">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
