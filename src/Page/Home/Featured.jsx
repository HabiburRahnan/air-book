import { useEffect, useState } from "react";
import Title from "../../Component/Title";

const Featured = () => {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setCardItems(data));
  }, []);
  // console.log(cardItems);
  return (
    <div className="container mx-auto py-10">
      <Title title="Featured" subTile="Destinations"></Title>
      <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
        {cardItems?.map((item) => (
          <div
            key={item?.id}
            className="card md:w-80 w-96 lg:w-96  bg-base-100 shadow-xl shadow-gray-400 mx-auto md:gap-5"
          >
            <figure>
              <img className="w-full " src={item?.image} alt="Featured Photo" />
            </figure>
            <div className="card-body ">
              <p className="text-lg font-semibold">{item?.title}</p>
              <div className="card-actions justify-center">
                <button className="bg-[#FFB700]  px-10 py-2 rounded-lg">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
