"use client";
/* eslint-disable @next/next/no-img-element */ import React, {
  useState,
} from "react";

const Noticias = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const titles = [
    "ACTO DE CUENTOS INFANTILES",
    "ACTO DE FINALIZACIÓN SEMANA DE LA FAMILIA",
    "BIBLIOTECA ETCHEGOYEN FESTEJO LA SEMANA DEL LIBRO",
    "CAMPEONATO DE FUTBOL CEES",
    "CEREMONIA DE LA LUZ 4° MEDIOS – GENERACIÓN 2023",
    "CIERRE SEMANA DE LA FILOSOFIA",
    "DESFILE GLORIAS NAVALES 2023",
    "DÍA MUNDIAL DE LA ACTIVIDAD FÍSICA",
    "DÍA MUNDIAL DEL LIBRO Y DEL DERECHO DE AUTOR",
    "FIESTA DE FINALIZACIÓN SEMANA DE LA EDUCACIÓN PARVULARIA",
    "INVESTIDURA CEES 2023",
    "OCTAVA FERIA EDUCACIONAL",

    // Agrega los títulos adicionales aquí para cada imagen
  ];

  const titlesbs = [
    "CAMBIO DE MANDO E INSTALACIÓN DE NUEVO CENTRO DE ESTUDIANTES DEL COLEGIO ETCHEGOYEN BRISA DEL SOL (2023-2024)",
    "CELEBRACIÓN DÍA MUNDIAL DEL LIBRO Y LOS DERECHOS DE AUTOR 2023",
    "Charla “Rusia y Europa Occidental. Comentario histórico de sus relaciones. Siglos XVIII al XX”",
    "CONMEMORACIÓN DÍA DE LA TIERRA",
    "CONVERSATORIO CIENTÍFICO OCÉANOS Y CAMBIO CLIMÁTICO",
    "DESAYUNO CUARTOS MEDIOS PRIMERA GENERACIÓN",
    "FERIA EDUCACIONAL 2023",
    "ORQUESTA SINFÓNICA DE LA UNIVERSIDAD DE CONCEPCIÓN “LA VIENA IMPERIAL”",
    "SALIDA PEDAGÓGICA A TEATRO BÍO BÍO",
    "VISITA DEL TALLER DE PERIODISMO DE LA SEDE ETCHEGOYEN BRISA DEL SOL AL DEPARTAMENTO DE COMUNICACIÓN Y DIFUSIÓN DE LA COEMTAL",
    "VISITA LABORATORIO DE CIENCIAS UNIVERSIDAD DE LAS AMERICAS",

    // Agrega los títulos adicionales aquí para cada imagen
  ];

  const openModal = (imageSrc: any, title: any) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedImage("");
    setSelectedTitle("");
    setShowModal(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-2/40 backdrop-blur-lg bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-999">
            <div
              onClick={closeModal}
              className="absolute top-0 left-0 w-full h-full bg-transparent"
            ></div>
            <div className="max-w-3xl w-full bg-white rounded-lg overflow-hidden relative z-50">
              <img
                src={selectedImage}
                alt="Modal"
                className="w-full"
              />
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 m-4 text-white bg-verde rounded-xl p-2 hover:text-gray-300 z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido de la página */}
      <div className="w-full h-36 bg-azul">
        <h1 className="font-bold text-center pt-15 uppercase text-2xl xl:text-4xl text-white">
          NOTICIAS
        </h1>
      </div>
      <h1 className="font-bold text-center pt-15 mb-6 uppercase text-xl xl:text-2xl ">
        CASA CENTRAL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/noticias/cc/${index + 1}.jpg`, titles[index])
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/noticias/cc/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
            <div className="text-center mt-2">
              <h2 className="text-sm font-medium">{titles[index]}</h2>
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold text-center pt-4 mb-6 uppercase text-xl xl:text-2xl ">
        SEDE BRISA DEL SOL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/noticias/bs/${index + 1}.jpg`, titlesbs[index])
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/noticias/bs/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
            <div className="text-center mt-2">
              <h2 className="text-sm font-medium">{titlesbs[index]}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
