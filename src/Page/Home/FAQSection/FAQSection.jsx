const FAQSection = () => {
  return (
    <div className="text-white">
      <div className="collapse collapse-arrow bg-[#006CE4] my-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Biman Bangladesh Airlines
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            repudiandae.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#006CE4] my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          american airlines
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            repudiandae.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#006CE4] ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          malaysia Airlines
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
