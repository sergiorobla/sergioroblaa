import Input from "../../../components/ui/Input/Input";
import { Search } from "lucide-react";
export default function InputSearch() {
  return (
    <div className="relative w-[35vw] max-w-125 min-w-62.5">
      <Input
        type="text"
        name="search"
        className={`
          w-full
          pr-11
          pl-4
          h-10
          text-base
          rounded-lg
          text-gray-900
        `}
        placeholder="Buscar..."
        autoComplete="search"
      />

      {/* Ícono de búsqueda - siempre visible, clicable */}
      <button
        type="button"
        className={`
          absolute 
          right-2 
          top-1/2 
          -translate-y-1/2
          flex items-center justify-center
          w-8 h-8
          text-gray-500 hover:text-gray-800
          transition-colors
        `}
        aria-label="Realizar búsqueda"
        // onClick={() => { /* aquí va tu lógica de búsqueda */ }}
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
}
