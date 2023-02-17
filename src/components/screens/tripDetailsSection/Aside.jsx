import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Aside = () => {
  return (
    <aside className="h-screen sticky top-0 md:flex hidden bg-white w-1/5">
      <div className="p-4">
        <a href="src/components/screens/tripDetailsSection#overview" className="rounded flex px-3 py-2 text-black">
          <div className="flex text-center justify-center">
            <span className="ml-2">Overview</span>
          </div>
        </a>

        <a href="src/components/screens/tripDetailsSection#restaurant" className="rounded flex px-3 py-2 text-black">
          <div className="flex text-center justify-center">
            <span className="ml-2">Restaurants</span>
          </div>
        </a>
        <a href="src/components/screens/tripDetailsSection#notes" className="rounded flex px-3 py-2 text-black">
          <div className="flex text-center justify-center">
            <span className="ml-2">Notes</span>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default Aside;
