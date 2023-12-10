"use client";

import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  // console.log("This is add task component");
  // document.title = "Add Task : Work Manager";
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    // Temprory solution
    userId: "656ae4d4eed6628e045cdcca",
  });

  const handleAddTask = async (event) => {
    // console.log("Form Submit");
    event.preventDefault();
    // console.log(task);
    // Validate Task data
    try {
      const result = await addTask(task);
      // console.log(result);
      setTask({
        title: "",
        content: "",
        status: "none",
      });
      toast.success("Your task is added !!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5 shadow-sm">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-2xl text-center">Add your task here !!</h1>
        <form action="#" method="post" onSubmit={handleAddTask}>
          <div className="grid gap-6 mb-6 mt-6 md:grid-cols-1">
            <div>
              <label
                htmlFor="task_title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="task_title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="title"
                name="task_title"
                value={task.title}
                onChange={(event) => {
                  setTask({
                    ...task,
                    title: event.target.value,
                  });
                }}
                required
              />
            </div>
            <div>
              <label
                htmlFor="task_content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your content
              </label>
              <textarea
                id="task_content"
                rows="4"
                name="task_content"
                value={task.content}
                onChange={(event) => {
                  setTask({
                    ...task,
                    content: event.target.value,
                  });
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your content here..."
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="task_status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your status
              </label>
              <select
                id="task_status"
                name="task_status"
                value={task.status}
                onChange={(event) => {
                  setTask({
                    ...task,
                    status: event.target.value,
                  });
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="none" disabled>
                  Choose a status
                </option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Add todo
            </button>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
