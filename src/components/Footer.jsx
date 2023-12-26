const Footer = () => {
    return ( 
        <>
<footer className="relative gradientFooter pt-8 pb-6 mt-14 -z-10">
  <div className="container mx-auto px-4 mt-6">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-logo text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Dinosource</h4>
        <h5 className="text-white mb-2 font-body">
          Platform edukasi sejarah untuk belajar mengenai informasi tentang dinosaurus.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://www.instagram.com/dmspamungkass/"><i className="fab fa-instagram"></i></a>
          </button>
          <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 ml-auto">
            <span className="block text-primary uppercase text-blueGray-500 text-md font-bold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="">Blog</a>
              </li>
              <li>
                <a className="text-white hover:text-primary font-semibold block pb-2 text-sm" href="">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-primary" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-white font-semibold">
          Copyright © {new Date().getFullYear()} Dinosource <br /> Dimas Pamungkas Mursidi
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
     );
}
 
export default Footer;