import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center min-h-screen py-4 bg-no-repeat bg-cover bg-gray-50 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url("./assets/image.jpg")`,
        }}
      >
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <BsFillTelephoneFill size={30} />
              999-99-999-99
            </div>
            <div className="mt-6">
              <AiOutlineMail size={30} />
              abc.pqr@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
