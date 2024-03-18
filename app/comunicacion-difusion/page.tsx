/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Departamento de comunicación y difusión
        </h1>
      </div>
      <section className="mb-36 mt-12 xl:mx-32 ">
        <div className="grid grid-cols-1  p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <img
              className="rounded-xl shadow-md"
              src="/imgs/depa/difu.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 text-center p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              <span className="font-bold"> De izquierda a derecha:</span>{" "}
              Patricio Reyes Cuevas - Nelsón Vergara Bórquez - Alex Medina.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
