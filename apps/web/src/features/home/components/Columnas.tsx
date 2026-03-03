export default function Columnas() {
  return (
    <>
      {/* Columnas de caracteristicas */}
      <div className="flex flex-wrap lg:flex-row flex-col justify-center gap-8 max-w-5xl">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="text-center max-w-xs">
            <h2 className="text-2xl font-bold">Caracteristica {i + 1}</h2>
            <p className="mt-2 opacity-80">
              Descripción breve de la función {i + 1}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
