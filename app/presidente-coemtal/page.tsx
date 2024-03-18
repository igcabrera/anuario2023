/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Presidente Coemtal
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Jorge Zúñiga Araneda</h1>
            <h3 className="font-bold pb-4">Presidente Directorio COEMTAL</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/administrativos/Jorgez.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              LOS ESTUDIANTES DEL SIGLO 21
            </h1>
            <p className="p-2">
              Desde los orígenes de la creación del Colegio Etchegoyen hace ya
              112 años, con las modificaciones que han ocurrido a lo largo de
              estos años; la idea matriz ha permanecido incólume y no ha sido
              otra que la de ofrecer un servicio educativo a los habitantes de
              Talcahuano y de las comunas vecinas sustentado en los valores del
              laicismo que permitan a sus estudiantes formarse como personas
              integrales y que sean un aporte a la sociedad, indistintamente de
              los campos en los cuales se vayan a desenvolver en sus vidas
              adultas y/o profesionales.
            </p>
            <p className="p-2">
              En la historia de nuestro país como la de nuestro puerto durante
              estos más de 100 años, muchos hechos han ocurrido y la sociedad ha
              tenido diversos cambios; sociedad en la que innumerables
              Etchegoyanos han hecho su valioso aporte, ya sea en la industria,
              la salud, la educación, las artes, los servicios, etc
            </p>

            <p className="p-2">
              Hoy, cuando nos encontramos en la era digital y la inteligencia
              artificial no podemos permanecer impávidos, sino que muy por el
              contrario; debemos adecuarnos a ello para lo cual requerimos
              modificar nuestros sistemas de enseñanza-aprendizaje.
            </p>

            <p className="p-2">
              Los sistemas educacionales actuales han experimentado una serie de
              cambios y transformaciones para adaptarse a las necesidades y
              desafíos de la era digital y global. Los estudiantes de este siglo
              21 además de los conocimientos académicos, requieren fuertemente
              desarrollar habilidades y capacidades, para lo cual nuestro
              colegio también se ha ido adecuando e incorporando en sus
              estrategias metodológicas algunas de ellas, como la alfabetización
              digital, el pensamiento crítico, la creatividad, la comunicación
              efectiva, la colaboración o trabajo en equipo, la adaptabilidad,
              la inteligencia emocional y las habilidades interculturales. En un
              mundo en constante evolución debido a los avances tecnológicos y
              cambios sociales estas habilidades son fundamentales para poder
              tener éxito y desenvolverse adecuadamente. También deben
              desarrollar capacidades adaptativas como la inclusividad y la
              diversidad, el pensamiento interdisciplinar o integración de
              conocimientos, la conciencia global, el aprendizaje continuo entre
              otros.
            </p>

            <p className="p-2">
              Nuestra corporación tiene claridad en ello, por lo cual promueve
              y/o apoya iniciativas a desarrollar en nuestros colegios, cuyos
              líderes junto a sus equipos son los llamados a diseñar las
              estrategias que permitan que la formación de ese Hombre o Mujer
              Humanista Laico, sea un hecho concreto haciendo realidad la idea
              de formar un ser integral. Esos son nuestros sueños, nuestros
              desafíos y nuestras metas para con el estudiante de este siglo, el
              siglo 21.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
