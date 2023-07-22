import connectMongoDB from "@/config/mongodb";
import Starvation from "@/models/starvationModel";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  console.log("starvation")
  const {seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, supermarket_name, supermarket_location, supermarket_contact_number} = await request.json()
  await connectMongoDB();

  console.log({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, supermarket_name, supermarket_location, supermarket_contact_number});

  await Starvation.create({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, supermarket_name, supermarket_location, supermarket_contact_number})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "Starvation Data Created." }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB()
  const starvation = await Starvation.find({})
  return NextResponse.json(starvation);
};
