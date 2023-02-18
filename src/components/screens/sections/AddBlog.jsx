import React, { useState } from "react";
import axios from "axios";
import { async } from "regenerator-runtime";

const ADDBLOG = () => {
  const [profileImage, setprofileImage] = useState("");
  const [postContent, setpostContent] = useState("");
  const [tags, settags] = useState("");
  const [author, setauthor] = useState("");
  const [category, setcategory] = useState("");
  const [date, setdate] = useState("");
  const [postTitle, setpostTitle] = useState("");

  const fileSelectedhandler = (event) => {
    console.log(event.target.files[0]);
    setprofileImage(event.target.files[0]);
  };

  const submitFile = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("profileImage", profileImage);
      fd.append("postContent", postContent);
      fd.append("tags", tags);
      fd.append("author", author);
      fd.append("category", category);
      fd.append("date", date);
      fd.append("postTitle", postTitle);

      const data = await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/blog`, fd)
        .then((res) => {
          console.log(res);
        });
      console.log(data);
    } catch (error) {
      setError(error);
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
                  for="category"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  PostTitle
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="postTitle"
                    name="postTitle"
                    type="name"
                    value={postTitle}
                    required=""
                    onChange={(e) => setpostTitle(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  for="postContent"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  PostContent
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <textarea
                    id="name"
                    name="name"
                    type="name"
                    value={postContent}
                    required=""
                    onChange={(e) => setpostContent(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="author"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Author
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="author"
                    name="author"
                    type="name"
                    value={author}
                    required=""
                    onChange={(e) => setauthor(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="category"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Category
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="category"
                    name="category"
                    type="name"
                    value={category}
                    required=""
                    onChange={(e) => setcategory(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="tags"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Tags
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="tags"
                    name="tags"
                    type="name"
                    value={tags}
                    required=""
                    onChange={(e) => settags(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="date"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Date
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    required=""
                    onChange={(e) => setdate(e.target.value)}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700 leading-5"
                >
                  Upload file
                </label>

                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    name="name"
                    type="file"
                    required=""
                    onChange={fileSelectedhandler}
                    autofocus=""
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    onClick={submitFile}
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-punch-600 border border-transparent rounded-md hover:bg-punch-500 focus:outline-none focus:border-punch-700 focus:shadow-outline-punch active:bg-punch-700 transition duration-150 ease-in-out"
                  >
                    submit
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
export default ADDBLOG;
