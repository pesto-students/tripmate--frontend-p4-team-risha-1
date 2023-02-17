import React from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Homepage from "./components/screens/Homepage.jsx";
import BlogSingle from "./components/screens/BlogSingle.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TripDetails from "./components/screens/TripDetails.jsx";
import Login from "./components/screens/Login.jsx";
import Registeration from "./components/screens/Registeration.jsx";
import ContactUs from "./components/screens/ContactUs.jsx";
import AboutUs from "./components/screens/AboutUs.jsx";
import FAQ from "./components/screens/Faq.jsx";
import TERMS from "./components/screens/TermsAndConditions.jsx"
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/trip-details/" element={<TripDetails />} />
            <Route path="/blog-post/:id" element={<BlogSingle></BlogSingle>} />
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/reg" element={<Registeration />} ></Route>
            <Route path="/contact-us" element={<ContactUs />} ></Route>
            <Route path="/about-us" element={<AboutUs />} ></Route>
            <Route path="/faq" element={<FAQ />} ></Route>
            <Route path="/t&c" element={<TERMS />} ></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
