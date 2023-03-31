
"use client";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
const pages = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "Webshop", link: "/webshop", icon: <StorefrontIcon /> },
    { name: "Over mij", link: "/about", icon: <PersonIcon /> },
    { name: "Contact", link: "/contact", icon: <ChatIcon /> },
];
export default pages;
