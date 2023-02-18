import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/Ai";

const Faq = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center min-h-screen py-4 bg-no-repeat 
        bg-cover bg-gray-50 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url("./assets/image.jpg")`,
        }}
      >
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <div>
              <div className="px-4  py-8 justify-center bg-no-repeat bg-cover  ">
                <h1>
                  <b>FAQ</b>
                </h1>
              </div>
              <div className="mt-6">Q1. Question one?</div>
              <div>Ans :Ans of Q1</div>
              <div className="mt-6">Q1. Question one?</div>
              <div>Ans :Ans of Q1</div>
              <div className="mt-6">Q1. Question one?</div>
              <div>Ans :Ans of Q1</div>
              <div className="mt-6">Q1. Question one?</div>
              <div>Ans :Ans of Q1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
