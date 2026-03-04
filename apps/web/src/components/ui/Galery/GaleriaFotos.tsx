// Importa todas las imágenes (método manual o dinámico)
import img1 from "../../../features/home/assets/1.jpeg";
import img2 from "../../../features/home/assets/2.jpeg";
import img3 from "../../../features/home/assets/3.jpeg";
import img4 from "../../../features/home/assets/4.jpeg";
import img5 from "../../../features/home/assets/5.jpeg";
import img6 from "../../../features/home/assets/6.jpeg";
import img7 from "../../../features/home/assets/7.jpeg";
import img8 from "../../../features/home/assets/8.jpeg";
import img9 from "../../../features/home/assets/9.jpeg";
import img10 from "../../../features/home/assets/10.jpeg";
import img11 from "../../../features/home/assets/11.jpeg";
import img12 from "../../../features/home/assets/12.jpeg";
import img13 from "../../../features/home/assets/13.jpeg";
import img14 from "../../../features/home/assets/14.jpeg";
import img15 from "../../../features/home/assets/15.jpeg";
import img16 from "../../../features/home/assets/16.jpeg";
import img17 from "../../../features/home/assets/17.jpeg";
import img18 from "../../../features/home/assets/18.jpeg";
import img19 from "../../../features/home/assets/19.jpeg";
import img20 from "../../../features/home/assets/20.jpeg";
import img21 from "../../../features/home/assets/21.jpeg";
// ... hasta img21
// o usa el truco de abajo para importarlas todas de una

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  // o si usas Vite / Create React App con require.context (ver más abajo)
];

export default function GaleriaFotos() {
  return (
    <div className="px-4 py-8 md:px-8">
      {/* Masonry con columns – muy simple y efectivo */}
      <div
        className="
        columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 
        gap-4 space-y-4
      "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`Fotografía ${index + 1}`}
              loading="lazy" // carga perezosa
              className="
                w-full h-auto block rounded-xl
                transition-transform duration-500 
                group-hover:scale-105
              "
            />
            {/* Overlay sutil al hover (opcional pero moderno) */}
            <div
              className="
              absolute inset-0 bg-linear-to-t from-black/40 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              flex items-end justify-center pb-4
            "
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
