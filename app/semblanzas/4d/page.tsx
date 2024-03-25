"use client";
/* eslint-disable @next/next/no-img-element */ import React, {
  useState,
} from "react";
import Link from "next/link";
import alumnoData from "@/lib/data/semblanzasC2023.json";
import { useWindowSize } from "react-use"; // Importa tus datos de alumnos
import { useEffect } from "react";
import profesData from "@/lib/data/BaseProfesC.json";

const CursoDetailA = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [alumnosPerPage, setAlumnosPerPage] = useState(8); // Cantidad de alumnos por página
  const { width } = useWindowSize();
  // Función para manejar el cambio en el término de búsqueda
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar la página a la primera cuando se cambia el término de búsqueda
  };

  // Función para filtrar los alumnos por nombre
  const filteredAlumnos = alumnoData.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lógica para calcular el índice del primer y último alumno en la página actual
  const indexOfLastAlumno = currentPage * alumnosPerPage;
  const indexOfFirstAlumno = indexOfLastAlumno - alumnosPerPage;
  const currentAlumnos = filteredAlumnos.slice(
    indexOfFirstAlumno,
    indexOfLastAlumno
  );

  useEffect(() => {
    if (width < 768) {
      setAlumnosPerPage(4); // Para pantallas pequeñas (menores a 768px)
    } else if (width >= 768 && width < 1024) {
      setAlumnosPerPage(6); // Para pantallas medianas (entre 768px y 1024px)
    } else {
      setAlumnosPerPage(8); // Para pantallas extra grandes (mayores a 1024px)
    }
  }, [width]);

  // Función para cambiar de página
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const curso = {
    imgCurso: "/fotos-cursos/portadas/4d.jpg",
  };

  return (
    <>
      <div className="w-full h-36 bg-azul">
        <h1 className="font-bold text-center pt-15  uppercase text-2xl xl:text-4xl  text-white">
          4° Medio D
        </h1>
      </div>
      <div className=" mx-auto p-6">
        <img
          src={curso.imgCurso}
          alt="Imagen del curso"
          className="w-full mb-8 rounded-lg"
        />
        <section
          id="profe"
          className="flex justify-center items-center"
        >
          {/* Grid de cards de profes */}
          <div className="grid grid-cols-2 max-w-4xl mb-6 justify-center   gap-6">
            {profesData.map((profe) => (
              <div
                key={profe.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={profe.img}
                  alt={profe.nombre}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-md font-semibold mb-2">{profe.nombre}</h3>
                <p className="text-gray-700 mb-4">
                  {profe.desc.slice(0, 80)}...
                </p>
                <Link href={`/profesores/4d/${profe.id}`}>
                  <button className="bg-azul text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                    Ver más
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
        {/* Buscador por nombre */}
        <h3 className="font-bold uppercase text-center text-2xl mb-6">
          Semblanzas
        </h3>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />

        {/* Grid de cards de alumnos */}
        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentAlumnos.map((alumno) => (
            <div
              key={alumno.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={alumno.img}
                alt={alumno.nombre}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-md font-semibold mb-2">{alumno.nombre}</h3>
              <p className="text-gray-700 mb-4">
                {alumno.desc.slice(0, 80)}...
              </p>
              <Link href={`/alumnos/4d/${alumno.id}`}>
                <button className="bg-azul text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                  Ver más
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Paginador */}
        <div className="flex justify-center my-8">
          {Array.from({
            length: Math.ceil(filteredAlumnos.length / alumnosPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-4 py-2 border border-verde bg-verde rounded-md  ${
                currentPage === index + 1
                  ? "bg-azul text-white"
                  : "hover:bg-azul text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CursoDetailA;
