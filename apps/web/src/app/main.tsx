import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AnimatedBackground from "../features/home/components/AnimatedBackground.tsx";
import App from "./App.tsx";
import { useTheme } from "../Contexts/ThemeContext.tsx";
import { ThemeProvider } from "../Contexts/ThemeContext.tsx";
import { Toaster } from "sonner";

function AppWithTheme() {
  const { theme } = useTheme();
  return (
    <>
      <div className={`w-full m-h-[100vh] ${theme} min-h-screen relative`}>
        <AnimatedBackground />
        <App />
        <Toaster richColors position="top-right" />
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  </StrictMode>,
);
