import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";

export const metadata = {
    title: `${WEBSHOP_NAME} | Checkout`,
    description: `${WEBSHOP_DESCRIPTION} | Checkout`,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
};

const CheckoutLayout = ({ children }) => children;

export default CheckoutLayout;
