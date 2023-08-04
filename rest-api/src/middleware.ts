import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.mywebsite.com", "https://yoursite.com"]
    : ["http://localhost:3000/", "http://127.0.0.1:3000"];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log(origin);

  // !origin will block 3rd party API fetcher
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Context-Type": "text/plain",
      },
    });
  }

  console.log("Test Middleware");

  console.log(request.method);
  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
