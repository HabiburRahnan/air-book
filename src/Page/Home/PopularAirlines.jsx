import { useEffect, useState } from "react";
import Title from "../../Component/Title";
const PopularAirlines = () => {
  const [populartems, setPopulartems] = useState([]);
  useEffect(() => {
    fetch("Popular.json")
      .then((res) => res.json())
      .then((data) => setPopulartems(data));
  }, []);
  console.log(populartems);
  return (
    <div className="container mx-auto p-10">
      <Title title="Popular" subTile="Airlines"></Title>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {populartems?.map((item) => (
          <div
            key={item.id}
            className="card card-side bg-base-100 h-28 hover:border  hover:border-gray-500 transition  shadow shadow-gray-300 px-2 "
          >
            <figure>
              <img className="h-10 pl-2" src={item.image} alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title hover:underline text-sm">
                {item.title}
              </h2>

              <div className="flex justify-center items-center">
                <img
                  className="h-4 mr-2"
                  src="https://i.ibb.co/0DMNhvX/image.png"
                  alt=""
                />
                <p>{item?.reviws}</p>
                <p className="text-xs">( 753 review )</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAirlines;
