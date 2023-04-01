"use client";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

const InstagramTest = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const media = await fetch("api/instagram");
            setPosts(await media.json());
        };

        getPosts();
    }, [setPosts]);

    return (
        <Grid2 container justifyContent="center" spacing={5} sx={{ my: 3 }}>

            {posts.map(({ id, media_url, permalink }) => (
                <Link key={id} href={permalink} style={{ padding: 10 }}>
                    <Box
                        sx={{
                            border: (theme) => `5px solid, color:#FFFFFF;`,
                            width: { xs: "200px", sm: "250px", md: "350px" },
                            position: "relative",
                            maxWidth: "80vw",
                            pb: "100%",
                        }}
                    >
                        <Image
                            style={{ margin: "auto", borderwidth: "170px"}}
                            alt="Instagram post"
                            src={media_url}
                            fill
                        />
                    </Box>
                </Link>
            ))}
        </Grid2>
    );
};

export default InstagramTest;
