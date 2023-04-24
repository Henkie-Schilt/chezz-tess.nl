"use client";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import ShoppingCartDialog from "@/organisms/ShoppingCartDialog";
import { useAnimationControls, motion } from "framer-motion";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { WEBSHOP_NAME } from "@/config/constants";
import { shoppingCartAtom } from "@/utils/state";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { shockwave } from "@/utils/animations";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

const pages = [
    { name: "Home", link: "/", icon: <HomeIcon color="secondary" fontSize="small" /> },
    { name: "Webshop", link: "/webshop", icon: <StorefrontIcon color="secondary" fontSize="small" /> },
    { name: "Over mij", link: "/about", icon: <PersonIcon color="secondary" fontSize="small" /> },
    { name: "Contact", link: "/contact", icon: <ChatIcon color="secondary" fontSize="small" /> },
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
                        <Avatar
                            sx={{
                                bgcolor: (theme) => theme.palette.primary.main,
                                display: { xs: "none", md: "flex" },
                                my: "auto",
                            }}
                            variant="square"
                        >
                            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                                <Image
                                    style={{ objectFit: "contain" }}
                                    alt={`Logo ${WEBSHOP_NAME}`}
                                    src="/static/logo.png"
                                    priority
                                    fill
                                />
                            </Link>
                        </Avatar>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                onClick={(event) => setAnchorElNav(event.currentTarget)}
                                color="inherit"
                                size="large"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Avatar
                                sx={{ my: "auto", bgcolor: (theme) => theme.palette.primary.main }}
                                variant="square"
                            >
                                <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                                    <Image
                                        style={{ objectFit: "contain" }}
                                        alt={`Logo ${WEBSHOP_NAME}`}
                                        src="/static/logo.png"
                                        priority
                                        fill
                                    />
                                </Link>
                            </Avatar>
                            <Menu
                                sx={{ display: { xs: "block", md: "none" } }}
                                onClose={() => setAnchorElNav(null)}
                                open={Boolean(anchorElNav)}
                                anchorEl={anchorElNav}
                                keepMounted
                            >
                                {pages.map(({ name, link, icon }) => (
                                    <Link
                                        style={{ textDecoration: "inherit", color: "inherit" }}
                                        href={link}
                                        key={name}
                                    >
                                        <MenuItem onClick={() => setAnchorElNav(null)}>
                                            <ListItemIcon>{icon}</ListItemIcon>
                                            <ListItemText>{name}</ListItemText>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map(({ name, link }) => (
                                <Link key={name} href={link} style={{ color: "inherit", textDecoration: "inherit" }}>
                                    <Button
                                        onClick={() => setAnchorElNav(null)}
                                        sx={{ color: "inherit", my: 2 }}
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
