import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const USER_DETAILS = () => {
    const { id } = useParams();
    const [userDetails, setuserDetails] = useState(""); 
    let data="";
    let user ="";
    let name,email,userRole;
    const handleSignUp = async (e) => {
      e.preventDefault();
        try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
         data  = await axios.get(`${backendUrl}/users`);
        setuserDetails(data);
        user =userDetails.data[0];
        name = userDetails.data[0].name;
        console.log(name);
        } catch (error) {
            console.log(error);
        }
      
    };
    return (
      <div>
        <div>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>email</td>
                    <td>userRole</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td value={name}>
                    </td>
                </tr>
                </tbody>
                

            </table>
        </div>
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
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      onClick={handleSignUp}
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-punch-600 border border-transparent rounded-md hover:bg-punch-500 focus:outline-none focus:border-punch-700 focus:shadow-outline-punch active:bg-punch-700 transition duration-150 ease-in-out"
                    >
                      fetch
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
  export default USER_DETAILS;