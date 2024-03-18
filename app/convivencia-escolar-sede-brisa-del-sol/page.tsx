/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Convivencia Escolar Sede Brisa del Sol
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Matías Fuentes Palma</h1>
            <h3 className="font-bold pb-4">Encargado de Convivencia Escolar</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/ce/mati.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-md text-center">
              Querida comunidad educativa,
            </h1>

            <p className="p-2">
              Es un honor dirigirme a ustedes en este emotivo momento en el que
              celebramos el cierre de otro capítulo en la historia de nuestra
              querida institución. Como encargado de convivencia escolar, es un
              privilegio ser parte de esta familia que ha crecido, aprendido y
              prosperado juntos a lo largo del año.
            </p>
            <p className="p-2">
              Hoy nos reunimos para reflexionar sobre los logros, desafíos y
              experiencias que hemos compartido. En este anuario escolar, cada
              página es un testimonio de los lazos que hemos construido y de la
              diversidad que nos hace únicos.
            </p>

            <p className="p-2">
              La convivencia escolar es el arte de aprender a vivir juntos, de
              respetar nuestras diferencias y encontrar la armonía en la
              diversidad. Este año, hemos trabajado incansablemente para
              fortalecer esos vínculos, creando un entorno donde cada estudiante
              se sienta valorado y apoyado.
            </p>

            <p className="p-2">
              En cada aula, en cada pasillo, en cada rincón de nuestro colegio,
              hemos sido testigos de pequeños gestos que marcan la diferencia.
              Desde la sonrisa amistosa en el pasillo hasta el apoyo en los
              momentos difíciles, cada acto de bondad ha contribuido a tejer la
              red de relaciones que define nuestra convivencia.
            </p>

            <p className="p-2">
              Hemos superado desafíos juntos, hemos celebrado triunfos
              compartidos y hemos aprendido lecciones que van más allá de los
              libros de texto. En esta travesía, hemos forjado no solo
              amistades, sino una comunidad fuerte y unida que se apoya
              mutuamente.
            </p>

            <p className="p-2">
              Miremos hacia el futuro con optimismo y determinación. Que este
              anuario no solo sea un recuerdo, sino también un recordatorio de
              la fuerza que reside en nuestra unidad. Sigamos construyendo
              puentes, derribando barreras y creando un entorno donde todos
              puedan florecer.
            </p>
            <p className="p-2">
              Agradezco a cada uno de ustedes por su compromiso, dedicación y
              contribución a nuestra comunidad. Que los lazos que hemos formado
              perduren en el tiempo y sigan siendo fuente de inspiración para
              las generaciones venideras.
            </p>
            <p className="p-2">
              Felicidades a todos por un año escolar memorable. Que el próximo
              capítulo esté lleno de éxitos, aprendizajes y, sobre todo, una
              convivencia escolar que enriquezca nuestras vidas.
            </p>
            <p className="p-2">¡Gracias y felices recuerdos a todos!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
