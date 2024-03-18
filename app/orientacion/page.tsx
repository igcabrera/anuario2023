/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          ORIENTACIÓN BÁSICA Y MEDIA
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold  text-2xl">Valentina Palma Ross </h1>
            <h3 className="text-md">Orientadora básica</h3>
            <h1 className="font-bold  text-2xl">Juana Torrejón Montenegro</h1>
            <h3 className="text-md pb-6">Orientadora Media</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/ori/val.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h2 className="font-bold py-2  text-center">
              Estimada generación 2023.
            </h2>
            <p className="p-2">
              La perseverancia puede transformar el fracaso en un logro
              extraordinario (Matt Biondi).
            </p>
            <p className="p-2">
              Algunos de ustedes vienen desde pre kínder y otros se han ido
              incorporando en el camino, han enfrentado desafíos académicos y
              personales, demostrado una increíble capacidad para superar
              obstáculos. La vida no siempre será fácil, pero recuerden que cada
              desafío o error es una oportunidad para crecer y aprender.
            </p>

            <p className="p-2">
              Recordamos hoy nuestras salidas pedagógicas a las Universidades,
              donde conocieron las diferentes carreras que se ofrecen, para
              encantarse y proyectarse con alguna de ellas. Las charlas de
              preparación PAES, FUAS, manejo del stress y otras. Las
              inscripciones PAES, los ensayos PAES, donde olvidó el lápiz, el
              carnet, su dirección, etc.
            </p>

            <p className="p-2">
              Como olvidar sus visitas a la oficina a pedir alguna cosita que se
              quedo en casa o se olvidó, imprimir alguna tarea, también algún
              consejo o solo desahogarse por lo que cada uno estaba viviendo. Se
              agradece la confianza y la cercanía, se ganaron nuestro cariño con
              su alegría, tallas, dibujos dedicados en la pizarra de nuestra
              oficina. No olviden que la llave de su futuro la tienen ustedes,
              con perseverancia, creyendo en ustedes y no escuchando a quienes
              les diga que no pueden. Continúen aprendiendo, explorando y
              descubriendo el mundo. La educación es una herramienta poderosa
              que les permitirá contribuir al cambio y al progreso de esta
              sociedad.
            </p>

            <p className="p-2">
              Queridos egresados dentro de este camino que ya han emprendido,
              los animo a ser valientes, a seguir sus sueños y a construir el
              futuro que anhelan. El éxito y la felicidad están estrechamente
              relacionados con la búsqueda de aquello que les hace sentir vivos.
            </p>
            <p className="p-2">
              Los amigos que han hecho aquí serán una parte invaluable de su
              apoyo en los años venideros. Cultiven esas amistades y manténganse
              cerca a las personas que les hacen sentir bien consigo mismos.
            </p>
            <p className="p-2">
              Por último, agradezcan a sus padres, abuelos, familiares,
              profesores y a todos los que les han apoyado en este viaje. Nadie
              logra el éxito solo, y reconocer a quienes han estado a su lado es
              una muestra de madurez y aprecio.
            </p>
            <p className="p-2">
              Felicidades por este logro, y les deseamos a todos un futuro lleno
              de éxitos, amor y realización personal. ¡Que sus vidas estén
              llenas de aventuras emocionantes y que sigan siempre siendo
              curiosos, valientes y apasionados!
            </p>
            <p className="p-2">
              Con cariño. <br />
              Valentina Palma Ross y J. Verónica Torrejón Montenegro
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
