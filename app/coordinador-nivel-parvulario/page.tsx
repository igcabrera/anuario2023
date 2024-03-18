/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Coordinador
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Carolina Jerez Avello</h1>
            <h3 className="font-bold pb-4">
              Coordinadora del Nivel Parvulario
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/coordinador/caroj.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">Estimada comunidad educativa</p>
            <p className="p-2">
              El 2023 ha sido un buen año para nuestro Nivel Parvulario, en
              donde hemos estado trabajando a la par con nuestras familias, en
              diferentes actividades como : escuelas para padres, reuniones de
              apoderados, disertaciones, tareas, entrevistas, Aprendizajes
              basado en Proyectos Educativos. En nuestras aulas trabajamos
              fuertemente la Iniciación al Idioma Inglés, Proyecto de aulas,
              Unidades de Aprendizaje y Filosofía para niños y niñas durante
              todo el año , permitiéndonos que nuestros párvulos fueran los
              protagonistas activos de sus aprendizajes, se iniciara el
              desarrollo del pensamiento crítico - reflexivo , característica
              muy relevante en el proceso de formación Humanista - Laico que
              nuestro Colegio propone como línea educativa y con un fuerte
              trabajo en el desarrollo de los vínculos afectivos con nuestros
              estudiantes , abrazando así la inclusión en la cual estamos
              inmersos y que con el apoyo de nuestro equipo PIE hemos logrado
              aprender mas y trabajar de mejor forma en esta hermosa y amplio
              término que significa Inclusión. Se realizaron actividades como:
              El día del alumno, celebramos el día del niño (a) , la celebración
              del Aniversario de nuestro Colegio con actividades de entretención
              y esparcimiento para el desarrollo social y personal de nuestros
              alumnos. Otra actividad significativa para ellos fue la
              Celebración de Fiestas Patrias , realizando actividades típicas
              que hacen que los niños y niñas poniendo en práctica el valor de
              la Identidad Nacional y valores Patrios. Realizamos un English
              Concert en donde fue nuestra muestra de los objetivos de
              aprendizaje que lograron nuestros niños y niñas durante el año, a
              través, de la actuación, cantar canciones y diálogos que fueron
              expuestos ante la Comunidad Educativa en el Teatro Dante de
              Talcahuano
            </p>
            <p className="p-2">
              También llevamos a cabo la actividad mas importante para nuestro
              Nivel “La semana del Párvulo” en donde los niños y niñas expresan
              a través de distintas formas su alegría y orgullo de ser un
              párvulo dentro de un colegio , los mas pequeños pero no menos
              importantes.
            </p>

            <p className="p-2">
              Por todo lo antes nombrado y con el inmenso apoyo de Nuestro
              equipo Directivo y Nuestra Comunidad Educativa , podemos decir que
              nuestro departamento del Nivel Parvulario ha crecido en todo
              aspecto y logramos con creces lo que nos propusimos a principio de
              año.
            </p>

            <p className="p-2">Un gran abrazo fraternal!!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
