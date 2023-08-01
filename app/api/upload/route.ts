// Create a route, you need to choose the type of the route

import { NextResponse } from "next/server";

// { path } is one of the options while making
export async function POST(request: Request) {
  const { path } = await request.json();

  if (!path) {
    return NextResponse.json({ message: 'Image path is required' }, { status: 400 })
  }

  try {
    const options = {}
  }
  catch {

  }
}