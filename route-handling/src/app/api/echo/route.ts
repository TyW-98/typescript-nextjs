import { NextResponse } from "next/server";

// Predefined parameters
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const username = searchParams.get("username");
//   const age = searchParams.get("age");

//   return NextResponse.json({ username, age });
// }

// Dynamic parameters
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
}
