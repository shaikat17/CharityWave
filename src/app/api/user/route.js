import connectMongoDB from "@/config/mongodb";
import User from "@/models/userModel";
import { ClientSession } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {name, email, photoUrl, phone_no, location} = await request.json()
  await connectMongoDB();
  console.log(name, email, photoUrl, phone_no, location);
  // await Topic.create({title, description})
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
};

export const GET = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json()
  return NextResponse.json(data);
};
