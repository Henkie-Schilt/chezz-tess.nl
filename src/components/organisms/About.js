"use client";
import { ABOUT_TEXT, WEBSHOP_DESCRIPTION } from "@/config/constants";
import InstagramPosts from "@/molecules/InstagramPosts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

const About = ({ posts }) => (
    <Grid2 container justifyContent="space-evenly" direction="row-reverse" alignItems="center" spacing={2} rowGap={3}>
        <Grid2 xs={12} sm={6} md={5} lg={4}>
            <Box sx={{ pb: "100%", position: "relative" }}>
                <Image
                    style={{ objectFit: "contain", borderRadius: "20%" }}
                    alt={WEBSHOP_DESCRIPTION}
                    src="/static/about.jpg"
                    fill
                />
            </Box>
        </Grid2>
        <Grid2 xs={12} sm={6} md={5} lg={4}>
            <Typography variant="body1" sx={{ pb: 2 }}>
                {ABOUT_TEXT}
            </Typography>
        </Grid2>
        <Grid2 xs={12}>
            <InstagramPosts posts={posts} />
        </Grid2>
    </Grid2>
);

export default About;
