/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          COORDINADORES BÁSICA Y MEDIA
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-xl mt-4 text-center uppercase">
              Verónica Carrillo Hernández <br />
              Víctor Garcés Muñoz
            </h1>
            <h3 className="font-bold pb-4 text-center">
              Coordinador Media <br /> Coordinador Básica
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/coordinador/vero.webp"
              alt="hola"
            />
            <h1 className="font-bold py-2 text-xl mt-4 text-center">
              CARMEN SOTO BECERRA <br />
              MAURICIO VILLOUTA CUEVAS
            </h1>
            <h3 className="font-bold pb-4 text-center">
              Coordinadora Primer Ciclo <br /> Coordinador Segundo Ciclo y
              Enseñanza Media
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/coordinador/car.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              La educación del siglo XXI ha ido evolucionando desde la enseñanza
              de contenidos al desarrollo de habilidades y que nos mueve hacia
              una sociedad más práctica e inclusiva. El trabajo que, como
              Colegio estamos desempeñando, se centra principalmente en el
              fortalecimiento de aquéllas habilidades que, producto del contexto
              actual, se han ido perdiendo: como las habilidades básicas
              referidas al proceso de lectoescritura, la resolución de
              problemas, la indagación científica, el conocimiento histórico,
              habilidades motrices, entre otras. Sumado a lo anterior las
              habilidades blandas como el trabajo colaborativo, el trabajo en
              equipo, el pensamiento crítico, la sociabilización, que buscan el
              desarrollo integral de nuestros estudiantes para su aporte, como
              personas, a la sociedad.
            </p>
            <p className="p-2">
              La Coordinación Académica, desde la Unidad Técnico Pedagógica,
              entrega lineamientos y colabora, desde el punto de vista más
              técnico, en el proceso educativo de los NNA basándose en las
              directrices que provienen del Ministerio de Educación. Asimismo,
              hemos tomado el desafío de la priorización de contenidos 2023 –
              2025 para nivelar aquéllos que fueron detectados como descendidos
              producto del período de emergencia que vivimos hace unos años
              atrás.
            </p>

            <p className="p-2">
              En resumen, la dupla psicosocial es el puente entre los/las La
              pandemia producto el COVID-19 trajo consigo una serie de
              consecuencias en diferentes aspectos de la vida. El impacto en la
              salud pública, los efectos económicos y el impacto psicológico y
              social han generado un gran estrés, ansiedad y por sobre todo la
              pérdida de seres queridos e incertidumbre económica.
            </p>
            <p className="p-2 ">
              Desde el punto de vista de la educación, el cierre de escuelas y
              universidades en todo el mundo ha interrumpido la educación en
              millones de estudiantes que con el paso de los años, ha mostrado
              las brechas educativas que existen y obligado, de cierta manera, a
              las instituciones a replantearse la forma de entregar enseñanza,
              sobre todo a distancia.
            </p>
            <p className="p-2 ">
              En la actualidad, se busca reanudar la educación de manera segura
              y efectiva después del período en el que la actividad académica se
              vio afectada por la emergencia. En ese enfoque, nuestro colegio
              promueve en su modelo pedagógico una propuesta constructivista en
              la que se cuida la relación alumno – profesor. Asimismo,
              establecemos que el aprendizaje comienza cuando el estudiante es
              tomado en cuenta en sus necesidades e intereses y permite el
              despliegue natural de sus propios talentos, tal como nos
              caracteriza nuestro sello “EL SER COMO PRIORIDAD”.
            </p>
            <p className="p-2 ">
              En esta etapa, nuestro colegio se enfoca en el bienestar de los
              alumnos, así como el de sus familias, brindando los apoyos
              necesarios para que el desarrollo de nuestros estudiantes sea
              óptimo y enriquecedor. Por otro lado, el enfoque hacia el
              desarrollo de un APRENDIZAJE PROFUNDO, la IMPECABILIDAD referida a
              la entrega de productos académicos y el TRABAJO COLABORATIVO
              mediante los grupos interactivos de aprendizaje, harán que
              nuestros estudiantes adquieran la formación necesaria para
              integrarse a la sociedad promoviendo los valores institucionales
              como el HUMANISMO y el LAICISMO.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
