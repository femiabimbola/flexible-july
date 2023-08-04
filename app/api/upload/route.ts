// Create a route, you need to choose the type of the route

import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   // cloud_name: process.env.CLOUDINARY_NAME,
//   // api_key: process.env.CLOUDINARY_KEY,
//   // api_secret: process.env.CLOUDINARY_NAME
// })


cloudinary.config({
  cloud_name: 'dvdxoiol4',
  api_key: '158253478548619',
  api_secret: 'eGXwHH2NBGZPhcYvxIbhTjefp2Y'
});

export async function GET() {
  return NextResponse.json({ message: 'hi from upload' }, { status: 200 })

}

// { path } is one of the options while making
export async function POST(request: Request) {
  const { path } = await request.json();
  if (!path) {
    return NextResponse.json({ message: 'Image path is required' }, { status: 400 })
  }

  //  Options is for cloudinary
  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      transformation: [{ width: 1000, height: 752, crop: 'scale' }]
    }
    const result = await cloudinary.uploader.upload(path, options)
    console.log(result)
    return NextResponse.json(result, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({ message: `${error}: can not upload` }, { status: 500 })
  }
}