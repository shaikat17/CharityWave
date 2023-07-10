import connectMongoDB from "@/config/mongodb";
import User from "@/models/userModel";
import { ClientSession } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {name, email, photoUrl, phone_no, location} = await request.json()
  await connectMongoDB();
  // console.log(name, email, photoUrl, phone_no, location);
  await User.create({name, email, photoUrl, phone_no, location})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "User Created." }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB()
  const users = await User.find({})
  return NextResponse.json(users);
};
