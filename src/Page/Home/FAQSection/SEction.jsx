import Title from "../../../Component/Title";
import FAQSection from "./FAQSection";
import ImageSection from "./ImageSection";

const SEction = () => {
  return (
    <div className="container mx-auto py-20">
      <div>
        <Title title="Frequently"></Title>
      </div>

      <div className="flex-1 xl:flex  justify-around items-center mx-5 ">
        {/* fa que section */}
        <div>
          <h1 className="text-3xl md:text-4xl text-[#142441] font-bold py-5">
            Asked Questions.
          </h1>
          <FAQSection></FAQSection>
        </div>
        {/* fa que image section */}
        <div className="mx-10 mt-10 mb-10">
          <ImageSection></ImageSection>
        </div>
      </div>
    </div>
  );
};

export default SEction;
