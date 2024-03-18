/* eslint-disable @next/next/no-img-element */
import React from "react";
import SimpleCard from "@/components/Card/SimpleCard";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Equipo Gestión",
  description: "equipo-gestión",
  // other metadata
};
function EquipoGestion() {
  return (
    <>
      <div className="w-full h-36 bg-verde">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Equipo Gestión
        </h1>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 mx-8 py-8">
          <div className="bg-white shadow-md rounded-md p-6 m-4">
            <h1 className="text-center font-bold text-2xl pb-4 uppercase">
              Plantel Casa Central 2023
            </h1>
            <img
              src="/imgs/plantel/cc.webp"
              alt=""
            />
          </div>
          <div className="bg-white shadow-md rounded-md p-6 m-4">
            <h1 className="text-center font-bold text-2xl  pb-4 uppercase">
              Plantel Sede Brisa del Sol 2023
            </h1>
            <img
              src="/imgs/plantel/bs.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EquipoGestion;
