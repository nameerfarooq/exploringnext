import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectDB();
    return NextResponse.json({ msg: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: error.message }, { status: 400 });
  }
};
