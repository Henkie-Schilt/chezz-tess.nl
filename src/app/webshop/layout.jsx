import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";
import { getProductTokens } from "@/utils/utils";

export const metadata = {
    title: `${WEBSHOP_NAME} | Webshop`,
    description: `${WEBSHOP_DESCRIPTION} | Webshop`,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
    keywords: getProductTokens(),
};

const WebshopLayout = ({ children }) => children;

export default WebshopLayout;
