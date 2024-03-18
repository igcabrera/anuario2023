/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Convivencia Escolar
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Camila Mesas Galaz</h1>
            <h3 className="font-bold pb-4">Encargado de Convivencia Escolar</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/ce/cami.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              Trazando Lazos: La Convivencia Escolar en Nuestra Comunidad
              Educativa
            </h1>

            <p className="p-2">
              En el transcurso de este año escolar, nos hemos embarcado en un
              emocionante viaje, donde la convivencia escolar ha sido el
              epicentro de nuestras experiencias educativas. En nuestra
              comunidad educativa, entendemos que la educación va más allá de
              las aulas y los libros; se trata de construir conexiones
              significativas, nutrir el respeto mutuo y promover un ambiente
              donde cada individuo/a se sienta valorado/a.
            </p>
            <p className="p-2">
              La convivencia escolar no solo se trata de coexistir; es la
              habilidad de aprender, crecer y prosperar juntos. Hemos
              presenciado momentos de solidaridad y apoyo que han tejido los
              hilos de una red fuerte y unida. Desde los y las docentes que
              guían con dedicación hasta los y las estudiantes que comparten sus
              conocimientos, cada miembro de nuestra comunidad contribuye a este
              tejido social que define nuestra experiencia educativa.
            </p>

            <p className="p-2">
              La diversidad de talentos, opiniones y experiencias enriquece
              nuestro entorno, creando un mosaico vibrante de aprendizaje. A lo
              largo de los pasillos y las aulas, hemos fomentado un ambiente
              inclusivo donde cada voz encuentra su eco y cada perspectiva es
              apreciada. Al entender y respetar nuestras diferencias, hemos
              fortalecido los lazos que nos unen.
            </p>

            <p className="p-2">
              La importancia de la comunidad educativa en la convivencia escolar
              no puede subestimarse. Son los esfuerzos conjuntos de estudiantes,
              docentes, asistentes de la educación, personal administrativo y
              apoderados/as lo que ha dado forma a un entorno donde florece el
              aprendizaje y se promueve el bienestar emocional. Todos somos
              arquitectos de este espacio educativo, y cada uno de nosotros/as
              desempeña un papel fundamental.
            </p>

            <p className="p-2">
              A medida que avanzamos hacia nuevos horizontes, llevemos con
              nosotros el espíritu de convivencia, recordando que juntos/as
              somos más fuertes y capaces de alcanzar alturas insospechadas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
