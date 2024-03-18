/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Coordinador Sede Brisa del Sol
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Cecilia Concha Carrillo</h1>
            <h3 className="font-bold pb-4">
              Coordinadora del Nivel Parvulario
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/coordinador/ceco.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">Estimada comunidad educativa</p>
            <p className="p-2">
              Como área inicial queremos comenzar estas palabras expresando el
              cariño y aprecio a cada uno de ustedes, a las familias de nuestros
              y nuestras estudiantes más pequeños del establecimiento, quienes
              estuvieron al lado en un cien por ciento, acompañando el proceso
              educativo de sus hijos e hijas y apoyando nuestra labor educativa.
            </p>
            <p className="p-2">
              En nuestro establecimiento enseñamos a nuestros niños y niñas a
              buscar la verdad, reflexionar, aprender a dialogar y ser personas
              tolerantes desde pequeños hasta el día de enfrentarse al mundo,
              motivarlos a que vivan de manera alegre y positiva, sobre todo
              como menciona nuestro proyecto educativo: “Ser partícipes del
              conocimiento” y es de esa manera como logramos realizar ese
              trabajo mediante experiencias tales como exposiciones, realización
              de experimentos científicos, incentivar el diálogo abierto y, por
              tanto, el pensamiento reflexivo entre ellos y ellas y con sus
              pares.
            </p>

            <p className="p-2">
              Durante el presente año, dentro de nuestras aulas, nos enfocamos
              en fortalecer el pensamiento humanista en nuestros y nuestras
              estudiantes con la finalidad de formar personas con valores,
              principios y convicciones, consolidar el pensamiento crítico,
              fomentando también la creatividad a través de metodologías
              diversificadas donde los educandos sean los protagonistas activos
              de su propio proceso de aprendizaje, creando de esta manera una
              comunidad investigativa acorde a la visión y misión de nuestro
              establecimiento.
            </p>

            <p className="p-2">Un abrazo fraternal</p>
          </div>
        </div>
      </section>
    </div>
  );
}
