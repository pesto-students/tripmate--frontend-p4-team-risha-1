import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Blogcard from "./Blogcard.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogsAsync } from "../../../slice/blogSlice.js";
const Bloggrid = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);

  console.log(blogs);

  return (
    <div className="container px-5 py-5 mx-auto">
      <h1 className="text-center font-bold text-4xl mb-20 font-Nunito text-punch-400">
        Our Blogs
      </h1>
      <div className="flex flex-wrap -m-4 w-full">
        {/*{blogs.map((blog) => (
          <div class="w-[30%] m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="src/components/screens/sections#">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={blog.photoUrl}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="src/components/screens/sections#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.postTitle}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.postContent}
              </p>

              <Link
                to={`/blog-post/${blog._id}`}
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span class="relative text-black group-hover:text-white">
                  Read More
                </span>
              </Link>
            </div>
          </div>
        ))}*/}
      </div>
    </div>
  );
};

export default Bloggrid;
