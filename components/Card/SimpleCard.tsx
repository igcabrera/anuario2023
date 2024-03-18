/* eslint-disable @next/next/no-img-element */
import React from "react";
interface CardProps {
  titulo: string;
  names: string;
  imageUrl: string;
  imageDescription: string; // Define el tipo como "string"
}
const SimpleCard: React.FC<CardProps> = ({
  titulo,
  names,
  imageUrl,
  imageDescription,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 ">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <h3 className="text-xl py-4 uppercase font-bold text-center text-azul">
          {titulo}
        </h3>
        <img
          src={imageUrl}
          alt={imageDescription}
          className="w-full h-200 object-cover"
        />
        <div className="p-4 text-azul text-center">{names}</div>
      </div>
    </div>
  );
};

export default SimpleCard;
