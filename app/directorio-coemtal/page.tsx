/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Directorio Coemtal
        </h1>
      </div>
      <section className="mb-36">
        <div className="p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <img
              className="rounded-xl shadow-default max-w-4xl w-full h-auto"
              src="/imgs/administrativos/direct.webp"
              alt="hola"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
