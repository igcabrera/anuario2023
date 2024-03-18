/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Inspector General Sede Brisa del Sol
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">
              Ulises Sepúlveda Rubilar
            </h1>
            <h3 className="font-bold pb-4">
              Inspector General Sede Brisa del Sol
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/administrativos/ulises.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h3 className="font-bold text-xl p-2">
              Estimada comunidad educativa del Colegio Etchegoyen reciban un
              afectuoso y fraternal saludo de parte de Inspectoría General de
              sede Brisa del Sol, espero que el año escolar 2023 haya sido
              sumamente positivo y enriquecedor en su proceso escolar y
              formativo.
            </h3>
            <p className="p-2">
              Para el año 2024, esperamos que el trabajo desarrollado por
              Inspectoría y el equipo de Inspectores y asistentes de la
              educación permita realizar un buen acompañamiento a cada uno de
              ustedes en sus procesos educativos y formativo, es por esto que
              les pido, respeto y valoración por cada integrante docente y
              asistente de la educación que los acompaña cada día en este
              transitar de aprendizaje educativo. Buena disposición para recibir
              los consejos, orientaciones y enseñanzas que cada día esta
              institución escolar les brinda con el mayor cariño a través de
              cada uno de los integrantes del equipo directivo, docente y
              asistentes de la educación.
            </p>
            <p className="p-2">
              Ustedes se están formando en una institución que su proyecto
              educativo postula la educación laica. La educación laica no es
              únicamente una educación ajena a cualquier doctrina religiosa,
              sino también, una educación sustentada en principios que implican
              profunda consideración de la libertad y de la justicia así como la
              formación de las personas con una alta responsabilidad en el
              cumplimiento de sus deberes y compromisos adquiridos.
            </p>

            <p className="p-2">
              Cada uno ustedes estimados y estimadas estudiantes puede alcanzar
              las metas escolares propuestas sólo se requiere buena disposición
              al trabajo escolar y recepción del apoyo que el colegio Etchegoyen
              les entrega en la rutina escolar diaria. No digan que no se puede
              y nunca, nunca se rindan frente al desafío que implica el proceso
              escolar.
            </p>

            <p className="p-2">
              Un fraternal abrazo y los esperamos con el mayor afecto en el año
              escolar 2024 con grandes desafíos para cada uno de los integrantes
              de la comunidad educativa del Colegio Etchegoyen Brisa del Sol.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
