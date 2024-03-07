import { useEffect, useState } from "react";

const TravelCard = () => {
  const [travelItems, setTravelItems] = useState([]);
  useEffect(() => {
    fetch("Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelItems(data));
  }, []);
  // console.log(travelItems);
  return (
    <div className="container mx-auto ">
      <div className="flex-1   gap-2 py-5 ">
        {travelItems?.map((item) => (
          <div
            key={item?.id}
            className="card w-96  bg-base-100 shadow-xl shadow-gray-400"
          >
            <figure>
              <img className="w-full" src={item?.image} alt="Featured Photo" />
            </figure>
            <div className="card-body ">
              <div className="flex justify-around items-center text-sm">
                <p className="text-[#ffb700]">{item?.title}</p>
                <p>{item?.date}</p>
              </div>
              <p className="text-lg font-semibold p-2">{item?.description}</p>
              <div className="card-actions flex justify-center items-center mb-0">
                <img
                  className="h-12 rounded-full"
                  src={item?.avatar}
                  alt="avatar"
                />
                <p>{item?.name}</p>
                <button className="text-[#FFB700]  ">Read more ...</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCard;
