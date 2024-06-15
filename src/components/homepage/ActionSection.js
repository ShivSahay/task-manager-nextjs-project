"use client";
// ActionSection.js

import React from "react";
import backgroundImage from "../../assets/signup.svg";
import Image from "next/image";

const ActionSection = () => {
  return (
    <div className="relative bg-blue-500 text-white py-20">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-opacity-70 bg-blue-500"></div>
      <div className="container mx-auto relative z-20 text-center">
        <h2 className="text-3xl font-semibold text-center mb-8">Take Control of your task</h2>
        <p className="text-xl text-center mb-8">
          Start managing your tasks efficiently with our task manager app.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md shadow-md hover:shadow-lg"
        onClick={()=>{
            console.log("Get Started button clicked!");
        }}>
          Get Started
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-30">
        <Image 
        src={backgroundImage}
        alt="Action Background"
        className=" object-cover w-full h-full"
        />        
      </div>
    </div>
  );
};

export default ActionSection;
