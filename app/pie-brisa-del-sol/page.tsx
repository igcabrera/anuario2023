/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          PIE Sede Brisa del Sol
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1  p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <img
              className="rounded-xl shadow-md"
              src="/imgs/pie/bs.webp"
              alt="hola"
            />
            <div className="bg-white shadow-md rounded-md  p-6 w-full mt-4">
              <h1 className="text-center text-[14px] py-2 ">
                Fila de arriba de izquierda a derecha: Gabriela Medina, Daniela
                Inostroza, María José Rodríguez, Constanza Cáceres, Valentina
                González.
              </h1>
              <h1 className="text-center text-[14px]">
                Fila de debajo de izquierda a derecha: Karen Sagredo, Camila
                Medina, Camila Corvalán, Macarena Grandón, Valentina Flores.
              </h1>
            </div>
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              INCLUSIÓN EDUCATIVA EN EL COLEGIO ETCHEGOYEN BRISA DEL SOL:
              CONSTRUYENDO UN ENTORNO DIVERSO Y EQUITATIVO
            </h1>
            <p className="p-2">
              Actualmente, el término inclusión se ha visibilizado
              significativamente en nuestra sociedad, gracias a nuevas políticas
              públicas, medios de comunicación y campañas en redes sociales que
              traen consigo; la aceptación de necesidades educativas especiales,
              diversidad de género, aspectos culturales y sociales, los cuales
              componen la identidad de cada persona.
            </p>
            <p className="p-2">
              Ahora bien, si hablamos de inclusión educativa hacemos énfasis en
              la búsqueda continúa de la eliminación de barreras existentes en
              el contexto escolar, propiciando herramientas que permitan a los
              niños/as y jóvenes desenvolverse en un ambiente favorable para el
              aprendizaje, garantizando que todos, independientemente de sus
              habilidades, necesidades o características individuales, tengan
              acceso a una educación de calidad.
            </p>

            <p className="p-2">
              La inclusión escolar va más allá de las adaptaciones físicas o
              tangibles; involucra transformar enfoques, métodos de evaluación y
              estrategias de enseñanza para satisfacer las necesidades de cada
              estudiante. Esto implica un compromiso constante de los
              profesores/as y la comunidad educativa para crear un contexto
              acogedor, donde cada estudiante se sienta respetado, apoyado y
              valorado.
            </p>

            <p className="p-2">
              Nuestro compromiso como Colegio Etchegoyen Brisa del Sol se
              evidencia en que cada año seguimos creciendo como equipo,
              atendiendo a estudiantes desde nivel parvulario hasta segundo año
              medio, desempeñando un papel crucial al identificar tempranamente
              las necesidades de cada niño/a, logrando establecer una base
              sólida para el desarrollo académico y social de los estudiantes a
              lo largo de su trayectoria educativa.
            </p>

            <p className="p-2">
              Finalmente, el apoyo continuo del Programa de Integración Escolar
              en cursos de enseñanza media contribuye a la preparación de los
              estudiantes para la transición a la educación superior o a las
              diferentes áreas de desarrollo que escojan de acuerdo a sus
              intereses, fomentando la adquisición de habilidades sociales,
              emocionales y académicas para el éxito futuro, por lo que es
              elemental seguir progresando y ampliar la cobertura de atención a
              los cursos de tercero y cuarto año medio, entregando de esta
              manera un apoyo generalizado a la comunidad educativa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
