"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const JuegosAgua = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
    // Agrega una clase al body para evitar el scroll
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
    // Elimina la clase del body para habilitar el scroll
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
            <div className="max-w-3xl w-full bg-white rounded-lg overflow-hidden relative z-50 max-h-[80vh]">
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
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Apoyo Labor Docente
        </h1>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 mx-8 my-12">
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/enfer.webp`)}
            src="/imgs/apoyo/enfer.webp"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Enfermera. Renée Salazar - Bibliotecaria y Sandra Seguel -
            Multicopiado.
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/inspectores.webp`)}
            src="/imgs/apoyo/inspectores.webp"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Matías Fuentealba, Juan Echeverría, Rubén Lagos, Álvaro Medina.
            Cristina Arévalo, Carlos Rodríguez.
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/secre.webp`)}
            src="/imgs/apoyo/secre.webp"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Vanessa Stevens - Secretaria UTP Johanna Álvarez Secretaria Rectoría
          </h3>
        </div>
      </div>

      <h1 className="font-bold text-center uppercase text-2xl xl:text-4xl">
        Sede Brisa del Sol
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-8 my-12">
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/bs/aus.jpg`)}
            src="/imgs/apoyo/bs/aus.jpg"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Enfermera. Renée Salazar - Bibliotecaria y Sandra Seguel -
            Multicopiado.
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/bs/biblio.webp`)}
            src="/imgs/apoyo/bs/biblio.webp"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Matías Fuentealba, Juan Echeverría, Rubén Lagos, Álvaro Medina.
            Cristina Arévalo, Carlos Rodríguez.
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/bs/dani.jpg`)}
            src="/imgs/apoyo/bs/dani.jpg"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Vanessa Stevens - Secretaria UTP Johanna Álvarez Secretaria Rectoría
          </h3>
        </div>
        <div className="p-4 flex flex-col">
          <img
            className="cursor-pointer object-cover h-64 w-full"
            onClick={() => openModal(`/imgs/apoyo/bs/mari.webp`)}
            src="/imgs/apoyo/bs/mari.webp"
            alt=""
          />
          <h3 className="text-center font-bold text-[14px] leading-4 mt-2">
            Vanessa Stevens - Secretaria UTP Johanna Álvarez Secretaria Rectoría
          </h3>
        </div>
      </div>
    </div>
  );
};

export default JuegosAgua;
