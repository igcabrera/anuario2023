/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-40 bg-verde ">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Administración y Finanzas
        </h1>
      </div>
      <section className=" mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6">
          <div className="flex items-center flex-col col-span-1 pt-4">
            <h1 className="font-bold py-2 text-2xl">Manuel Canto Garrido</h1>
            <h3 className="font-bold pb-4">
              Gerente Administración y Finanzas
            </h3>

            <img
              className="rounded-xl shadow-md"
              src="/imgs/coemtal/finanzas/manu.webp"
              alt="hola"
            />
          </div>
          <div className="col-span-2 mt-4 p-6 bg-white shadow-md rounded-md">
            <p className="p-2">
              En el primer semestre del año 2023, se ha terminado la
              construcción del nuevo “Colegio Echegoyen Brisa del Sol”, con una
              superficie construida de 8.752 mts2, que considera una capacidad
              instalada de infraestructura para atender a 1.220 alumnos desde
              pre kínder hasta cuarto año de enseñanza media para el año 2024,
              equivalente a dos niveles por curso, con todas las dependencias
              adicionales que establece la norma del Ministerio de Educación.
            </p>
            <p className="p-2">
              De esta forma nuestra Corporación da solución a una demanda
              insatisfecha de matrículas en el Sector Brisa del Sol de la comuna
              de Talcahuano, entregando educación científico humanista de
              acuerdo a lo establecido en el proyecto educativo humanista laico
              bajo la modalidad de colegio particular subvencionado con
              financiamiento compartido.
            </p>

            <p className="p-2">
              Cabe señalar, que las actividades académicas se iniciaron en marzo
              del año 2021 con la cantidad de 929 alumnos desde pre kínder hasta
              primero de enseñanza media, el segundo año se inicia a contar del
              2022 en el cual se atendió la cantidad de 1.073 alumnos desde pre
              kínder hasta tercero medio y durante el presente año 2023 se
              prestó los servicios educacionales desde pre kínder hasta cuarto
              medio. Finalmente se presentan algunas fotografías de la última
              etapa de construcción, correspondiente al gimnasio, comedor de
              alimentos, etc.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-7  mx-6 items-center p-6 gap-1.5">
          <img
            src="/imgs/coemtal/finanzas/x1.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x2.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x3.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x4.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x5.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x6.webp"
            alt=""
          />
          <img
            src="/imgs/coemtal/finanzas/x7.webp"
            alt=""
          />
        </div>
      </section>
      <section className="text-center   bg-white shadow-md rounded-md mx-6 items-center p-6 mb-12">
        <h3 className="font-bold text-2xl">Casa Central</h3>
        <p>
          Carolina Ramírez Ramírez - Encargada de Adquisiciones y Cobranza,
          Sussan Fuentealba Martínez - Encargada de Presupuestos y Rendiciones
          JUNJI, Miriam Sandoval Fernández - Contadora COEMTAL, Pamela Jara
          Parra - Analista Contable, Marcela Oñate Barra - Encargada de Recursos
          Humanos.
        </p>
        <h3 className="font-bold text-2xl mt-4">Sede Brisa del Sol</h3>
        <p>
          Catherine Romero Oróstica - Encargada de Recursos Humanos y Finanzas
          Sede Brisa del Sol, Angélica Pizarro Peña - Encargada de Tesorería y
          Cobranza Sede Brisa del Sol
        </p>
      </section>
      <section className="mx-6 gap-4 grid pb-12">
        <img
          src="/imgs/coemtal/finanzas/1.webp"
          alt=""
        />
        <img
          src="/imgs/coemtal/finanzas/2.webp"
          alt=""
        />
      </section>
    </div>
  );
}
