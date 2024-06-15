"use client";
import React, { useContext, useState } from "react";
import SignupSvg from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { login, signUp } from "@/services/userService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [disable, setDisable] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisable(true);
    if (loginData.email.trim() === "" || loginData.email == null) {
      toast.info("Email is required !!", {
        position: "top-center",
      });
      setDisable(false);
      return;
    } else if (loginData.password.trim() === "" || loginData.password == null) {
      toast.info("Password is required !!", {
        position: "top-center",
      });
      setDisable(false);
      return;
    }

    // Login Form Submit Code
    try {
      const result = await login(loginData);
      toast.success("Logged In user !!", {
        position: "top-center",
      });
      setLoginData({
        email: "",
        password: "",
      });
      context.setUser(result.user);
      router.push("/profile/user");
    } catch (error) {
      setDisable(false);
      console.log(error);
      toast.error("Login Errpr !!" + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setDisable(false);
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-12 justify-center h-screen">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <div className="my-4 flex justify-center">
            <Image
              src={SignupSvg}
              style={{
                width: "60%",
              }}
              alt="SignUp banner"
            />
          </div>
          <h1 className="text-3xl text-center">Login Here</h1>
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 mt-6 md:grid-cols-1">
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
                    setLoginData({
                      ...loginData,
                      email: event.target.value,
                    });
                  }}
                  value={loginData.email}
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
                    setLoginData({
                      ...loginData,
                      password: event.target.value,
                    });
                  }}
                  value={loginData.password}
                  // required
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {!disable ? "Login" : <CircularProgress color="secondary" className="h-4" />}
                </button>
                <button
                  type="reset"
                  onClick={resetForm}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Clear
                </button>
              </div>
            </div>
            {/* {JSON.stringify(loginData)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
