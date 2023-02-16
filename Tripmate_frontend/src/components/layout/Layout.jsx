import React from "react";
import Header from "./Header";
import Footers from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="container mx-auto ">{children}</div>
      <Footers />
    </div>
  );
};

export default Layout;
