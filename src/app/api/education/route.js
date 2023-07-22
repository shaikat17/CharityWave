import connectMongoDB from "@/config/mongodb";
import { NextResponse } from "next/server";
import Education from "@/models/educationModel";

export const POST = async (request) => {
  const {seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, sub_category, institution_name, institution_location, institution_contact_number, bookStore_name, bookStore_location, bookStore_contact_number} = await request.json()
  await connectMongoDB();
  // console.log(name, email, photoUrl, phone_no, location);
  await Education.create({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, reason, sub_category, institution_name, institution_location, institution_contact_number, bookStore_name, bookStore_location, bookStore_contact_number})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "Education Data Created." }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB()
  const education = await Education.find({})
  return NextResponse.json(education);
};
