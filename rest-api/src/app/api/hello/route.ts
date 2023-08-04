import { NextResponse } from "next/server";
import { defaultLimiter } from "../config/limiter";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const tokenCount = await defaultLimiter.removeTokens(1);
  console.log("Token Left", tokenCount);

  if (tokenCount < 0) {
    return NextResponse.json(
      {
        message: "No Token Left please wait a minute and try again",
      },
      {
        status: 429,
        statusText: "Too many requests",
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "text/plain",
        },
      }
    );
  }

  return NextResponse.json({
    message: "Hello",
  });
}
