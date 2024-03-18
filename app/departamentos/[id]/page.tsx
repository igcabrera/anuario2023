"use client";
/* eslint-disable @next/next/no-img-element */

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "@/lib/data/departamentos.json";

export default function Departamentos() {
  const { id } = useParams();

  const [img, setImg] = useState("");
  const [img2, setImg2] = useState("");
  const [nombresImg, setNombresImg] = useState("");
  const [nombresImg2, setNombresImg2] = useState("");
  const [nombreDepa, setNombreDepa] = useState("");

  useEffect(() => {
    const d = data.find((d: any) => d.id == id);
    if (d) {
      setImg(d.img);
      setImg2(d.img2);
      setNombresImg(d.nombresImg);
      setNombresImg2(d.nombresImg2);
      setNombreDepa(d.nombreDepa);
    }
  }, [id]);

  return (
    <div>
      <div className="w-full h-40 bg-verde">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Departamento
        </h1>
        <h3 className="font-bold text-center text-xl   uppercase   text-white">
          {nombreDepa}
        </h3>
      </div>
      <div className="container mx-auto mt-5 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <h2 className="text-center mt-5 mb-5 text-xl font-bold">
              <span className="linea" />
              CASA CENTRAL
              <span className="linea" />
            </h2>
            <img
              src={img}
              alt={nombreDepa}
              className="img-responsive border-4 border-blue-500"
            />
            <p className="text-md mt-5 text-center"> {nombresImg} </p>
          </div>
          <div className="p-4">
            <h2 className="text-center mt-5 mb-5 text-xl font-bold">
              <span className="linea" />
              BRISA DEL SOL
              <span className="linea" />
            </h2>
            <img
              src={img2}
              alt={nombreDepa}
              className="img-responsive border-4 border-blue-500"
            />
            <p className="text-md mt-5 text-center"> {nombresImg2} </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
