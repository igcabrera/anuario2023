"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, useRef } from "react";
import data from "@/lib/data/Cursos.json";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalOpen]);

  const openModal = (imgUrl: any) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  // Obtenemos las categorías únicas utilizando un conjunto (Set)
  const categoriesSet = new Set();
  data.forEach((item) => {
    item.categoria.forEach((cat) => categoriesSet.add(cat));
  });
  const categories = Array.from(categoriesSet);

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.categoria.includes(selectedCategory))
    : data;

  return (
    <div className="p-12 mx-auto">
      <div className="flex justify-center flex-wrap mb-4 space-x-4">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`border rounded-md p-2 ${
            !selectedCategory ? "bg-gray-200" : "bg-white"
          }`}
        >
          Todas las categorías
        </button>
        {categories.map((category: any, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`border rounded-md p-2 my-1 ${
              selectedCategory === category
                ? "bg-success text-white"
                : "bg-white dark:bg-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        {filteredData.map((item) => (
          <div
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
            key={item.id}
          >
            <h2 className="text-xl font-bold mb-2 text-boxdark-2">
              {item.nombreCurso}
            </h2>
            <img
              src={item.img}
              className="cursor-pointer"
              alt={`Imagen del curso ${item.nombreCurso}`}
              onClick={() => openModal(item.img)}
            />
            <div className="card-content">
              <p className="text-boxdark-2 font-bold my-2">
                Docente: {item.nombreDocente}
              </p>
              <p className="text-sm tracking-tight leading-tight text-boxdark-2">
                {item.nombresFoto}
              </p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black-2/40 backdrop-blur-lg bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-999">
            <div
              onClick={closeModal}
              className="absolute top-0 left-0 w-full h-full bg-transparent"
            ></div>
            <div className="max-w-3xl w-full bg-white rounded-lg overflow-hidden relative z-50">
              <img
                src={selectedImage || ""}
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
    </div>
  );
}
