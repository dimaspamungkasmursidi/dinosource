import { useState } from "react";
import Logo from "../../public/images/dino.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      link: "About",
      path: "/About",
    },
  ];

  return (
    <>
      <nav className={`gradient md:px-12 p-3 pb-6 max-w-screen-2xl mx-auto text-white ${isMenuOpen ? "fixed top-0 right-0 left-0" : "md:static"}`}>
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-16 items-center">
            <Link to="/Home" className="text-blue-500 font-bold">
              <img
                src={Logo}
                alt="Logo"
                className="w-10 inline-block items-center"
              />
              <span className="font-logo tracking-wider text-primary">RAWR</span>
            </Link>
            <ul className={`md:flex space-x-12 ${isMenuOpen ? "hidden" : "mobile:hidden xs:hidden xxs:hidden xxxs:hidden xsm:hidden"}`}>
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  className="block text-white hover:text-tertiary transition-all duration-00"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          <div className="md:hidden px-2">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl font-bold focus:outline-none"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-5 pt-20 pb-5 bg-secondary ${isMenuOpen ? "block" : "hidden"}`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            className="block text-white text-xl hover:text-tertiary"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;













// import { useState } from "react";
// import Logo from "../../public/images/dino.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };

//   const navItems = [
//     {
//       link: "Home",
//       path: "/",
//     },
//     {
//       link: "Dinopedia",
//       path: "/Dinopedia",
//     },
//     {
//       link: "About",
//       path: "/About",
//     },
//   ];
//   return (
//     <>
//     <nav className="gradient md:px-12 p-3 pb-6 max-w-screen-2xl mx-auto text-white md:static fixed top-0 right-0 left-0">
//       <div className="text-lg container mx-auto flex justify-between items-center font-medium">
//         <div className="flex space-x-16 items-center">
//         <Link to="/Home" className="text-blue-500 font-bold">
//             <img
//               src={Logo}
//               alt="Logo"
//               className="w-10 inline-block items-center"
//             />
//             <span className="font-logo tracking-wider text-primary">RAWR</span>
//           </Link>
//           <ul className="md:flex space-x-12 mobile:hidden xs:hidden xxs:hidden xxxs:hidden xsm:hidden">
//             {navItems.map(({ link, path }) => (
//               <Link
//                 key={link}
//                 to={path}
//                 className="block text-white hover:text-tertiary transition-all duration-00"
//               >
//                 {link}
//               </Link>
//             ))}
//           </ul>
//         </div>

//         <div className="md:hidden px-2"> 
//             <button onClick={toggleMenu} className="text-white text-3xl font-bold focus:outline-none">
//                 {isMenuOpen ? '✕' : '☰'}
//             </button>
//         </div>
//       </div>
//     </nav>

//     <div className={`space-y-4 px-5 pt-20 pb-5 bg-secondary ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
//     {navItems.map(({ link, path }) => (
//               <Link
//                 key={link}
//                 to={path}
//                 className="block text-white text-xl hover:text-tertiary"
//               >
//                 {link}
//               </Link>
//             ))}
//     </div>
//     </>
//   );
// };

// export default Navbar;
