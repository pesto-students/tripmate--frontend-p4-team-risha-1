import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  // To get current location
  const [location, setLocation] = useState("");
  const [validation, setValidation] = useState("");
  const navigate = useNavigate();
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  async function success(pos) {
    const crd = pos.coords;

    const place_url = `http://api.positionstack.com/v1/reverse?access_key=${
      import.meta.env.VITE_GEOCODE_API_KEY
    }&query=${crd.latitude},${crd.longitude}`;
    const place = await axios.get(place_url);
    console.log(`....${JSON.parse(JSON.stringify(place.data))}`);
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (location !== "") {
      navigate(
        `/trip-details?location=${location}&startDate=${value.startDate}&endDate=${value.endDate}`
      );
    } else {
      setValidation("Location field is required!");
    }
  };
  const handleKnowMoreButton = (e) => {
    e.preventDefault();
    navigate("/about-us");
  };
  return (
    <div
      className="flex flex-col p-3 w-full h-96 bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url("./assets/image.jpg")`,
      }}
    >
      <div className="container flex flex-col md:flex-row">
        <div className="md:flex flex-col md:justify-center justify-start h-96 items-center content-center w-full pl-6 hidden">
          <h1 className="md:text-4xl text-lg text-center font-medium text-black">
            Leave your footprints
            <br /> in the most beautiful places.
          </h1>
          <button
            className="md:px-5 md:py-3 px-2 py-2 shadow-sm bg-punch-600 hover:bg-punch-400  rounded mt-5 text-white uppercase"
            onClick={handleKnowMoreButton}
          >
            Know More
          </button>
        </div>
        <div className="flex justify-center w-full p-6">
          <div className="bg-white backdrop-blur-lg w-full border-gray-200 shadow-md rounded-lg py-3 px-4">
            <form action="" method="post" noValidate>
              <div className="mb-6 flex flex-col  justify-center">
                <label
                  htmlFor="location"
                  className="text-sm text-left mt-5 font-regular mb-3 text-gray-900 font-Nunito uppercase dark:text-white"
                >
                  Where do you want to Go?
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange={handleLocationChange}
                  placeholder="Your location"
                  value={location}
                  required
                  className="block bg-clip-padding form-control rounded-lg bg-gray-100 mb-4"
                />
                <p style={{ color: "red" }}>{validation}</p>
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
                  onClick={handleSubmitClick}
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
