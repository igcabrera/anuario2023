/* eslint-disable @next/next/no-img-element */
// pages/alumnos/[id].js
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import alumnoData from "@/lib/data/semblanzasE2023.json"; // Suponiendo que tienes un archivo con los datos de los alumnos
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
export default function AlumnoDetail() {
  const { id }: any = useParams();
  const alumno = alumnoData.find((alumno) => alumno.id === parseInt(id));

  if (!alumno) {
    return <div>Alumno no encontrado</div>;
  }

  return (
    <div className=" mx-auto mt-8  max-w-[90%]">
      <div className="flex justify-between mx-4 items-center">
        <Link href="/semblanzas/4e/">
          <button className="bg-azul text-white font-semibold px-4 py-1 mb-4 hover:bg-verde rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            Volver
          </button>
        </Link>

        <div className="flex justify-between mx-4">
          <h3 className="font-bold uppercase ">
            <Link
              className="hover:text-verde"
              href="/semblanzas/4e/"
            >
              Semblanzas{" "}
            </Link>
            <span className="   text-verde">/ </span> 4° Medio{" "}
            <span className="   text-verde">{alumno.letraCurso}</span>
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-body dark:text-white p-6 shadow-xl mb-6 rounded-xl">
          <h1 className="text-xl font-semibold mb-4 uppercase">
            {alumno.nombre}
          </h1>
          <ReactCompareSlider
            className="h-[400px] rounded-xl"
            itemOne={
              <ReactCompareSliderImage
                src={alumno.img}
                alt="Image one"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={alumno.img2}
                alt="Image two"
              />
            }
          />
        </div>
        <div className="bg-white dark:bg-body dark:text-white p-6 shadow-xl mb-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Descripción</h2>
          <p className="text-gray-700 leading-[22px]">{alumno.desc}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-body dark:text-white p-6 shadow-xl mb-6 rounded-xl  gap-4 w-full">
        <div className="col-span-1 my-6">
          <h2 className="text-xl font-semibold mb-2">Apodos</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.apodo}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Regalos útiles</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.regaloutil}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Frases Típicas</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.frasetipica}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Deseo Frustrado</h2>
          <p className="text-gray-700 leading-[18px]">
            {alumno.deseofrustrado}
          </p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Conocido Por</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.conocidopor}</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mt-4 mb-2">Hobbies</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.hobbie}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Amor Platónico</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.amorplatonico}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Vida Amorosa</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.vidaamorosa}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Mejor Talla</h2>
          <p className="text-gray-700 leading-[18px]">{alumno.mejortalla}</p>
        </div>
      </div>
    </div>
  );
}
