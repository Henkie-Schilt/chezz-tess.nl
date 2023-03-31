import { AMOUNT_INSTAGRAM_POSTS } from "@/config/constants";
import { NextResponse } from "next/server";

export const revalidate = 60 * 60;

export async function GET() {
    try {
        const media = await fetch(
            `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&fields=media_url,permalink,media_type`
        );

        const posts = await media.json();
        return NextResponse.json(
            posts.data.filter(({ media_type }) => media_type === "IMAGE").slice(0, AMOUNT_INSTAGRAM_POSTS)
        );
    } catch (e) {
        console.error(e);
        return NextResponse.json([]);
    }
}
