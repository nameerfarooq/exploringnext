import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  console.log("searchParams search value is : ", searchParams.get("search"));
  return NextResponse.json({ msg: "Hello world learning next" });
}

export async function POST(req) {
  const res = await req.json();
  console.log(res);
  return NextResponse.json({ msg: "Product added" });
}
