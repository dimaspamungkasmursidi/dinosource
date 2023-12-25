// DinoCard.js

import React from "react";

const DinoCard = ({ dino }) => {
  return (
    <>
      <div className="card">
        <img src={dino.image} alt={dino.name} />
        <h3 className="product-name">{dino.name}</h3>
        <p>Category: {dino.category}</p>
        <p>Description: {dino.description}</p>
      </div>

      <div className="relative col-span-2 md:col-3 xl:col-3 w-full flex flex-col justify-between gradientCardDino p-3 rounded-xl ">
        <div className="mx-auto">
          <figure className="mb-4 overflow-hidden rounded-xs flex items-center justify-center h-40 w-full">
            <img
              src={dino.image}
              alt={dino.name}
              className="w-full h-full object-contain object-center"
            />
          </figure>
          <h1 className="product-name mb-2 text-center mobile:mb-2.5 text-xl font-bold text-secondary line-clamp-2 hover:line-clamp-none">
            {dino.name}
          </h1>
          <p>Category: {dino.category}</p>
          <p>Description: {dino.description}</p>
          <div className="text-xs flex justify-center items-center">
            <button className="btnCard">Selengkapnya</button>
          </div>
          {/* <p className="text-center text-sm text-slate-300">Klik</p> */}
        </div>
      </div>
    </>
  );
};

export default DinoCard;
