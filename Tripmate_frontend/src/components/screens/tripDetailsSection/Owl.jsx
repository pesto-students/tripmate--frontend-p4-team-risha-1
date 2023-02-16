import React from "react";
import OwlCarousel from "react-owl-carousel";

const Owl = ({ tourData }) => {
  //console.log(tourData);
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
      {tourData.results?.map((place) => {
        let photos = place.photos ?? [];
        let photo = photos[0]?.photo_reference;
        return (
          <div className="item">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                class="w-48 h-48"
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo}&key=${
                  import.meta.env.VITE_GOOGLE_KEY
                }`}
              />

              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{place.name}</div>
                <p className="text-gray-700 text-base">{place.rating}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
              </div>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default Owl;
