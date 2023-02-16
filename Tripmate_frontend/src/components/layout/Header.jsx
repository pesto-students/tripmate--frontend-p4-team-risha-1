import React, { useState } from "react";
import { Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid={false} rounded={true} className="bg-gold-500 font-Nunito">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-punch-500 dark:text-white">
          TRIPMATE
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
        href="/"
          to="/navbars"
          active={true}
          className="md:px-3 md:py-2 text-punch-500 active:text-punch-500 hover:text-punch-500"
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/about-us" className="md:px-3 md:py-2">
          About
        </Navbar.Link>
        <Navbar.Link href="/faq" className="md:px-3 md:py-2">
          FAQ
        </Navbar.Link>
        <Navbar.Link
          href="/contact-us"
          className="md:px-3 md:py-2 md:bg-gold-100 md:rounded md:shadow-md"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
