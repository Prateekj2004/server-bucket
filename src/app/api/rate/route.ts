import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetching real-time data from a free provider
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();
    console.log(response)
    if (data && data.rates && data.rates.INR) {
      return NextResponse.json({ rate: data.rates.INR });
    }
    throw new Error("Rate data not found");
  } catch (error) {
    return NextResponse.json({  error: "API Failed" }, { status: 500 });
  }
}