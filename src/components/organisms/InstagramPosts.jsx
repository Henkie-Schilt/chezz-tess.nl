"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import { INSTAGRAM_USERNAME } from "@/config/constants";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Link from "next/link";
import { alpha } from "@mui/material/styles";
import { Paper } from "@mui/material";

const InstagramPosts = ({ posts }) => {
    const primaryColor = useTheme()?.palette?.primary?.main;

    return (
        <Grid2 container justifyContent="center" spacing={2} sx={{ my: 3 }}>
            <Grid2 xs={12}>
                <Paper
                    sx={{
                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 1),
                        maxWidth: "45em",
                        mx: "auto",
                        my: 2,
                    }}
                >
                    <Link
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
                    >
                        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ px: 2, py: 1 }}>
                            <IconButton size="large">
                                <InstagramIcon sx={{ width: "1.5em", height: "1.5em" }} />
                            </IconButton>
                            <Typography variant="h5" color="text.secondary" sx={{ fontFamily: "Courgette" }}>
                                {INSTAGRAM_USERNAME}
                            </Typography>
                        </Stack>
                    </Link>
                </Paper>
            </Grid2>
            {posts.map(({ id, media_url, permalink }) => (
                <Grid2 key={id} xs={11} sm={6} md={4} justifyContent="center" alignItems="center">
                    <Link key={id} href={permalink}>
                        <Image
                            style={{
                                border: `3px solid ${primaryColor}`,
                                borderRadius: "50%",
                                aspectRatio: 1 / 1,
                                objectFit: "cover",
                                height: "100%",
                                width: "100%",
                            }}
                            alt="Instagram post"
                            src={media_url}
                            height={600}
                            width={600}
                            priority
                        />
                    </Link>
                </Grid2>
            ))}
        </Grid2>
    );
};

export default InstagramPosts;
