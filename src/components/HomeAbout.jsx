import { Link } from "react-router-dom";
import Brontosaurus from "../assets/diplodocus.png";

const HomeAbout = () => {
  return (
    <>
      <div className="mt-10 mb-4 md:px-10 px-4 max-w-screen-2xl mx-auto">
        <h2 className="font-logo text-2xl md:text-4xl text-white">
          About <span className="text-secondary">Dinosource</span>
        </h2>
        <p className="text-xs text-slate-300">
          About berisi informasi penjelasan tentang <br />
          platform <span className="text-secondary">Dinosource</span>.
        </p>
      </div>
      <div className="rounded-xl md:p-9 px-4 shadow">
        <div className="flex flex-col px-2 md:flex-row-reverse justify-between items-center">
          <div>
            <img src={Brontosaurus} alt="Tirex" className="lg:h-[400px] h-[250px]" />
          </div>
          <div className="md:w-3/5">
          <p className=" text-justify text-slate-200 font-body text-sm md:text-lg gradientCard p-6 pt-8 rounded-br-[60px]">
          <span className="text-secondary text-lg font-logo">Dinosource</span> adalah sebuah platform yang menyediakan informasi tentang
          dinosaurus. Kami menyediakan berbagai informasi terkait dinosaurus
          yang pernah ada di dunia.
          Kalo yang pernah ada di hati aku itu kamu, informasi tentang kamu ga
          ada disini..
        </p>
          </div>
        </div>
      </div>
      <div className="my-4 md:px-10 md:my-8 px-4 flex justify-center items-center">
        <Link to="/About">
        <button className="btnSecondary">About</button>
        </Link>
      </div>
    </>
  );
};

export default HomeAbout;
