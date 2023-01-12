import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/screens/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route Path="/trip-details" element={<h1>Hello</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
