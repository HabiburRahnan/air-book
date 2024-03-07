import Title from "../../Component/Title";

const Travel = () => {
  return (
    <div className="container mx-auto p-10">
      <Title title="Travel " subTile="Blog"></Title>
      <div className="carousel  w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex md:grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="card w-96  bg-base-100 shadow-xl shadow-gray-400">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/f0Xv6Vf/Rectangle-18.png"
                  alt="Featured Photo"
                />
              </figure>
              <div className="card-body ">
                <div className="flex justify-around items-center text-sm">
                  <p className="text-[#ffb700]">Work and Travel</p>
                  <p>16 septembar 23</p>
                </div>
                <p className="text-lg font-semibold p-2">
                  Embracing the Digital Nomad Lifestyle the Digital Nomad thr...
                </p>
                <div className="card-actions flex justify-center items-center mb-0">
                  <img
                    className="h-12 rounded-full"
                    src="https://i.ibb.co/d5NxXB4/1.jpg"
                    alt="avatar"
                  />
                  <p>Ys Stafen</p>
                  <button className="text-[#FFB700]  ">Read more ...</button>
                </div>
              </div>
            </div>
            <div className="card w-96  bg-base-100 shadow-xl shadow-gray-400 ">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/RYDS0pg/Rectangle-18-1.png"
                  alt="Featured Photo"
                />
              </figure>
              <div className="card-body ">
                <div className="flex justify-around items-center text-sm">
                  <p className="text-[#ffb700]">Historical</p>
                  <p>14 septembar 23</p>
                </div>
                <p className="text-lg font-semibold p-2">
                  Historical Journeys: Stepping Back in Time Through Travel
                </p>
                <div className="card-actions flex justify-center items-center mb-0">
                  <img
                    className="h-12 rounded-full"
                    src="https://i.ibb.co/bdbnH01/unnamed.png"
                    alt="avatar"
                  />
                  <p>Habibur Rahman</p>
                  <button className="text-[#FFB700]  ">Read more ...</button>
                </div>
              </div>
            </div>
            <div className="card w-96  bg-base-100 shadow-xl shadow-gray-400">
              <figure>
                <img
                  className="w-full"
                  src="https://i.ibb.co/nBXDD70/Rectangle-18-2.png"
                  alt="Featured Photo"
                />
              </figure>
              <div className="card-body ">
                <div className="flex justify-around items-center text-sm">
                  <p className="text-[#ffb700]">Sustainable Tourism</p>
                  <p>10 septembar 23</p>
                </div>
                <p className="text-lg font-semibold p-2">
                  Sustainable Tourism: Preserving the Planet While Seeing It All
                </p>
                <div className="card-actions flex justify-center items-center mb-0">
                  <img
                    className="h-12 rounded-full"
                    src="https://i.ibb.co/yhCLdC7/3.jpg"
                    alt="avatar"
                  />
                  <p>Elara Thorne</p>
                  <button className="text-[#FFB700]  ">Read more ...</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FFB700] hover:bg-[#FFB700] text-white "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FFB700] hover:bg-[#FFB700] text-white "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
