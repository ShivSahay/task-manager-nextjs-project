import mongoose from "mongoose";
import { User } from "@/models/user";

const config = {
  isConnected: 0,
};
export const connectDb = async () => {
  if (config.isConnected) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });
    console.log("Database connected successfully ...");
    console.log(connection.readyState);
    config.isConnected = connection.readyState;
    // console.log(connection);
    // console.log("connected with host",connection.host);
    // Testing and creating new user
    // const user = new User({
    //   name : "test Name",
    //   email : "test Email",
    //   password : "test Password",
    //   about : "this is testing"
    // });
    // const save = await user.save();
    // if(save){
    //   console.log("User is created");
    // }else{
    //   console.log("User Not created");
    // }
  } catch (error) {
    console.log("Failed to connect Database");
    console.log(error);
  }
};
