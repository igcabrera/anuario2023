/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Dupla Psicosocial
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-xl">
              Esteffany Meza y Marisol Bravo
            </h1>
            <h3 className="font-bold pb-4">Casa Central</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/dupla/cc.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              En la permanente búsqueda del mejoramiento de la calidad de la
              educación y el cuidado integral y pleno desarrollo de los/las
              estudiantes, es que surge la incorporación de las duplas
              psicosociales en los establecimientos educacionales, bajo la ley
              N° 20.248, como una forma de contar con profesionales que
              permitieran abordar problemáticas referentes a dificultades
              sociales, emocionales, económicas y culturales, las cuales
              pudieran influir directa o indirectamente en los procesos de
              aprendizaje de los NNA.
            </p>
            <p className="p-2">
              Es por ello que las funciones que deben cumplir las duplas
              psicosociales dentro de los establecimientos educacionales son las
              siguientes:
            </p>
            <ul className="list-disc ml-6">
              <li>
                Abordar situaciones críticas de los/las estudiantes y sus
                familias, bajo una perspectiva pedagógica y en coordinación con
                docentes y asistentes de la educación.{" "}
              </li>
              <li>
                Conocer la realidad y el entorno sociocultural de los/las
                estudiantes del establecimiento educacional, mediante
                entrevistas y/o visitas domiciliarias a padres, madres y/o
                apoderados(as), entrevistas a docentes, a estudiantes y a
                profesionales que trabajen directamente con los NNA, a fin de
                prevenir factores de riesgo y fomentar los factores protectores.
              </li>
              <li>
                Derivación y seguimiento de los casos de estudiantes que
                requieran apoyo de especialistas y redes externas, para ello los
                profesionales psicosociales deben conocer las redes de apoyo con
                las cuales cuenta el establecimiento educacional en su entorno
              </li>
              <li>
                Trabajar con los equipos directivos, de convivencia escolar y
                PIE para generar acciones que permitan abordar, mejorar y
                fortalecer la relación familia/colegio.{" "}
              </li>
              <li>
                Generar instancias con la comunidad educativa, promoviendo la
                convivencia y el buen clima en función del Plan de Convivencia
                Escolar.{" "}
              </li>
            </ul>
            <p className="p-2">
              En resumen, la dupla psicosocial es el puente entre los/las
              estudiantes con el colegio y el entorno, entregando a los
              establecimientos educacionales un diagnóstico claro y oportuno de
              los NNA, a fin de promover políticas y métodos educativos,
              contextualizados y efectivos, en función del mejoramiento de la
              calidad de educación.
            </p>
            <p className="p-2 font-bold">
              “La inteligencia y la habilidad solo pueden funcionar al máximo de
              su capacidad cuando el cuerpo está sano y fuerte” <br />
              <br /> John F. Kennedy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
