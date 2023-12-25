// Card.js
import React from "react";

const Card = ({ image, name, button, onBacaClick }) => {
  return (
    <div className="relative col-span-2 md:col-3 xl:col-3 w-full flex flex-col justify-between gradientCardDino p-3 rounded-xl">
      <div className="mx-auto">
        <div>
        <figure className="mb-4 overflow-hidden rounded-xs flex items-center justify-center h-40 w-full">
          <img
            src={image}
            alt="img"
            className="w-full h-full object-contain object-center"
          />
        </figure>
        </div>
        <h1 className="mb-2 text-center mobile:mb-2.5 text-xl font-bold text-secondary line-clamp-2 hover:line-clamp-none">
          {name}
        </h1>
        <div className="text-xs flex justify-center items-center">
          <button className="btnCard" onClick={() => onBacaClick(name)}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
