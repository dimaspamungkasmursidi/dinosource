export const Team = () => {
    return (
      <div className="px-4 py-16 mt-10 mx-auto text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 text-center lg:max-w-2xl md:mx-auto sm:text-center">
          <div className="mb-10 rounded-lg gradientCard w-1/2 mx-auto">
            <p className="inline-block px-3 py-px mb-4 text-4xl text-secondary font-logo tracking-wider rounded-full">
              Our Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            our talented team of professionals
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto lg:max-w-screen-lg">
          <div className="flex mb-4 gradient p-4 rounded-lg rounded-tl-[40px]">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://cdn0-production-images-kly.akamaized.net/EwJjJWk7seBVmOXBEwg7xfkVBe8=/500x0/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4112340/original/020277900_1659573458-20220804-Potret_Refal_Hady_yang_Kini_Jadi_Idola_Baru-IG__4_.jpg"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Dimas Pamungkas Mursidi</p>
              <p className="text-sm">Murid Gugel</p>
            </div>
          </div>
          <div className="flex gradient p-4 rounded-lg rounded-tl-[40px]">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Gugel Sensei chan</p>
              <p className="text-sm">Gurunya guru</p>
            </div>
          </div>
          <p className="text-base md:text-lg mt-8 text-center -mb-20">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
      </div>
    );
  };