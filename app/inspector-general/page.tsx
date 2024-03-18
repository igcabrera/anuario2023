/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Inspector General
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Mario Sanzana Leiva</h1>
            <h3 className="font-bold pb-4">Inspector General</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/administrativos/Mariosan.jpg"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              Cada fin de año, cuando egresa una generación de estudiantes de
              cuarto medio, reflexionamos en cuanto al camino que cada
              estudiante le correspondió recorrer para llegar a esa instancia de
              cierre de una etapa en su formación educativa y personal. Todos
              los esfuerzos realizados durante años por sus padres y profesores
              tenían por objetivo su aprendizaje y felicidad. Por supuesto que
              no todos nuestros esfuerzos han tenido, siempre, el resultado
              esperado, pero esto también conlleva aprendizaje: hay que
              persistir, insistir y esforzarse hasta el final. Sólo así
              sentiremos que valió la pena el trayecto recorrido para alcanzar
              nuestros propósitos o metas.
            </p>
            <p className="p-2">
              No podemos dejar de nombrar a todas las personas que han sido
              significativas en la vida escolar de nuestros estudiantes
              comenzando por el entorno familiar y sus padres los cuales ven en
              esta instancia de finalización el reflejo de todo un esfuerzo,
              muchas veces no exentó de dificultades donde el cariño y amor de
              un hogar, ha sido el pilar fundamental en la seguridad y la
              entrega de herramientas que necesitan nuestros hijos en la
              convivencia diaria y en cada etapa de su desarrollo físico, mental
              y emocional
            </p>

            <p className="p-2">
              Asimismo, los compañeros y compañeras, amigos y amigas del colegio
              son fundamentales en todo el proceso de socialización, o sea, de
              preparación del escolar para la vida en sociedad, lo que requiere
              de aprendizajes muy diversos; de conocimientos, habilidades,
              normas y valores, que identifican al o la estudiante como miembro
              de una comunidad cultural, de un pueblo, de una nación. Es un
              proceso que se inicia desde el propio nacimiento y continúa a lo
              largo de toda la vida.
            </p>

            <p className="p-2">
              Nuestro colegio no sólo entrega herramientas para la continuidad
              de estudios superiores o para la inserción al campo laboral, sino
              que también contribuye en la construcción de aprendizajes y
              significaciones que van configurando su identidad, por eso es tan
              relevante la enseñanza basada en valores que sustentarán su actuar
              como personas responsables y empáticas
            </p>

            <p className="p-2">
              Un cierre de ciclo siempre significa un nuevo comienzo. Es aquí
              donde deberán poner toda su atención y energía. Nuestros jóvenes
              van desarrollando nuevos aprendizajes, experiencias y lecciones de
              vida que los prepararán para ir construyendo ese camino hacía el
              bienestar en la ocupación de un lugar en la sociedad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
