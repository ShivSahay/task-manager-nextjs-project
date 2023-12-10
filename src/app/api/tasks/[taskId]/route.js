import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//api/tasks/{taskId}
export async function GET(request,{params}){
    const { taskId } = params;
    try {
        await connectDb();
        const task = await Task.findById(taskId);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting task !!",404,false);
    }
}

export async function PUT(request,{params}){
    const { taskId } = params;
    try {
        await connectDb();
        const task = await Task.findById(taskId);
        const {title, content,status} = await request.json();
        console.log(title);
        if(task){
            task.title = title;
            task.content = content;
            task.status = status;
            const updatedTask = await task.save();
            return NextResponse.json(updatedTask);
        }else{
            console.log("Task Not found");
            return getResponseMessage("Task Not found",404,false);
        }
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in updated task",500,false);
    }
}

export async function DELETE(request,{params}){
    try {
        await connectDb();
        const { taskId } = params;
        await Task.deleteOne({
            _id : taskId,
        });
        return getResponseMessage("Task Deleted successfully !!",200,true);
    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in deleted task !!",500,false);
    }
}