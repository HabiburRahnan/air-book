import { useEffect, useState } from "react";
import Title from "../Component/Title";

const DealsOffers = () => {
  const [offerItems, setOfferItems] = useState([]);
  useEffect(() => {
    fetch("DealsOffers.json")
      .then((res) => res.json())
      .then((data) => setOfferItems(data));
  }, []);
//   console.log(offerItems);
  return (
    <div className="container mx-auto p-10">
      <Title title="Deals and " subTile="Offer"></Title>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {offerItems?.map((product) => (
          <div
            key={product.id}
            className="card card-side bg-base-100  px-5 border border-blue-600 hover:border-black transition  shadow-2xl shadow-gray-400 "
          >
            <figure>
              <img src={product.image} alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title hover:underline text-base">
                {product.title}
              </h2>
              <p className="text-[#006CE4]">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOffers;
