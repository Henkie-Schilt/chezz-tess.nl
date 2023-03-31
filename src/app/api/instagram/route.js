import { NextResponse } from "next/server"; 
export const revalidate = 60 * 60 ; 
export async function GET() {
   const mediaResponse = await fetch( 
      `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?access_token=${process.env.INSTAGRAM_ACCES_TOKEN}&fields=media_url,permalink,media_type` 
    ); 
      
    const media = await mediaResponse.json(); 
    return NextResponse.json(
      media.data.filter(({ media_type }) => media_type = "IMAGE").slice(0, 6)); 
  }

