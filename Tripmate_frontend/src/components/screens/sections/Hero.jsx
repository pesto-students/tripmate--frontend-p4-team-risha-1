import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Hero = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div
      className="flex flex-col p-3 w-full h-96 bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url("./assets/image.jpg")`,
      }}
    >
      <div className="container flex flex-col md:flex-row">
        <div className="flex flex-col md:justify-center justify-start h-96 items-center content-center w-full pl-6">
          <h1 className="md:text-4xl text-lg text-center font-medium text-black">
            Leave your footprints
            <br /> in the most beautiful places.
          </h1>
          <button className="md:px-5 md:py-3 px-2 py-2 shadow-sm bg-punch-600 hover:bg-punch-400  rounded mt-5 text-white uppercase">
            Know More
          </button>
        </div>
        <div className="flex justify-center w-full p-6">
          <div className="bg-white backdrop-blur-lg w-full border-gray-200 shadow-md rounded-lg py-3 px-4">
            <form action="" method="post">
              <div className="mb-6 flex flex-col  justify-center">
                <label
                  htmlFor="location"
                  className="text-sm text-left mt-5 font-regular mb-3 text-gray-900 font-Nunito uppercase dark:text-white"
                >
                  What is your location?
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Your location"
                  className="block bg-clip-padding form-control rounded-lg bg-gray-100 mb-4"
                />
                <label
                  htmlFor="location"
                  className="text-sm text-left font-regular mb-2 text-gray-900 font-Nunito uppercase dark:text-white"
                >
                  Date Range
                </label>
                <Datepicker
                  value={value}
                  useRange={false}
                  onChange={handleValueChange}
                  inputClassName="mt-3 bg-gray-100"
                />
                <button
                  type="submit"
                  className="w-1/2 text-white py-3 mt-4 bg-punch-500 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
