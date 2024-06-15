"use client";
// ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-100 text-black py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
