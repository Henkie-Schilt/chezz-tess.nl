import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";
import { getProductTokens } from "@/utils/utils";
import Home from "./Home";

export const metadata = {
    title: WEBSHOP_NAME,
    description: WEBSHOP_DESCRIPTION,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
    keywords: getProductTokens(),
};

const HomePage = () => <Home />;

export default HomePage;
