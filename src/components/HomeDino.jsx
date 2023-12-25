import { Link } from "react-router-dom";
import Card from "./Card";

const HomeDino = () => {
  const card = [
    {
      id: 1,
      image: "/src/assets/tirex.png",
      name: "T-rex",
      button: "Selengkapnya",
    },
    {
      id: 2,
      image: "/src/assets/spinosaurus.png",
      name: "Spinosaurus",
      button: "Selengkapnya",
    },
    {
      id: 3,
      image: "/src/assets/triceratops.png",
      name: "Triceratops",
      button: "Selengkapnya",
    },
    {
      id: 4,
      image: "/src/assets/stegosaurus.png",
      name: "Stegosaurus",
      button: "Selengkapnya",
    },
  ];
  return (
    <>
      <div className="mt-10 mb-4 md:px-10 px-4 max-w-screen-2xl mx-auto">
        <h2 className="font-logo text-2xl md:text-4xl text-white">
          <span className="text-secondary">Dino</span>Pedia Information
        </h2>
        <p className="text-xs text-slate-300">Kunjungi halaman Dinopedia untuk melihat<br />lebih banyak lagi Dinosaurus.</p>
      </div>
      <div className="md:px-10 px-4 grid grid-cols-4 sm:flex mobile:grid-cols-12 xl:grid-cols-10 gap-4">
        {card.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            name={card.name}
            button={card.button}
          ></Card>
        ))}
      </div>
      <div className="my-6 md:px-10 md:my-8 px-4 flex justify-center items-center">
        <Link to="/Dinopedia">
        <button className="btnSecondary cursor-pointer">Dinopedia</button>
        </Link>
      </div>
    </>
  );
};

export default HomeDino;
