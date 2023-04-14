"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import { INSTAGRAM_USERNAME } from "@/config/constants";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

const InstagramPosts = ({ posts }) => (
    <Grid2 container justifyContent="center" spacing={5} sx={{ my: 3 }}>
        <Link
            href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
            style={{ width: "100%", textDecoration: "none" }}
        >
            <Stack direction="row" alignItems="center">
                <IconButton size="large">
                    <InstagramIcon sx={{ width: "1.5em", height: "1.5em" }} />
                </IconButton>
                <Typography variant="h5" color="text.secondary" sx={{ fontFamily: "Raleway" }}>
                    {INSTAGRAM_USERNAME}
                </Typography>
            </Stack>
        </Link>
        {posts.map(({ id, media_url, permalink }) => (
            <Link key={id} href={permalink} style={{ padding: 10 }}>
                <Box
                    sx={{
                        border: (theme) => `3px solid ${theme.palette.primary.main}`,
                        width: { xs: "200px", sm: "250px", md: "350px" },
                        position: "relative",
                        borderRadius: "40%",
                        maxWidth: "80vw",
                        pb: "100%",
                    }}
                >
                    <Image
                        style={{ margin: "auto", borderwidth: "170px", borderRadius: "40%" }}
                        alt="Instagram post"
                        src={media_url}
                        fill
                    />
                </Box>
            </Link>
        ))}
    </Grid2>
);

export default InstagramPosts;
