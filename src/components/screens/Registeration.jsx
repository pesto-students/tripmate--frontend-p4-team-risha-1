import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { Link } from "react-router-dom";

const Registeration = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordConfirmation = (e) => {
    if (e.target.value !== password) {
      setError("Your Password is not matching");
    } else {
      setError("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (error === "") {
      try {
        const data = await axios.post(
          `https://tripmate-q32wjds34a-as.a.run.app/users`,
          {
            name,
            email,
            password,
          }
        );
        console.log(data);
      } catch (error) {
        setError(error);
      }
    }
  };
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
            <p className="px-4 py-4 text-red-600">{error}</p>
            <form>
              <div className="mt-6">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Name
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    required=""
                    onChange={(e) => setName(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Email address
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required=""
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Password
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="confpwd"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Confirm Password
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="confpwd"
                    type="password"
                    onChange={handlePasswordConfirmation}
                    required=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    onClick={handleSignUp}
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-punch-600 border border-transparent rounded-md hover:bg-punch-500 focus:outline-none focus:border-punch-700 focus:shadow-outline-punch active:bg-punch-700 transition duration-150 ease-in-out"
                  >
                    Sign up
                  </button>
                </span>
              </div>
            </form>
            <div className="flex justify-center mt-2 space-x-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registeration;
