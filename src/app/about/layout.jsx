import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";

export const metadata = {
    title: `${WEBSHOP_NAME} | Over Mij`,
    description: `${WEBSHOP_DESCRIPTION} | Over Mij`,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
};

const AboutLayout = ({ children }) => children;

export default AboutLayout;
