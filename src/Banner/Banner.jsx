/* eslint-disable react/prop-types */

import "./Banner.css";

const Background = ({handleSubmit}) => {


    const handleSubmitData = e =>{
        e.preventDefault()
        const data = e.target.name.value
        handleSubmit(data)
    }


  return (
    <div>
      <div className="container">
        <div className="h-full items-center flex justify-center">
          <div>
            <div>
              <h1 className="text-3xl text-center mb-4 font-bold">        
                I Grow By Helping People In Need
              </h1>
            </div>
            <p className="text lg my-5 text-center text-gray-500 font-semibold">Search by Category: food,  health, clothing, education </p>
            <div className="relative text-center my-3">
              <form onSubmit={handleSubmitData}>
              <input
                type="text"
                name="name"
                placeholder="Search category here"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                className="bg-[#FF444A;] text-white input mt-2 "
                type="submit"
                value="Search"
              />
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
