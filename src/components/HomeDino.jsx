import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

const HomeDino = () => {

  const [selectedDino, setSelectedDino] = useState(null);

  const card = [
    {
      id: 1,
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/tyrannosaurusrex.png",
      name: "T-rex",
      button: "Selengkapnya",
      description: "Kunjungi halaman Dinopedia untuk mengetahui lebih lanjut tentang T-rex, dan Dinosaurus lainnya.",
    },
    {
      id: 2,
      image: "/images/triceratops.png",
      name: "Triceratops",
      button: "Selengkapnya",
      description: "Kunjungi halaman Dinopedia untuk mengetahui lebih lanjut tentang Triceratops, dan Dinosaurus lainnya.",
    },
    {
      id: 3,
      image: "https://cdn.paleo.gg/games/jwe2/images/dino/barbaridactylus.png",
      name: "Barbaridactylus",
      button: "Selengkapnya",
      description: "Kunjungi halaman Dinopedia untuk mengetahui lebih lanjut tentang barbaridactylus, dan Dinosaurus lainnya.",
    },
    {
      id: 4,
      image: "/images/elasmosaurus.png",
      name: "Elasmosaurus",
      button: "Selengkapnya",
      description: "Kunjungi halaman Dinopedia untuk mengetahui lebih lanjut tentang elasmosaurus, dan Dinosaurus lainnya.",
    },
  ];
  
    const handleOpenModal = (dino) => {
      setSelectedDino(dino);
    };
  
    const handleCloseModal = () => {
      setSelectedDino(null);
    };

        // Efek untuk mengatur overflow pada body
        useEffect(() => {
          const body = document.body;
          if (selectedDino) {
            // Disable scrolling when the modal is open
            body.style.overflow = "hidden";
          } else {
            // Enable scrolling when the modal is closed
            body.style.overflow = "auto";
          }
      
          // Cleanup function untuk mengembalikan overflow ke nilai semula saat komponen unmount
          return () => {
            body.style.overflow = "auto";
          };
        }, [selectedDino]);

  return (
    <>
      <div className="mt-10 mb-4 md:px-10 px-4 max-w-screen-2xl mx-auto">
        <h2 className="font-logo text-2xl md:text-4xl text-white">
          <span className="text-secondary">Dino</span>Pedia Information
        </h2>
        <p className="text-xs text-slate-300">Kunjungi halaman Dinopedia untuk melihat<br />lebih banyak lagi Dinosaurus.</p>
      </div>
      <div className="md:px-10 px-4 grid grid-cols-2 md:grid-cols-4 lg:flex gap-4">
        {card.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            button={card.button}
            onBacaClick={() => handleOpenModal(card)}
          ></Card>
        ))}
      </div>
      
      {selectedDino && (
        <Modal dino={selectedDino} onClose={handleCloseModal} />
      )}

      <div className="my-6 md:px-10 md:my-8 px-4 flex justify-center items-center">
        <Link to="/Dinopedia">
        <button className="btnSecondary cursor-pointer">Dinopedia</button>
        </Link>
      </div>
    </>
  );
};

export default HomeDino;
