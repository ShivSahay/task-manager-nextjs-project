import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// get all the task
export async function GET(request) {
  try {
    await connectDb();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data !!", 404, false);
  }
}

//create all the task
export async function POST(request) {
  const { title, content, userId, status } = await request.json();
  //fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  //   console.log(authToken);
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  //   console.log(data);
  console.log(title, content, userId);
  try {
    await connectDb();
    const task = new Task({
      title,
      content,
      userId: data._id,
      status,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Failed to create task !!", 500, false);
  }
}
