const ImageSection = () => {
  return (
    <div>
      <div className=" ">
        <img
          loading="lazy"
          src="https://i.ibb.co/bFdGG97/shape-27.png"
          alt=""
          className="-mb-28 md:ml-28 animation-spin"
        />

        <div className="relative  ">
          <div className=" md:flex ">
            <img
              loading="lazy"
              src="https://i.ibb.co/9GQTg36/air1.jpg"
              alt=""
              className="md:absolute w-64 animation-flooding4 md:mt-[8rem] "
            />

            <div>
              <img
                loading="lazy"
                src="https://i.ibb.co/tC5D2Tg/air.jpg"
                alt=""
                className=" md:relative md:ml-56 mt-5 animation-flooding3 w-64 rounded-3xl border-4 shadow-2xl border-x-white"
              />
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://i.ibb.co/bFdGG97/shape-27.png"
          alt=""
          className="md:-mt-24 -mt-24 ml-5 md:ml-72 "
        />
      </div>
    </div>
  );
};

export default ImageSection;
