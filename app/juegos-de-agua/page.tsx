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
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          Juegos de Agua
        </h1>
      </div>

      {/* Galería de imágenes */}
      <div className="p-6">
        <img
          src="/juegos-agua/cc/portada.webp"
          alt="Imagen del curso"
          className="w-full mb-8 px-12 rounded-xl"
        />
      </div>
      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            onClick={() => openModal(`/juegos-agua/cc/${index + 1}.webp`)}
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/juegos-agua/cc/${index + 1}.webp`}
              alt=""
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuegosAgua;
