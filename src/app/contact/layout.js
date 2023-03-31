import { WEBSHOP_NAME, WEBSHOP_DESCRIPTION, WEBSHOP_PRIMARY_COLOR } from "@/config/constants";

export const metadata = {
    title: `${WEBSHOP_NAME} | Contact`,
    description: `${WEBSHOP_DESCRIPTION} | Contact`,
    themeColor: WEBSHOP_PRIMARY_COLOR,
    icons: {
        icon: "/static/logo.png",
    },
};

const ContactLayout = ({ children }) => children;

export default ContactLayout;
