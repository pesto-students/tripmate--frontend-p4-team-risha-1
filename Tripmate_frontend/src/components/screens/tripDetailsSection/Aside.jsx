import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Aside = () => {
  return (
    <aside className="h-screen sticky top-0 md:flex hidden bg-white w-1/5">
      <div className="p-4">
        <button className="rounded flex px-3 py-2 bg-firefly-800 text-white">
          <div className="flex text-center justify-center">
            <FaAngleDown className="mt-1" />{" "}
            <span className="ml-2">OVERVIEW</span>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
