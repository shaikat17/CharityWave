import connectMongoDB from "@/config/mongodb";
import Medical from "@/models/medicalModel";
import { ClientSession } from "mongodb";
import { NextResponse } from "next/server";


export const GET = async () => {
  await connectMongoDB()
  const medical = await Medical.find({})
  return NextResponse.json(medical);
};
