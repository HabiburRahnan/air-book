const Hero = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="hero  bg-base-200 ">
        <div className="hero-content flex-col justify-around lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold py-5">
              Subscribe to our <br></br> Newsletter!
            </h1>
            <p className="py-2 text-[#006CE4]">
              Subscribe to our newsletter and stay updated.
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered border-[#006CE4] w-full  rounded-xl p-5"
            />
            <button className=" w-full p-5 rounded-xl text-white text-center bg-[#FFB700] hover:bg-[#FFB700] mt-5">
              Subscribe
            </button>
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <img
              src="https://i.ibb.co/hWWLpyg/Isolation-Mode-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
