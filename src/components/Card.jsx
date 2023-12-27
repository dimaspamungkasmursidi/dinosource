// Card.js
import React from "react";

const Card = ({ image, name, button, onBacaClick }) => {
  return (
    <div className="relative w-full flex flex-col justify-between gradientCardDino p-3 rounded-xl">
      <div className="mx-auto text-wrap">
        <figure className="mb-2 overflow-hidden rounded-xs flex items-center justify-center h-40 w-full">
          <img
            src={image}
            alt="img"
            className="w-full object-contain object-center h-[150px]"
          />
        </figure>
        <h1 className="mb-2 text-center text-wrap mobile:mb-2 text-xl font-logo text-secondary line-clamp-2 hover:line-clamp-none">
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
