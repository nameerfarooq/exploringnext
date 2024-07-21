import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  console.log("params : ", params);
  const id = params.id;
  return NextResponse.json({ msg: `your id is ${id}` }, { status: 200 });
};
