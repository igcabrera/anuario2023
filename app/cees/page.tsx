/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          CEES
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h3 className="font-bold pb-4">Casas Central</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/cess/ccc.webp"
              alt="hola"
            />
          </div>

          <div className="flex items-center flex-col col-span-1 pt-4">
            <h3 className="font-bold pb-4 ">Sede Brisa del Sol</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/cess/cbs.webp"
              alt="hola"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
