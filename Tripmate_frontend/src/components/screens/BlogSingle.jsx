import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogSingle = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState("");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        let { data } = await axios.get(`${backendUrl}/blog/${id}`);
        setBlogData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);
  return (
    <div className="mx-auto">
      <header>
        <div
          className="w-full bg-cover bg-center h-32"
          style={{
            height: "32rem",
            backgroundImage: `url(${blogData.photoUrl})`,
          }}
        >
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl mb-2">
                {blogData.postTitle}
              </h1>
              <ul>
                <li className="space-x-2">
                  <a
                    className=" px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition duration-300 border border-gray-600"
                    href="#"
                  >
                    {blogData.tags}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="p-6 sm:container xs:container md:w-2/3 md:max-w-4xl mx-auto text-gray-800 text-lg">
        {blogData.postContent}
      </div>
    </div>
  );
};

export default BlogSingle;
