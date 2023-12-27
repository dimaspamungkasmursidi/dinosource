import { Link } from "react-router-dom";
import Logo from "../../public/images/dino.png";

const Footer = () => {
    return ( 
        <>
<div className="relative mt-16 bg-secondary gradientFooter rounded-tl-[40px]">
      <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-6 row-gap-10 mb-6">
          <div className="md:max-w-md">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={Logo} alt="Logo" className="w-16"  />
              <span className="text-2xl font-logo tracking-wide text-gray-100 ">
                Dinosource
              </span>
            </a>
            {/* <div className="mt-2 lg:max-w-sm">
              <p className="text-sm text-white">
                Dinosource is a platform that provides information about
                dinosaurs.
              </p>
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="p-2 font-semibold tracking-wide bg-gradient-to-r from-slate-100 rounded-md rounded-r-xl text-primary">
                Navigation
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Dinopedia"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    Dinosource
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 Dinosource. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-sky-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dmspamungkass/"
              className="transition-colors duration-300 text-pink-400 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}
 
export default Footer;