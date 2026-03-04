import GaleriaFotos from "../../components/ui/Galery/GaleriaFotos";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <GaleriaFotos />
    </div>
  );
}
