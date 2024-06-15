// "use client";
import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);
  const deleteTask = async (taskId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        deleteTaskParent(taskId);
      }
    });
  };
  return (
    <div
      className={`shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-800" : "bg-gray-800"
      } `}
    >
      <div className="p-5">
        <div className=" flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="text-2xl shadow-lg hover:bg-gray-900 text-red-400 cursor-pointer bg-gray-950 rounded-full h-9 w-9 flex justify-center items-center"
          >
            <MdDelete />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className=" flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
