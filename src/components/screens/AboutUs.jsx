import React from "react";

const AboutUs = () => {
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
                  <b>About Us</b>
                </h1>
              </div>
              We believe that travel is for everyone. It helps us learn about
              ourselves and the world around us. Our goal is to help more people
              from more backgrounds experience the joy of exploration. Because
              we believe this builds a kinder, more inclusive, more open-minded
              world. Like you, travel is in our DNA. At Tripmate, we believe
              travel opens the door to the greatest, most unforgettable
              experiences life can offer. And we have learned that the best
              travel is about putting yourself out there, about leaving behind
              the everyday, about immersing yourself, rather than just seeing
              the sights. As travelers, you're on a journey, and at Lonely
              Planet, we're on one, too. Over the last two years, travel has
              transformed. We're thinking deeply not just about how we travel
              but why we travel and how to best serve travelers on their journey
              – and we approach our 50th year with a passion and commitment to
              helping others do it, too.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
