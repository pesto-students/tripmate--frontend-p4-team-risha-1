import React, { Fragment, useEffect, useState } from "react";

import { BsCalendar2DateFill } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aside from "./tripDetailsSection/Aside";
import Owl from "./tripDetailsSection/Owl";
import { createApi } from "unsplash-js";
import TripHeader from "./tripDetailsSection/TripHeader";
import axios from "axios";

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESSKEY,
});

const TripDetails = () => {
  const [data, setPhotosResponse] = useState("");
  const [tourData, setTourData] = useState("");
  const [searchParams] = useSearchParams();
  //const []
  const location = searchParams.get("location");
  console.log(location);
  useEffect(() => {
    api.search
      .getPhotos({
        query: `${location}`,
        orientation: "landscape",
        page: 1,
        perPage: 1,
      })
      .then((result) => {
        let img = result.response.results[0].urls.regular;
        setPhotosResponse(img);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  useEffect(() => {
    const cordinates = async () => {
      const place_url = `https://us1.locationiq.com/v1/search?key=${
        import.meta.env.VITE_LOCATION_KEY
      }&q=${location}&format=json`;
      const { data } = await axios.get(place_url);
      const lat = data[0].lat;
      //setLettitude(lat);
      const lon = data[0].lon;
      //setLongitude(lon);
      console.log(lat, lon);
      console.log(`${import.meta.env.VITE_BACKEND_URL}/fetchPlaces`);
      const d = await axios.post(`http://localhost:4000/fetchPlaces`, {
        location: `${lat},${lon}`,
        radius: 50000,
        type: "tourist_attraction",
      });

      // console.log(d.data.results);
      setTourData(d.data);
    };
    cordinates();
  }, []);

  return (
    <div>
      <div className="flex">
        <Aside />
        {}
        <main className="flex h-auto w-full">
          <div className=" w-full md:w-2/3 shadow-lg rounded">
            <TripHeader location={location} data={data} />
            <div className="bg-gray-100 px-4 py-4 h-auto w-full container ">
              <h2 className="text-xl font-bold font-Nunito mt-4 mb-4">
                Explore
              </h2>
              <Owl tourData={tourData} />
            </div>
            {/* Notes section */}
            <div className="w-full px-4 py-4 h-auto bg-white">
              <h2 className="text-xl font-bold font-Nunito mt-4 mb-4">Notes</h2>
              <form className="flex">
                <input
                  type="text"
                  className="rounded px-4 py-4 bg-gray-200 w-[90%] border-0"
                ></input>
                <button className="rounded px-2 py-2 ml-2 text-white bg-firefly-700">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:block overflow-hidden w-1/3 h-screen sticky top-0">
            <div className="mapouter">
              <div className="gmap_canvas h-screen w-full top-15">
                <iframe
                  className="w-full h-full sticky top-0"
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${location}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TripDetails;
