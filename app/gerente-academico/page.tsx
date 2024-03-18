/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Gerente Académico COEMTAL
        </h1>
      </div>
      <section className="mb-36 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Nelson Vergara Bórquez</h1>
            <h3 className="font-bold pb-4">Gerente Académico COEMTAL</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/administrativos/nelsonv.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <h1 className="font-bold py-2 text-2xl text-center">
              MASONERÍA Y EDUCACIÓN
            </h1>
            <p className="p-2">
              Los miembros de la especie humana nacemos instalados en un medio
              que está funcionando: en una sociedad portadora de una cultura que
              le es inherente. Un entorno que en primer lugar le dará un nombre,
              proveerá un lenguaje, un status, asignará roles, pautas de
              conducta, le enseñará y potenciará determinados valores, gustos
              críticos, etc.; un imaginario simbólico que habrá de ser su “marco
              de orientación” para desenvolverse en la vida.
            </p>
            <p className="p-2">
              En el interior de las sociedades hay agrupaciones. Conjuntos de
              individuos cuyas relaciones mutuas les hacen interdependientes en
              algún grado significativo; que interactúan entre sí compartiendo
              una consciencia de pertenencia o afiliación, basada en
              expectaciones de conducta comunes. E instituciones como la Orden
              Masónica, donde hay un modo de actuar corporativamente compartido,
              socialmente organizado, estructurado, reglado, jerarquizado con
              roles definidos entre miembros cooperativos que comparten una
              misión considerada importante que trasciende los fines
              individuales de sus partícipes; y con vocación de permanencia, aun
              cuando puedan sufrir modificaciones con el paso del tiempo.
            </p>

            <p className="p-2">
              La Masonería se define a sí misma como una institución fraternal
              de hombres libres, de naturaleza esencialmente docente, evolutiva
              y ética, cuyos miembros cultivan una concepción de mundo laico –
              basado en el humanismo, naturalismo, la ciencia, la filosofía - y
              una postura ética ante la vida. Donde la persona es respetada cual
              eje central de todos los valores y de toda actividad humana; con
              la convicción que la potencia propia de los seres humanos es capaz
              conocer, entender el mundo y dar sentido racional a su existencia;
              se estimula que cada uno conciba para sí un camino de vida propio,
              basado en la ética, el estudio permanente, la creatividad y el
              trabajo constante; a la vez que sostiene y promueve principios de
              fraternidad, tolerancia, libertad de pensamiento, justicia,
              igualdad, libre examen.
            </p>

            <p className="p-2">
              Al considerarse misionera de la civilización aboga tanto por el
              desarrollo pleno de la persona, como por el desarrollo armónico la
              humanidad toda. Concibiendo a la educación como recurso principal
              para tal logro. otros.
            </p>

            <p className="p-2">
              Su concepción educativa se sustenta en la noción de sujeto en
              desarrollo, al que reconoce en forma expresa su aporte
              autopoyético, y en principios humanistas- laicos materializados en
              la persona como merecedora de una formación integral, desplegada
              vía en un proceso ajeno a todo sectarismo político, religioso e
              ideológico. Abierto en lo teórico-filosófico, para así coadyuvar
              sin cargas dogmáticas al desarrollo de las facultades íntimas
              personales, a la libertad de pensamiento y consciencia; con
              incentivo hacia participación activa en la construcción de sí
              mismo(a); impulsor de la avidez por buscar la verdad mediante la
              indagación sistemática y; promotor permanente del valor del medio
              ambiente para la vida. Bajo tales fundamentos, nuestro Proyecto
              Educativo Institucional conjuga cuatro ideas-fuerza: a) que el ser
              humano nace inteligente y libre; b) que hay un progreso
              científico-cultural permanente y disponible que debe incorporarse
              al dominio de todos y; c) que para una convivencia sana entre
              seres humanos, es ineludible el asentamiento y promoción de
              Valores.
            </p>
            <p className="p-2">
              En tanto que para la docencia a impartir en los colegios considera
              un deber utilizar todo el caudal que brinda la ciencia educativa,
              a fin de provocar en los educandos un aprendizaje profundo que
              incentive el pensar crítico, creativo, cuidadoso, el desarrollo de
              su expresión libre e imaginativa, el despliegue de una relación
              solidaria y participativa hacia los demás, y que en pos del
              bienestar común, se dispongan a la transformación propia y del
              mundo que les rodea, con capacidad de convivir de manera
              respetuosa y preñada de cordura.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
