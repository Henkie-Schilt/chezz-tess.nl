"use client";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ShoppingCartDialog from "../molecules/ShoppingCartDialog";
import { useAnimationControls, motion } from "framer-motion";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { shoppingCartAtom } from "@/utils/state";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { WEBSHOP_NAME } from "@/config/constants";
import { shockwave } from "@/utils/animations";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

const pages = [
    { name: "Home", link: "/", icon: <HomeIcon /> },
    { name: "Webshop", link: "/webshop", icon: <StorefrontIcon /> },
    { name: "Over mij", link: "/about", icon: <PersonIcon /> },
    { name: "Contact", link: "/contact", icon: <ChatIcon /> },
];

const Header = () => {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const animation = useAnimationControls();

    useEffect(() => {
        animation.start(shockwave(1.6));
    }, [animation, shoppingCart.length]);

    return (
        <>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: { xs: "none", md: "flex" }, my: "auto", mr: 2 }}>
                            <Link href="/" style={{ position: "relative", height: "3.5em", width: "3.5em" }}>
                                <Image
                                    style={{ objectFit: "contain" }}
                                    alt={`Logo ${WEBSHOP_NAME}`}
                                    src="/static/logo.png"
                                    sizes="3.5em"
                                    priority
                                    fill
                                />
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                onClick={(event) => setAnchorElNav(event.currentTarget)}
                                color="inherit"
                                size="large"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: { xs: "flex", md: "none" }, my: "auto" }}>
                                <Link href="/" style={{ position: "relative", height: "2.5em", width: "2.5em" }}>
                                    <Image
                                        style={{ objectFit: "contain" }}
                                        alt={`Logo ${WEBSHOP_NAME}`}
                                        src="/static/logo.png"
                                        sizes="2.5em"
                                        priority
                                        fill
                                    />
                                </Link>
                            </Box>
                            <Menu
                                sx={{ display: { xs: "block", md: "none" } }}
                                onClose={() => setAnchorElNav(null)}
                                open={Boolean(anchorElNav)}
                                anchorEl={anchorElNav}
                                keepMounted
                            >
                                {pages.map(({ name, link, icon }) => (
                                    <Link key={name} href={link} style={{ textDecoration: "none", color: "black" }}>
                                        <MenuItem onClick={() => setAnchorElNav(null)}>
                                            {icon}
                                            <Typography align="center" sx={{ ml: 2 }}>
                                                {name}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map(({ name, link }) => (
                                <Link key={name} href={link} style={{ textDecoration: "none" }}>
                                    <Button
                                        sx={{ display: "block", color: "white", my: 2 }}
                                        onClick={() => setAnchorElNav(null)}
                                        size="large"
                                    >
                                        {name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <motion.div animate={animation}>
                                <IconButton onClick={() => setShoppingCartOpen(true)} color="inherit" size="large">
                                    <Badge badgeContent={shoppingCart.length} sx={{ color: "white" }}>
                                        <ShoppingCartTwoToneIcon sx={{ color: "white" }} />
                                    </Badge>
                                </IconButton>
                            </motion.div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <ShoppingCartDialog open={shoppingCartOpen} setOpen={setShoppingCartOpen} />
        </>
    );
};

export default Header;
