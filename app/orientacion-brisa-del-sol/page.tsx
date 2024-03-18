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
            <h1 className="font-bold py-2 text-2xl">Sergio Molina Guajardo</h1>
            <h3 className="font-bold pb-4"> Orientador Brisa del Sol</h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/ori/ser.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              Estimada Comunidad educativa, hoy tengo el honor de dirigirme a
              ustedes en esta instancia de cierre de un proceso intenso pero
              exitoso de trabajo académico, que ha implicado un gran esfuerzo de
              todos nosotros en pos de nuestro fin más preciado, nuestros
              estudiantes.
            </p>
            <p className="p-2">
              Ha sido un privilegio integrarme a esta hermosa comunidad
              educativa que me ha recibido con los brazos abiertos y el corazón
              dispuesto a colaborar de manera desinteresada en el logro de los
              objetivos comunes, como es la educación de nuestros niños, niñas y
              adolescentes
            </p>

            <p className="p-2">
              La educación es un pilar fundamental en el desarrollo de una
              sociedad, y en el contexto chileno, la orientación educativa
              emerge como un componente esencial para guiar a los estudiantes en
              su camino hacia el éxito académico y personal. La orientación
              educativa contribuye al crecimiento integral de los individuos.
            </p>

            <p className="p-2">
              En Chile, donde el acceso a la educación superior es cada vez más
              amplio, la orientación educativa se convierte en un faro necesario
              para orientar a los estudiantes en la toma de decisiones cruciales
              para su futuro. Uno de los aspectos más destacados es la elección
              de la carrera universitaria, una decisión que impactará
              directamente en la vida profesional y personal del estudiante.
            </p>

            <p className="p-2">
              Sin embargo la orientación educativa no solo se trata de
              proporcionar información sobre las distintas carreras y opciones
              académicas, sino que también implica el desarrollo de habilidades
              socioemocionales. Los orientadores educativos juegan un papel
              crucial al ayudar a los estudiantes a comprender sus fortalezas,
              debilidades, intereses y valores. Este enfoque holístico permite a
              los estudiantes tomar decisiones informadas alineadas con sus
              aspiraciones y aptitudes.
            </p>
            <p className="p-2">
              En el contexto de un mundo laboral en constante cambio, la
              orientación educativa también se adapta para preparar a los
              estudiantes para las demandas del mercado laboral. Esto implica
              desarrollar habilidades transversales, como la comunicación
              efectiva, el trabajo en equipo y la resolución de problemas, que
              son fundamentales en cualquier profesión.
            </p>

            <p className="p-2">
              Tenemos enormes desafíos y oportunidades de mejora para el futuro
              como comunidad educativa, la invitación es a seguir trabajando
              cada vez con más fuerza y coraje, ante un mundo que se nos
              presenta complejo y cambiante, es muy importante la base valórica
              que cada uno de los actores de esta comunidad puede aportar desde
              su rol, asumiendo con entereza la tarea de educar a las futuras
              generaciones.
            </p>
            <p className="p-2">
              Agradezco el trabajo realizado por cada uno de ustedes que poco a
              poco va dando frutos. Espero que el próximo año sea aún más
              memorable, lleno de desafíos, aprendizajes y alegría.
            </p>
            <p className="p-2">
              Muchas gracias, deseo que tengan un feliz término de año.
            </p>
            <p className="p-2">Saludos fraternales</p>
          </div>
        </div>
      </section>
    </div>
  );
}
