import connectMongoDB from "@/config/mongodb";
import Oldage from "@/models/oldageModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, oldAge_name, oldAge_location, oldAge_contact_number} = await request.json()
  await connectMongoDB();
  // console.log(name, email, photoUrl, phone_no, location);
  await Oldage.create({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, oldAge_name, oldAge_location, oldAge_contact_number})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "OldAge Data Created." }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB()
  const oldage = await Oldage.find({})
  return NextResponse.json(oldage);
};
