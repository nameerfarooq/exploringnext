import { NextResponse } from "next/server";

export async function GET(req) {
  const  searchParams  = req.nextUrl.searchParams;
  console.log("searchParams search value is : ", searchParams.get("search"));
  return NextResponse.json({ msg: "Hello world learning next" });
}
