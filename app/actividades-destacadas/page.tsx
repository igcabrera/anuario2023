"use client";
/* eslint-disable @next/next/no-img-element */ import React, {
  useState,
} from "react";

const Noticias = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedImage("");
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
        <h1 className="font-bold text-center uppercase pt-15  text-2xl xl:text-4xl text-white">
          Actividades Destacadas
        </h1>
      </div>
      <h1 className="font-bold uppercase text-center pt-15 mb-6  text-xl xl:text-2xl ">
        Fiestas PAtrias CASA CENTRAL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/actividades/patriascc/${index + 1}.jpg`)
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/patriascc/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <h1 className="font-bold uppercase text-center pt-4 mb-6  text-xl xl:text-2xl ">
        Fiestas PAtrias SEDE BRISA DEL SOL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/actividades/patriasbs/${index + 1}.jpg`)
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/patriasbs/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <h1 className="font-bold uppercase text-center pt-4 mb-6  text-xl xl:text-2xl ">
        MUESTRA FOLCLORICA PLAZA DE ARMAS DE TALCAHUANO
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() => openModal(`/imgs/actividades/fol/${index + 1}.jpg`)}
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/fol/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <h1 className="font-bold uppercase text-center pt-4 mb-6  text-xl xl:text-2xl ">
        ANIVERSARIO 2023 - CASA CENTRAL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/actividades/anicc/${index + 1}.jpg`)
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/anicc/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <h1 className="font-bold uppercase text-center pt-4 mb-6  text-xl xl:text-2xl ">
        ANIVERSARIO 2023 - SEDE BRISA DEL SOL
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/actividades/anibs/${index + 1}.jpg`)
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/anibs/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <h1 className="font-bold uppercase text-center pt-4 mb-6  text-xl xl:text-2xl ">
        Ceremonia Aniversario
      </h1>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/actividades/cerem/${index + 1}.jpg`)
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/actividades/cerem/${index + 1}.jpg`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
