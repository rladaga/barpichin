import React, { useState } from "react";

// Definimos los días de la semana
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Indicamos qué días tienen contenido real
const hasContent = {
  Lunes: false,
  Martes: false,
  Miércoles: true,
  Jueves: false,
  Viernes: true,
  Sábado: false,
};

// Las imágenes para cada día
const suggestions = {
  Lunes: [],
  Martes: [],
  Miércoles: ["/tacos.jpeg"],
  Jueves: [],
  Viernes: ["/tragos.jpeg"],
  Sábado: [],
};

const Sugerencias = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4 py-8">
      <h2 className="font-milonga text-2xl sm:text-3xl text-[#F0E4C9] mb-4 text-center">
        Sugerencias de la Semana
      </h2>
      <p className="text-[#F0E4C9] text-base sm:text-lg max-w-md text-center mb-6">
        Descubrí nuestras sugerencias especiales para cada día.
      </p>
      {days.map((day) => (
        <div
          key={day}
          className="border border-[#4D1A13] rounded-lg overflow-hidden bg-[#F0E4C9]"
        >
          <button
            type="button"
            className="w-full flex justify-between items-center px-4 py-3 font-milonga text-lg text-[#4D1A13] focus:outline-none"
            onClick={() => setOpen(open === day ? null : day)}
          >
            {day}
            <span
              className={`transition-transform ml-2 ${
                open === day ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>
          {open === day && (
            <div className="p-4 flex flex-col gap-3 bg-[#fff8ef]">
              {hasContent[day as keyof typeof hasContent] ? (
                // Si hay contenido, mostramos las imágenes
                suggestions[day as keyof typeof suggestions].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Sugerencia de ${day}`}
                    className="max-w-full h-auto rounded shadow"
                  />
                ))
              ) : (
                // Si no hay contenido, mostramos "Próximamente"
                <div className="flex flex-col items-center justify-center py-10">
                  <p className="font-milonga text-xl text-[#4D1A13] text-center">
                    Próximamente
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sugerencias;
