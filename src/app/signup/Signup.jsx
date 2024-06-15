"use client";
import React, { useState } from "react";
import SignupSvg from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://i.stack.imgur.com/34AD2.jpg",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }

    // Form Submit Code
    try {
      const result = await signUp(data);
      // console.log(result);
      toast.success("User is registered !!", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://i.stack.imgur.com/34AD2.jpg",
      });
    } catch (error) {
      console.log(error);
      toast.error("Signup Errpr !!" + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "https://i.stack.imgur.com/34AD2.jpg",
    });
  };
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 ">
        <div className="py-5">
          <div className="my-8 flex justify-center">
            <Image
              src={SignupSvg}
              style={{
                width: "40%",
              }}
              alt="SignUp banner"
            />
          </div>
          <h1 className="text-3xl text-center">SignUp Here</h1>
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 mt-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  name="user_name"
                  onChange={(event) => {
                    setData({
                      ...data,
                      name: event.target.value,
                    });
                  }}
                  value={data.name}
                  // required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  name="user_email"
                  onChange={(event) => {
                    setData({
                      ...data,
                      email: event.target.value,
                    });
                  }}
                  value={data.email}
                  // required
                />
              </div>
              <div>
                <label
                  htmlFor="user_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="user_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  name="user_password"
                  onChange={(event) => {
                    setData({
                      ...data,
                      password: event.target.value,
                    });
                  }}
                  value={data.password}
                  // required
                />
              </div>
              <div>
                <label
                  htmlFor="user_about"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About
                </label>
                <textarea
                  type="text"
                  id="user_about"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter about here..."
                  rows={5}
                  name="user_about"
                  onChange={(event) => {
                    setData({
                      ...data,
                      about: event.target.value,
                    });
                  }}
                  value={data.about}
                  // required
                ></textarea>
              </div>
              {/* <div>
                <label
                  htmlFor="user_profileURL"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profile URL
                </label>
                <input
                  type="text"
                  id="user_profileURL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="profile url"
                  name="user_profileURL"
                  required
                />
              </div> */}
              <div className="mt-4 flex justify-center">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Sign Up
                </button>
                <button type="reset" onClick={resetForm} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Clear
                </button>
              </div>
            </div>
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
