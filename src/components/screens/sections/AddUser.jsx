import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { async } from "regenerator-runtime";
import { data } from "jquery";
const ADD_USER = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setuserRole] = useState("");
  const [password, setPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handleUser_Role = (e) => {
    setuserRole(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    console.log("in submit");
    e.preventDefault();
    if (name === "" || email === "" || userRole === "" || password === "") {
      setError(true);
    } else {
      try {
        setSubmitted(true);
        console.log("in try catch");
        await axios.post(`https://tripmate-q32wjds34a-as.a.run.app/users`, {
          name: name,
          email: email,
          password: password,
        });
      } catch (e) {
        setError(false);
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
            <form>
              <div className="mt-6">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  User Name
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    required=""
                    autofocus=""
                    onChange={handleName}
                    value={name}
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
                    required=""
                    autofocus=""
                    onChange={handleEmail}
                    value={email}
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
                    onChange={handlePassword}
                    value={password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  User Role
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="role"
                    name="role"
                    type="name"
                    required=""
                    autofocus=""
                    onChange={handleUser_Role}
                    value={userRole}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-punch-600 border border-transparent rounded-md hover:bg-punch-500 focus:outline-none focus:border-punch-700 focus:shadow-outline-punch active:bg-punch-700 transition duration-150 ease-in-out"
                  >
                    ADD
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
export default ADD_USER;
