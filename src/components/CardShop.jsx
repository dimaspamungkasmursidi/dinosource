const CardShop = () => {
    return ( 
    <>
    <div className="relative col-span-full xxs:col-span-2 mobile:col-span-4 md:col-span-3 xl:col-span-2 w-full flex flex-col justify-between gradientCardDino p-3 rounded-2xl border border-gray-700">
          <div className="mb-2">
            <figure className="mb-1 bg-transparent overflow-hidden rounded-lg p-4 flex items-center justify-center h-32 w-full hover:scale-105 transition-all duration-100 ease-in-out">
              <img
                src="https://cdn.paleo.gg/games/jwe2/images/dino/tyrannosaurusrex.png"
                alt="BMW.jpg"
                className="w-full h-full object-contain object-center"
              />
            </figure>
            <span className="block capitalize text-xs text-gray-400 mb-0.5 mobile:mb-1">
              Clothing
            </span>
            <h1 className="mb-2 mobile:mb-2.5 text-xs font-bold text-white line-clamp-2 hover:line-clamp-none">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
            <p className="text-xs text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#facc15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star stroke-yellow-400 inline-block mr-1"
              >
                <polyline points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polyline>
                {/* <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>  INI GAMBAR CEKLIS TAPI TANPA CLASSNAME
                <polyline points="22 4 12 14.01 9 11.01"></polyline> */}
              </svg>
              4.8 | 120 reviews
            </p>
          </div>
          <button
            className="group relative bg-gray-100 text-sm text-left w-full px-4 py-2 rounded-full text-gray-700 font-semibold mt-2 hover:bg-gray-200 transition-all duration-300 ease-in-out before:bg-secondary before:absolute before:inset-0 before:rounded-full before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-in-out"
            type="button"
            title="Add to cart"
          >
            $ 100.90
            <span className="absolute whitespace-nowrap text-gray-100 -z-10 text-center opacity-0 group-hover:z-10 group-hover:opacity-100 transition-all ease-in-out duration-[400ms] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Buy Now
            </span>
            <div className="absolute w-8 h-8 rounded-full bg-primary flex items-center justify-center top-0.5 bottom-0.5 right-0.5 group-hover:bg-secondary transition-all ease-in-out duration-200 group-hover:-z-10 group-hover:scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus stroke-white"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </div>
          </button>
          <div className="absolute top-3 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-heart cursor-pointer stroke-gray-400 hover:stroke-red-500 transition-all duration-300 ease-in-out"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        </div>
    </>
);
}
 
export default CardShop;