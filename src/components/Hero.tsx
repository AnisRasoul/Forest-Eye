function Hero() {
  return (
    <div className="bg-primary" id="hero">
      <div className="relative flex justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center text-white absolute mt-4">
          <h1 className="text-4xl font-bold leading-tight xl:text-4xl">
            Protecting Our <span className="text-secondary">Forests</span>:
            Early Detection
            <span className="block">
              for Swift <span className="text-secondary">Action</span>
            </span>
          </h1>
          <div className="mt-8 flex sm:flex-row flex-col justify-center items-center gap-4">
            <a href="/test" className="bg-primaryb text-white py-2 rounded-full md:px-10 px-4 font-medium">
              Test our model
            </a>
            <a className="border-[#3887BE] border-[1px] text-white px-10 py-2 rounded-full">
              Join us
            </a>
          </div>
        </div>
        <div className="md:mt-1 mt-64">
          <img
            src="assets/img-bg.png"
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
