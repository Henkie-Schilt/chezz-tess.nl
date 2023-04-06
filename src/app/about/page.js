import { AMOUNT_INSTAGRAM_POSTS } from "@/config/constants";
import About from "@/organisms/About";
import "server-only";

export const revalidate = 3600;

const AboutPage = async () => {
    const media = await fetch(
        `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}&fields=media_url,permalink,media_type`
    );

    const postsData = await media.json();
    const posts = postsData.data.filter(({ media_type }) => media_type === "IMAGE").slice(0, AMOUNT_INSTAGRAM_POSTS);

    return <About posts={posts} />;
};

export default AboutPage;
