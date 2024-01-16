export const Team = () => {
  return (
    <div className="px-4 py-16 mt-10 mx-auto text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 text-center lg:max-w-2xl md:mx-auto sm:text-center">
        <div className="mb-4 rounded-lg gradientCard w-[80%] md:w-[40%] mx-auto">
          <h2 className="inline-block px-3 py-px mb-4 text-4xl text-secondary font-logo tracking-wider rounded-full">
            About Website
          </h2>
        </div>
          <p className="text-base text-white mb-14 w-[95%] mx-auto">Website ini di buat hanya untuk pembelajaran.<br />Sumber foto mayoritas di ambil dari website DB game Jurassic World Evolution 2. Dan penjelasan tentang dinosaurus di ambil dari website Wikipedia.</p>
        <div className="mb-10 rounded-lg gradientCard w-1/2 md:w-[35%] mx-auto">
          <p className="inline-block px-3 py-px mb-4 text-4xl text-secondary font-logo tracking-wider rounded-full">
            Our Team
          </p>
        </div>
        {/* <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Welcome</span>
          </span>{" "}
          our talented team of professionals
        </h2> */}
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
            <p className="text-lg font-bold">Dr. Gugel S.Kom. Lc. Ma.</p>
            <p className="text-sm">Gurunya guru</p>
          </div>
        </div>
        {/* <p className="text-base md:text-lg mt-10 text-center -mb-20">
          follow ig aing napa cuy, klik aja itu logo ig di bawah..
        </p> */}
      </div>
    </div>
  );
};
