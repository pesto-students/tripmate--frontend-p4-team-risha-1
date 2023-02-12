import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Homepage from "./components/screens/Homepage";
import BlogSingle from "./components/screens/BlogSingle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/trip-details/" element={<h1>Hello</h1>} />
            <Route path="/blog-post/:id" element={<BlogSingle></BlogSingle>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
