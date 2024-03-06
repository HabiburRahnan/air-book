import { useEffect } from "react";
import { useState } from "react";
import CekBox from "./CekBox";

const Banner = () => {
  const [bannerItems, setBannerItems] = useState([]);
  useEffect(() => {
    fetch("Banner.json")
      .then((res) => res.json())
      .then((data) => setBannerItems(data));
  }, []);
//   console.log(bannerItems);
  return (
    <div>
      <div
        className="hero h-[520px]  bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/f8gCLCM/Rectangle-2.png)",
         
        }}
      >
        <div className="hero-overlay  opacity-0 "></div>
        <div className="hero-content container mx-auto">
          <div className="   ">
            <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-medium py-5 ">
              Welcome to ,<span className="text-[#006CE4]">AirBook</span>
            </h1>

            <div className="bg-white rounded-xl p-10">
              <CekBox></CekBox>
              <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
                {bannerItems?.map((item) => (
                  <div
                    key={item?.id}
                    className="flex
                justify-center items-center  border border-gray-400 px-2 py-5  rounded-xl "
                  >
                    <h1 className="text-base font-semibold">{item?.title} |</h1>
                    <div className="ml-5">
                      <p className="text-base font-semibold">{item?.name}</p>
                      <p>{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
