import CardShop from "../components/CardShop";
import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    
      const [selectedCategory, setSelectedCategory] = useState("All Dinosaur");
    
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };

  const navItems = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Dinopedia",
      path: "/Dinopedia",
    },
    {
      link: "Shop",
      path: "/Shop",
    },
    {
      link: "About",
      path: "/About",
    },
  ];

    return ( 
        <>
      <header className="bg-secondary fixed top-0 w-full z-50">
        <div className="container max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
            <a
              href="/"
              className="flex items-center text-gray-100 hover:scale-105 transition-all duration-100 ease-in-out"
            >
              <figure className="block mr-2">
                <img
                  src="https://vitejs.dev/logo.svg"
                  alt="Vite Logo"
                  className="h-7 mobile:h-8"
                />
              </figure>
              <span className="text-gray-100 font-bold text-xl hidden mobile:block">
                DShop
              </span>
            </a>
            <ul className="md:flex space-x-12 mobile:hidden xs:hidden xxs:hidden xxxs:hidden xsm:hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  className="block text-white hover:text-primary transition-all duration-00"
                >
                  {link}
                </Link>
              ))}
            </ul>
            <h5 className="font-bold text-lg text-gray-100 mobile:hidden">
              DShop
            </h5>
            <div className="flex items-center space-x-4.5 mobile:space-x-6">
              <button className="relative" type="button" title="wishlist">
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
                  className="lucide lucide-book-heart w-5 stroke-gray-100"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  <path d="M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z"></path>
                </svg>
              </button>

              <button className="relative" type="button" title="cart">
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
                  className="lucide lucide-shopping-cart w-5 stroke-gray-100"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mt-24 container max-w-7xl mx-auto px-5 sm:px-6 min-h-[calc(100vh-189px)] mobile:flex-row-reverse">
        {/* Header */}
        <h1 className="text-center text-secondary font-logo tracking-wider text-3xl mb-8 pt-4 hidden mobile:block">
          DShop
        </h1>

        {/* Container filter and search */}
        <div className="flex tablet:items-center tablet:justify-between flex-col-reverse tablet:flex-row mb-5 gap-4">
          {/* categories filter */}
          <div className="flex items-center overflow-x-scroll overflow-y-hidden categories-filter my-2">
            <button
              className={`capitalize whitespace-nowrap border-2 bg-gray-100 text-sm text-left w-auto px-3 py-1.5 rounded-full text-gray-700 font-medium mr-2 transition duration-300 ease-in-out border-gray-100 ${
                selectedCategory === "All Dinosaur"
                  ? "border-secondary"
                  : "hover:border-secondary"
              }`}
              onClick={() => handleCategoryClick("All Dinosaur")}
            >
              All Dinosaur
            </button>
            <button
              className={`capitalize whitespace-nowrap border-2 bg-gray-100 text-sm text-left w-auto px-3 py-1.5 rounded-full text-gray-700 font-medium mr-2 transition duration-300 ease-in-out border-gray-100 ${
                selectedCategory === "Karnivora"
                  ? "border-secondary"
                  : "hover:border-secondary"
              }`}
              onClick={() => handleCategoryClick("Karnivora")}
            >
              Karnivora
            </button>
            <button
              className={`capitalize whitespace-nowrap border-2 bg-gray-100 text-sm text-left w-auto px-3 py-1.5 rounded-full text-gray-700 font-medium mr-2 transition duration-300 ease-in-out border-gray-100 ${
                selectedCategory === "Herbivora"
                  ? "border-secondary"
                  : "hover:border-secondary"
              }`}
              onClick={() => handleCategoryClick("Herbivora")}
            >
              Herbivora
            </button>
            <button
              className={`capitalize whitespace-nowrap border-2 bg-gray-100 text-sm text-left w-auto px-3 py-1.5 rounded-full text-gray-700 font-medium mr-2 transition duration-300 ease-in-out border-gray-100 ${
                selectedCategory === "Omnivora"
                  ? "border-secondary"
                  : "hover:border-secondary"
              }`}
              onClick={() => handleCategoryClick("Omnivora")}
            >
              Omnivora
            </button>
            <button
              className={`capitalize whitespace-nowrap border-2 bg-gray-100 text-sm text-left w-auto px-3 py-1.5 rounded-full text-gray-700 font-medium mr-2 transition duration-300 ease-in-out border-gray-100 ${
                selectedCategory === "Piscivora"
                  ? "border-secondary"
                  : "hover:border-secondary"
              }`}
              onClick={() => handleCategoryClick("Piscivora")}
            >
              Piscivora
            </button>
          </div>
          {/* search bar */}
          <div className="flex items-center space-x-2.5">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-9 pr-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-sm"
              />
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
                className="lucide lucide-search stroke-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <div>
              <button className="relative w-[2.375rem] h-[2.375rem] flex items-center justify-center rounded-full bg-secondary hover:bg-slate-600 transition duration-100 ease-in-out">
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
                  className="text-white"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 content-center">
          <div className="w-full grid grid-cols-4 mobile:grid-cols-12 xl:grid-cols-10 gap-4">
            <CardShop></CardShop>
            <CardShop></CardShop>
            <CardShop></CardShop>
            <CardShop></CardShop>
            <CardShop></CardShop>
            <CardShop></CardShop>
            <CardShop></CardShop>
          </div>
        </div>
      </main>

      {/* Modal */}
      {/* <div>
        <div
          role="presentation"
          className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
        ></div>
        <div
          role="presentation"
          tabIndex={1}
          className="fixed inset-x-0 bottom-0 top-auto md:top-0 w-full h-auto md:h-screen flex justify-center z-[100] transition-all duration-300 ease-in-out items-center opacity-100 scale-100"
        >
          <div
            role="presentation"
            className="bg-white pt-14 pb-5 rounded-xl w-[32rem]"
          >
            <div className="w-full relative">
              <div className="px-5 overflow-y-auto max-h-[58vh] md:max-h-[58vh]">
                <div className="h-full">
                  <div className="absolute -top-[2.375rem] left-0 w-full">
                    <h5 className="text-center font-bold">Details Product</h5>
                  </div>
                  <div className="absolute -top-10 left-3 z-[101]">
                    <button
                      type="button"
                      aria-aria-label="Close Detail Product"
                      className="w-7 h-7 bg-gray-100 rounded-md flex items-center justify-center hover:bg-secondary transition duration-100 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-chevron-left"
                      >
                        <path d="m15 18-6-6 6-6"></path>
                      </svg>
                    </button>
                    <figure className="relative block w-full h-36 rounded-xl overflow-hidden mt-4 mb-5 px-4 py-5 border border-secondary">
                      <img
                        src="/public/images/bmw.jpg"
                        alt="Product"
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute top-3 mobile:top-4 right-3 mobile:right-4">
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
                    </figure>
                    <div className="flex justify-between mb-4">
                      <div>
                        <h6 className="text-base font-bold mb-px">Mens Casual Slim Fit</h6>
                        <p className="text-sm capitalize text-secondary">men's clothing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </>
     );
}
 
export default Shop;