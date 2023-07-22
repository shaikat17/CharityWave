import connectMongoDB from "@/config/mongodb";
import Medical from "@/models/medicalModel";
import { NextResponse } from "next/server";


export const GET = async () => {
  await connectMongoDB()
  const medical = await Medical.find({})
  return NextResponse.json(medical);
};


export const POST = async (request) => {
  const {seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, emergency, verification, reason, sub_category, hospital_name, hospital_location, hospital_contact_number, pharmacy_name, pharmacy_location, pharmacy_contact_number} = await request.json()

  await connectMongoDB();
  console.log({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, emergency, verification, reason, sub_category, hospital_name, hospital_location, hospital_contact_number, pharmacy_name, pharmacy_location, pharmacy_contact_number});
  await Medical.create({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, emergency, verification, reason, sub_category, hospital_name, hospital_location, hospital_contact_number, pharmacy_name, pharmacy_location, pharmacy_contact_number})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "Medical Data Created." }, { status: 201 });
};