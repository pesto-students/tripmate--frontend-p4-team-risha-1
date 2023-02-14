import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TripDetails = () => {
  return (
    <div>
      <div className="flex">
        <aside className="h-screen sticky top-0 md:flex sm:hidden  bg-white w-1/5">
          <div className="p-4">
            <button className="rounded flex px-3 py-2 bg-firefly-800 text-white">
              <div className="flex text-center justify-center">
                <FaAngleDown className="mt-1" />{" "}
                <span className="ml-2">OVERVIEW</span>
              </div>
            </button>
          </div>
        </aside>

        <main className="flex flex-col h-screen w-full">
          <div className="container bg-white h-screen w-2/3">
            <div
              className="flex h-[300px] bg-center relative"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80)`,
                objectFit: "cover",
              }}
            >
              <div className="rounded-xl bg-white shadow-2xl  h-40 absolute w-2/3 -bottom-4 left-[125px] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-black text-black ">
                  Trip to Paris
                </h1>
                <div className="flex mt-5">
                  <BsCalendar2DateFill />
                  <span className="font-font-light ml-3">23-30</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 h-[300px] w-full container ">
              <h2 className="text-xl font-bold font-Nunito">Explore</h2>
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div class="item">
                  <h4>1</h4>
                </div>
                <div class="item">
                  <h4>2</h4>
                </div>
                <div class="item">
                  <h4>3</h4>
                </div>
                <div class="item">
                  <h4>4</h4>
                </div>
                <div class="item">
                  <h4>5</h4>
                </div>
                <div class="item">
                  <h4>6</h4>
                </div>
                <div class="item">
                  <h4>7</h4>
                </div>
                <div class="item">
                  <h4>8</h4>
                </div>
                <div class="item">
                  <h4>9</h4>
                </div>
                <div class="item">
                  <h4>10</h4>
                </div>
                <div class="item">
                  <h4>11</h4>
                </div>
                <div class="item">
                  <h4>12</h4>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TripDetails;
