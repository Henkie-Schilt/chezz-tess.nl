import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";
import { getProduct } from "@/utils/utils";

export const generateMetadata = ({ params: { code } }) => ({
    title: `${WEBSHOP_NAME} | ${code}`,
    description: `${WEBSHOP_DESCRIPTION} | ${code}`,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
    keywords: getProduct(code)?.tokens,
});

const ProductLayout = ({ children }) => children;

export default ProductLayout;
