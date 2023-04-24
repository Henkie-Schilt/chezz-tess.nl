"use client";
import { ABOUT_TEXT, WEBSHOP_DESCRIPTION } from "@/config/constants";
import InstagramPosts from "@/organisms/InstagramPosts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Crumbs from "@/atoms/Crumbs";
import Box from "@mui/material/Box";
import Image from "next/image";

const About = ({ posts }) => (
    <Grid2 container justifyContent="space-evenly" direction="row-reverse" alignItems="center" spacing={2} rowGap={3}>
        <Crumbs
            crumbs={[
                { label: "Chezz Tess", href: "/" },
                { label: "Over mij", href: "/about" },
            ]}
        />
        <Grid2 xs={12} sm={9} md={5} lg={4}>
            <Box sx={{ pb: "100%", position: "relative" }}>
                <Image
                    style={{ objectFit: "contain", borderRadius: "3em" }}
                    alt={WEBSHOP_DESCRIPTION}
                    src="/static/about.jpg"
                    priority
                    fill
                />
            </Box>
        </Grid2>
        <Grid2 sm={12} md={5} lg={4}>
            <Paper sx={{ backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5), py: 3, px: 4 }}>
                <Typography variant="body1">{ABOUT_TEXT}</Typography>
            </Paper>
        </Grid2>
        <Grid2 xs={12}>
            <InstagramPosts posts={posts} />
        </Grid2>
    </Grid2>
);

export default About;
