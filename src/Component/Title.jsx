/* eslint-disable react/prop-types */

const Title = ({ title, subTile }) => {
  return (
    <div className="container mx-auto flex  mb-5 mt-5 ml-2">
      <div className="container mx-auto text-center  items-center">
        <h1 className="text-3xl md:text-4xl  font-bold text-[#273171]">
          --- {title}
          <span className="text-black">{subTile}</span> ---
        </h1>
      </div>
    </div>
  );
};

export default Title;
