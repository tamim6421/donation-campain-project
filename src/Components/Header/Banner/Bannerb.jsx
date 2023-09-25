import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh] "
        style={{
          backgroundImage: "url('https://i.ibb.co/Z16pnRC/team.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl font-bol bg-opacity-0">
              I Grow By Helping People In Need
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <button className="p-1 mt-3 md:p-2 rounded-lg bg-[#FF444A] text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// https://i.ibb.co/Z16pnRC/team.jpg
