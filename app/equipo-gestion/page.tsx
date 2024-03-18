import React from "react";
import SimpleCard from "@/components/Card/SimpleCard";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Equipo Gestión",
  description: "equipo-gestión",
  // other metadata
};
function EquipoGestion() {
  const names =
    "Víctor Garcés Muñoz - Juan Caros Arancibia Bastías - José Contreras Minte - Mario Sanzana Leiva - Jorge Pradenas Garcés - Juana Torrejón Montenegro - Verónica Carrillo Hernández  - Licci Vigueras Sepulveda - Carolina Jerez Avello - Camila Mesas Galaz - Karla Santander Pino - Valentina Palma Ross.";
  const imageUrl = "/imgs/gestion/central.webp";
  const imageDescription = "fotos";

  const names2 =
    "Matías Fuentes Palma - Juan Carlos Arancibia Bastías - Julio Campos Cárcamo - Ulises Sepúlveda Rubilar - Sergio Molina Guajardo - Mauricio Villouta Cuevas - Steffany Meza Valdebenito - Camila Corvalán Bustamante - Carmen Soto Becerra - Cecilia Concha Carrillo, Marisol Bravo Sanhueza.";
  const imageUrl2 = "/imgs/gestion/brisa.webp";
  const imageDescription2 = "fotos";

  return (
    <>
      <div className="w-full h-36 bg-verde">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Equipo Gestión
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

export default EquipoGestion;
