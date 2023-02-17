import React from "react";
import { BsCalendar2DateFill } from "react-icons/bs";

const TripHeader = ({ location, data }) => {
  return (
    <div
      className=" flex  h-[300px] bg-center relative"
      style={{
        backgroundImage: `url(${data})`,
        objectFit: "cover",
      }}
    >
      <div className="rounded-xl bg-white shadow-2xl  h-40 absolute w-2/3 -bottom-4 left-[125px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black text-black ">
          {`Trip to ${location}`}
        </h1>
        <div className="flex mt-5">
          <BsCalendar2DateFill />
          <span className="font-font-light ml-3">23-30</span>
        </div>
      </div>
    </div>
  );
};

export default TripHeader;
