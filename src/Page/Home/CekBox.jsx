const CekBox = () => {
  return (
    <div className="flex justify-between items-center pb-10">
      {/* cekBox */}
      <div className="flex justify-center items-center gap-5">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">One way</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control gap-2">
          <label className="label cursor-pointer">
            <span className="label-text">Round Trip</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>

      {/* seletor */}
      <div className="flex justify-center items-center gap-5 text-[#006CE4]">
        <select className="select select-bordered select-xs l max-w-xs">
          <option disabled selected>
            1 Traveller
          </option>
          <option>Tiny Apple</option>
          <option>Tiny Orange</option>
          <option>Tiny Tomato</option>
        </select>
        <select className="select select-bordered select-xs  max-w-xs">
          <option disabled selected>
            Economy
          </option>
          <option>Tiny Apple</option>
          <option>Tiny Orange</option>
          <option>Tiny Tomato</option>
        </select>
      </div>
    </div>
  );
};

export default CekBox;
