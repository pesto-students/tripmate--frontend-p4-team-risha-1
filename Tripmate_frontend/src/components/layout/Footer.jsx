import React from "react";
import { Footer } from "flowbite-react";
const Footers = () => {
  return (
    <div className="w-full mt-auto fluid">
      <Footer
        container={true}
        className="p-5 w-full rounded-none bg-firefly-300 mx-auto"
      >
        <Footer.Copyright
          href="#"
          by="Tripmate™"
          year={2022}
          className="text-white"
        />
        <Footer.LinkGroup className="text-white">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footers;
