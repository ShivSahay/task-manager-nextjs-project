import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDb();
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  if (authToken) {
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data);
    const user = await User.findById(data._id).select("-password");
    console.log("test");
    return NextResponse.json(user);
  }else{
    return NextResponse.json({message:"user not found",success : false});;
  }
}
