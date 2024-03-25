"use client";
/* eslint-disable @next/next/no-img-element */ import React, {
  useState,
} from "react";

const ExtraEscolar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const titles = [
    "Escuela de Fútbol Damas",
    "Escuela de Fútbol Mixto",
    "Escuela de Rock",
    "Fútbol Varones sub 12",
    "Fútbol Varones sub 14",
    "Fútbol Varones sub 16",
    "Fútbol Varones sub 10",
    "Orquesta de Cámara",
    "Taller de Ajedrez Nivel Inicial",
    "Taller de Ajedrez Nivel Intermedio",
    "Taller de Artes Marciales Nivel Intermedio",
    "Taller de Básquetbol Damas mini-infantil",
    "Taller de Básquetbol damas selección cadete-juvenil",
    "Taller Básquetbol Escuela de Varones",
    "Taller de Básquetbol Mixto",
    "Taller de ciencias, Innovación e Investigación",
    "Taller de comic y manga",
    "Taller de cuentos magicos",
    "Taller de Fotografia",
    "Taller de Gimnasia Rítmica",
    "Taller de pintura técnica mixtas",
    "Taller de Rap, Freestyle y composición de letra",
    "Taller de Simbiontes",
    "Taller de Voleibol",
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
          Extra Escolar
        </h1>
      </div>

      <div className="masonry sm:masonry-sm md:masonry-md mx-8 mb-12">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              openModal(`/imgs/extraescolar/${index + 1}.webp`, titles[index])
            }
            className="rounded-lg bg-gray-500 p-4 break-inside cursor-pointer"
          >
            <img
              src={`/imgs/extraescolar/${index + 1}.webp`}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg"
            />
            <div className="text-center mt-2">
              <h2 className="text-sm font-medium">{titles[index]}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraEscolar;
