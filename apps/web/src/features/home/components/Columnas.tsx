export default function Columnas() {
  return (
    <>
      {/* Columnas de caracteristicas */}
      <div className="flex flex-wrap flex-row gap-5">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="max-w-xs">
            <h2 className="text-2xl font-bold">Caracteristica {i + 1}</h2>
            <p className="opacity-80">
              Descripción breve de la función {i + 1}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
