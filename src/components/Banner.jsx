import Tirex from "../assets/tirex.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white md:px-10 p-4 max-w-screen-2xl mx-auto mt-14">
      <div className="gradientCard p-4 rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 shadow">
        <div className="flex flex-col py-4 px-2 md:flex-row-reverse justify-between items-center gap-10">
          <div>
            <img src={Tirex} alt="Tirex" className="lg:h-[400px]" />
          </div>
          <div className="md:w-3/5">
            <h2 className="font-logo text-2xl md:text-5xl">
              <span className="text-secondary text-justify">Dinosource</span> akan membantu
              Anda mengenal jenis-jenis dinosaurus
            </h2>
            <div className="mt-5">
            <Link to="/Dinopedia">
              <button className="btnSecondary">
                Mulai
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
