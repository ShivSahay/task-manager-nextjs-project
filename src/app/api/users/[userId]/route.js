import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

// export const GET = ()=>{

// }
//get user
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    await connectDb();
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    NextResponse.json({
      message: "Error for getting user !!",
      success: false,
    });
  }
}

// Delete user
export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await connectDb();
    const user = await User.findById(userId);
    if (user) {
      await User.deleteOne({
        _id: userId,
      });
      return NextResponse.json({
        message: "User Deleted",
        success: true,
      });
    } else {
      return NextResponse.json(
        {
          message: "User Not Found !!",
          success: false,
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error in deleting user !!",
      success: false,
    });
  }
}

// update User
export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, profileURL } = await request.json();
  try {
    await connectDb();
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileURL = profileURL;
    // update more information
    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update user !!",
      success: false,
    });
  }
}
