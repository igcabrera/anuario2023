import React from "react";
import SimpleCard from "@/components/Card/SimpleCard";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Directivos",
  description: "Directivos",
  // other metadata
};
function Directivos() {
  const names =
    "Juan Carlos Arancibia Bastías, José Contreras Minte, Mario Sanzana Leiva.";
  const imageUrl = "/imgs/directivos/central.webp";
  const imageDescription =
    "Juan Carlos Arancibia Bastías, José Contreras Minte, Mario Sanzana Leiva.";

  const names2 =
    "Ulises Sepúlveda Rubilar, Julio Campos Cárcamo, Juan Carlos Arancibia Bastías.";
  const imageUrl2 = "/imgs/directivos/brisa.webp";
  const imageDescription2 =
    "Ulises Sepúlveda Rubilar, Julio Campos Cárcamo, Juan Carlos Arancibia Bastías.";

  return (
    <>
      <div className="w-full h-36 bg-verde">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Equipo Directivo
        </h1>
      </div>
      <div className="container mx-auto px-4 pt-4">
        <div className="flex flex-wrap px-12">
          <SimpleCard
            titulo="Casa Central"
            names={names}
            imageUrl={imageUrl}
            imageDescription={imageDescription}
          />
          <SimpleCard
            titulo="Sede Brisa del Sol"
            names={names2}
            imageUrl={imageUrl2}
            imageDescription={imageDescription2}
          />
        </div>
      </div>
    </>
  );
}

export default Directivos;
