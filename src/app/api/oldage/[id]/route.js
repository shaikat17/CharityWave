import connectMongoDB from "@/config/mongodb";
import Oldage from "@/models/oldageModel";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { id } = params;

    // console.log(id)
  
    try {
      await connectMongoDB();
  
      const singleData = await Oldage.findById(id);
    //   console.log(singleData)
  
      return new NextResponse(JSON.stringify(singleData), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
    // return NextResponse.json({msg: "Route Successfull"})
  };