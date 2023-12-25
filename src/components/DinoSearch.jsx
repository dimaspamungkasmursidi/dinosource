// DinoSearch.js

import React, { useState } from "react";
import DinoCard from "./DinoCard";

const DinoSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredDinos, setFilteredDinos] = useState([]);

  const dinos = {
    data: [
      {
        id: 1,
        name: "Trex",
        category: "karnivora",
        image: "/src/assets/tirex.png",
        description:
          "Trex merupakan hewan karnivora terbesar di dunia dengan tinggi 1.2 meter dan berbantalan 4-5.",
      },
      {
        id: 2,
        name: "Spinosaurus",
        category: "herbivora",
        image: "/src/assets/spinosaurus.png",
        description:
          "Spinosaurus merupakan hewan herbivora terbesar di dunia dengan tinggi 1.2 meter dan berbantalan 4-5.",
      },
      {
        id: 3,
        name: "Stegosaurus",
        category: "herbivora",
        image: "/src/assets/stegosaurus.png",
        description:
          "Stegosaurus merupakan hewan herbivora terbesar di dunia dengan tinggi 1.2 meter dan berbantalan 4-5.",
      },
      {
        id: 4,
        name: "Triceratops",
        category: "herbivora",
        image: "/src/assets/triceratops.png",
        description:
          "Triceratops merupakan hewan herbivora terbesar di dunia dengan tinggi 1.2 meter dan berbantalan 4-5.",
      },
    ],
  };

  const handleSearch = () => {
    const filtered = dinos.data.filter((dino) =>
      dino.name.toUpperCase().includes(searchInput.toUpperCase())
    );

    // Convert the filtered dinosaurs to a set to ensure uniqueness
    const uniqueDinos = Array.from(
      new Set(filtered.map((dino) => dino.id))
    ).map((id) => filtered.find((dino) => dino.id === id));

    setFilteredDinos(uniqueDinos);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-center gap-2">
        <input
          type="search"
          id="search-input"
          placeholder="Search dino name here.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button id="search" onClick={handleSearch} className="btnSecondary">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDinos.map((dino) => (
          <DinoCard key={dino.id} dino={dino} />
        ))}
      </div>
    </div>
  );
};

export default DinoSearch;
