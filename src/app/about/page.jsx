import { AMOUNT_INSTAGRAM_POSTS } from "@/config/constants";
import About from "./About";
import "server-only";

export const revalidate = 3600;

const AboutPage = async () => {
    const media = await fetch(
        `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&fields=media_url,permalink,media_type,children`
    );

    const postsData = await media.json();
    const posts = postsData.data.filter(({ media_type }) => media_type === "IMAGE" || media_type === "CAROUSEL_ALBUM").slice(0, 3);

    return <About posts={posts} />;
};

export default AboutPage;
