"use client";
import { GMAIL_USERNAME, INSTAGRAM_USERNAME, WEBSHOP_NAME } from "@/config/constants";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const Footer = () => (
    <Stack justifyContent="center" alignItems="center" sx={{ py: 4 }} spacing={1}>
        <Stack direction="row">
            <Link href={`mailto:${GMAIL_USERNAME}`}>
                <IconButton size="large" color="primary">
                    <MarkunreadOutlinedIcon />
                </IconButton>
            </Link>
            <Link href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}>
                <IconButton size="large" color="primary">
                    <InstagramIcon />
                </IconButton>
            </Link>
        </Stack>
        <Typography variant="body2">@2023 by {WEBSHOP_NAME}</Typography>
    </Stack>
);

export default Footer;
