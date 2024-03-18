/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          PIE Casa Central
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1  p-6">
          <div className=" pt-4">
            <img
              className="rounded-xl shadow-md"
              src="/imgs/pie/cc.webp"
              alt="hola"
            />
            <div className="bg-white shadow-md rounded-md mt-2 p-6">
              <h1 className="text-center text-[14px] py-2 ">
                Fila de arriba de izquierda a derecha: Marilyn Vidal, Licci
                Vigueras, Romina Espinoza, Nayareth Pino, Alejandra Oñate,
                Javiera Parra, Estefanía Pezo.
              </h1>
              <h1 className="text-center text-[14px]">
                Fila de debajo de izquierda a derecha: Monserrat Carter,
                Macarena Grandón, Paulina Urrutia, Karla Santander, Pilar Jara,
                Daniela Inostroza, Paula Cid, Vanesa Muñoz.
              </h1>
            </div>
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              ¿Qué es el Programa de integración Escolar?
            </h1>
            <p className="p-2">
              A partir del año 2009 se comienza a implementar el PIE en Chile. A
              pesar de su carácter de integración, como lo dice su nombre y
              también como queda demostrado en sus estrategias de trabajo, este
              es descrito por la autoridad ministerial como un programa de tipo
              inclusivo:
            </p>
            <p className="p-2">
              El PIE es una estrategia inclusiva del sistema escolar, que tiene
              el propósito de contribuir al mejoramiento continuo de la calidad
              de la educación que se imparte en el establecimiento educacional,
              favoreciendo la presencia en la sala de clases, la participación y
              el logro de los objetivos de aprendizaje de todos y cada uno de
              los estudiantes, especialmente de aquellos que presentan
              necesidades educativas especiales.
            </p>

            <p className="p-2">
              En términos prácticos, el PIE implica fundamentalmente el uso de
              recursos en la incorporación de especialistas para el trabajo con
              estudiantes con N.E.E, de manera que presten ciertos apoyos de
              tipo extraordinario durante un tiempo específico o durante toda la
              etapa escolar dependiendo de la evolución de las necesidades
              educativas especiales y del mejoramiento de las condiciones del
              contexto escolar.
            </p>

            <p className="p-2">
              Según el decreto, se entiende por N.E.E de tipo permanente,
              aquellas barreras para aprender y participar que determinados
              estudiantes experimentan durante toda su escolaridad como
              consecuencia de una discapacidad diagnosticada por un profesional
              competente, y que demandan al sistema educacional la provisión de
              apoyos y recursos extraordinarios para asegurar el aprendizaje
              escolar. El decreto refiere los siguientes diagnósticos de
              carácter permanente:
              <ul className="list-disc py-4 ml-6">
                <li>Discapacidad visual</li>
                <li>Discapacidad auditiva</li>
                <li>Disfasia severa</li>
                <li>Trastorno autista</li>
                <li>Déficit cognitivo leve, moderado y severo</li>
                <li>Multidéficit</li>
                <li>Graves alteraciones de la posición y la comunicación</li>
              </ul>
            </p>

            <p className="p-2">
              Las N.E.E de tipo transitorias, son aquellas no permanentes que
              presentan los alumnos en algún momento de su vida escolar a
              consecuencia de un trastorno o discapacidad diagnosticada por un
              profesional competente, y que necesitan de ayudas y apoyos
              extraordinarios para acceder o progresar en el currículum por un
              determinado periodo de su escolarización. Se incluyen las
              siguientes condiciones:
              <ul className="list-disc py-4 ml-6">
                <li>Dificultades específicos del aprendizaje</li>
                <li>Dificultades específicas del aprendizaje de la lectura</li>
                <li>Dificultades específicas de la lectura y escritura</li>
                <li>
                  Dificultad específica del aprendizaje de las matemáticas
                </li>
                <li> Trastornos específicos del lenguaje (TEL)</li>
                <li>
                  {" "}
                  Trastorno déficit atencional con y sin hiperactividad (TDA) o
                  Trastorno hipercinético
                </li>
                <li>
                  {" "}
                  Rendimiento en pruebas de coeficiente intelectual (ci) en
                  rango límite, con limitaciones significativas en la conducta
                  adaptativa
                </li>
              </ul>
            </p>
            <p className="p-2">
              En marco de lo anteriormente mencionado, nuestro establecimiento
              para satisfacer las necesidades de nuestras/as estudiantes y
              potenciar habilidades en ellos/as, consta con un equipo
              multidisciplinario de:
              <ul className="list-disc py-4 ml-6">
                <li>10 educadoras diferenciales</li>
                <li>1 fonoaudióloga</li>
                <li>1 psicóloga</li>
                <li>1 terapeuta ocupacional</li>
                <li> 1 técnico diferencial</li>
                <li> 1 trabajadora social</li>
              </ul>
            </p>
            <p className="p-2">
              Con la convicción de que nuestros/as estudiantes cada uno con sus
              características, intereses, capacidades, emocionalidad y
              necesidades de aprendizajes, puedan desarrollar competencias,
              aptitudes y habilidades que ayuden a su crecimiento y logren ser
              un aporte para nuestra sociedad.
            </p>
            <p className="p-2">
              La educación es el arma más poderosa que puedes usar para cambiar
              el mundo… <br /> Nelson Mandela.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
