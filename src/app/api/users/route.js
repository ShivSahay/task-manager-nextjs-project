import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(request) {
  let users = [];
  try {
    await connectDb();
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message:"Failed to get users",
        success : false
    });
  }
  return NextResponse.json(users);
}

// Post Request Function
//Post Data
//Create User
export async function POST(request) {
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname);
  // console.log(request.nextUrl.searchParams);
  // const jsonData = await request.json();
  // const textData = await request.text();
  // console.log(jsonData);
  // console.log(textData);
  // return NextResponse.json({
  //     message:"Posting User Data"
  // });
  // Fetch user details from user
  const { name, email, password, about, profileURL } = await request.json();
  //create user object with user model
  try {
    await connectDb();
    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
      });
      user.password = bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT));
    // Save the object to database
    console.log("user Password =====>",user.password);
      const createdUser = await user.save();
      console.log("createdUser ======>>",createdUser);
      return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
        message : "Failed to create user !!",
        status : false
    },{status:500});
  }
}

export function DELETE(request) {
  console.log("Delete Api Called");
  return NextResponse.json(
    {
      message: "Deleted !!",
      status: true,
    },
    {
      status: "201",
      statusText: "Deleted Successfully",
    }
  );
}

export function PUT() {}
