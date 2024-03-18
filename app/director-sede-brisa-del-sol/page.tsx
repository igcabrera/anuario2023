/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Director Sede Brisa del Sol
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Julio Campos Cárcamo</h1>
            <h3 className="font-bold pb-4">Director Sede Brisa del Sol</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/administrativos/julioc.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              En marzo del 2021 se da inicio a la nueva sede del importante y
              tradicional Colegio Etchegoyen de Talcahuano, denominada Colegio
              Etchegoyen Brisa del Sol, el cual comienza su funcionamiento en un
              contexto muy complejo, como lo fue la pandemia del COVID-19. Esta
              amenaza no amilanó o doblegó el inicio del proyecto que nació para
              extender la visión y misión institucional, conducida por las
              divisas fundamentales de la libertad, fraternidad e igualdad, en
              un nuevo entorno reconocido como el sector de Brisa del Sol, que
              dada su ubicación ha posibilitado el acceso, a su proyecto
              educativo, de distintas familias residentes en la conurbación
              Talcahuano, Hualpén y Concepción.
            </p>
            <p className="p-2">
              Esta ampliación de la oferta educativa impulsada por la
              Corporación Educacional Masónica de Talcahuano, ha sido un acicate
              para que un equipo de profesionales directivos, docentes, personal
              administrativo y de servicios construyan, de forma diaria, la
              promesa de una educación laica adecuada a los vertiginosos tiempos
              actuales y recogiendo más de 112 años de experiencia y presencia
              en el puerto de Talcahuano
            </p>

            <p className="p-2">
              La propuesta educativa, sigue en marcha y los desafíos que día a
              día se presentan, requieren del compromiso de todas las entidades
              que constituyen el colegio. Todas estas acciones, pensando en el
              propósito central de entregar una educación de calidad, focalizada
              en la formación de la persona humanista laica, es decir,
              ciudadanos que presenten los valores del respeto, de la
              tolerancia, la fraternidad y la solidaridad, además de contar con
              una capacidad crítica y conciencia frente a las distintas
              problemáticas sociales. Estudiantes capaces de participar en
              distintas comunidades de aprendizaje, integrando de modo relevante
              y pertinente las tecnologías y el manejo de un segundo idioma para
              la globalización, que les permita el desarrollo adecuado en la era
              actual junto al desarrollo de la autonomía moral de nuestros
              alumnos y alumnas.
            </p>

            <p className="p-2">
              Este es nuestro deseo, anhelo y orientación en la formación de
              estudiantes, ya que como señala Karl A. Meninger “lo que se les dé
              a los niños, los niños darán a la sociedad”, esto revela la
              importancia y responsabilidad que existe en la formación de seres
              humanos, con una actitud reflexiva y ética enfocada en la libertad
              y la búsqueda de la verdad vinculada al pensamiento científico
              filosófico.
            </p>

            <p className="p-2">
              Como institución agradecemos a los que desde los inicios, y a los
              que se han sumado posteriormente, a construir esta comunidad
              educativa, que ya se empina en tres años de funcionamiento. En
              este contexto una especial mención a quienes confían en el trabajo
              diario que se realiza, esto incluye a los padres, madres,
              apoderados, familias, alumnos y todos nuestros colaboradores.
              <br />
              Un saludo fraternal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
