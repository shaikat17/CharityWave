import connectMongoDB from "@/config/mongodb";
import { ClientSession } from "mongodb";
import { NextResponse } from "next/server";
import Medical from "../../../models/medicalModel";


export const GET = async () => {
  await connectMongoDB()
  const medical = await Medical.find({})
  return NextResponse.json(medical);
};
