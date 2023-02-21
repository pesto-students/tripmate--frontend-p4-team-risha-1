import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import Aside from "./tripDetailsSection/Aside.jsx";
import { createApi } from "unsplash-js";
import TripHeader from "./tripDetailsSection/TripHeader.jsx";
import axios from "axios";

const api = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESSKEY,
});

const TripDetails = () => {
  const [data, setPhotosResponse] = useState("");
  const [tourData, setTourData] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
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
      const gurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAMK3vI-Vqdf6l-EwT7xTw3UF-3npnKBGY`;
      const { data } = await axios.get(gurl);
      // const lat = data[0].lat;
      // //setLettitude(lat);
      // const lon = data[0].lon;
      const { lat, lng } = data.results[0].geometry.location;
      //setLongitude(lon);
      console.log(lat, lng);
      console.log(`${import.meta.env.VITE_BACKEND_URL}/fetchPlaces`);
      const d = await axios.post(
        `https://tripmate-q32wjds34a-as.a.run.app/fetchPlaces`,
        {
          location: `${lat},${lng}`,
          radius: 50000,
          type: "tourist_attraction",
        }
      );

      const r = await axios.post(
        `https://tripmate-q32wjds34a-as.a.run.app/fetchPlaces`,
        {
          location: `${lat},${lng}`,
          radius: 50000,
          type: "restaurant",
        }
      );

      // console.log(d.data.results);
      setRestaurant(r.data);
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
            <TripHeader
              location={location}
              data={data}
              startDate={startDate}
              endDate={endDate}
            />
            <div
              id="overview"
              className="bg-gray-100 px-4 py-4 h-auto w-full container "
            >
              <h2 className="text-xl font-bold font-Nunito mt-4 mb-4">
                Explore Tourist Places
              </h2>
              {/*<Owl tourData={tourData} />*/}
            </div>

            <div className="bg-white px-4 py-4 h-auto w-full container ">
              <h2 className="text-xl font-bold font-Nunito mt-4 mb-4">
                Popular Restaurant
              </h2>
              {/*<Owl tourData={restaurant} />*/}
            </div>

            {/* Notes section */}
            {/* <div className="w-full px-4 py-4 h-auto bg-white">
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
            </div> */}
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
