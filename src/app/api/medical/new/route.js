
import connectMongoDB from "@/config/mongodb";
import Medical from "@/models/medicalModel";
import { ClientSession } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, emergency, verification, reason, sub_category, hospital_name, hospital_location, hospital_contact_number, pharmacy_name, pharmacy_location, pharmacy_contact_number} = await request.json()
  await connectMongoDB();
  // console.log(name, email, photoUrl, phone_no, location);
  await Medical.create({seeker_name, seeker_email, seeker_image, location, phone_no, deadline, amount, emergency, verification, reason, sub_category, hospital_name, hospital_location, hospital_contact_number, pharmacy_name, pharmacy_location, pharmacy_contact_number})
  // await Topic.create({title, description})
  return NextResponse.json({ message: "Medical Data Created." }, { status: 201 });
};
