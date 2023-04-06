"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import sample from "lodash/sample";
import Image from "next/image";
import Link from "next/link";

const ProductNotFound = () => {
    const product = sample(products);

    return (
        <Grid2
            sx={{ backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5), borderRadius: "30px", p: 3 }}
            justifyContent="space-evenly"
            direction="row-reverse"
            alignItems="center"
            rowGap={3}
            container
        >
            <Grid2 xs={12} md={6} sx={{ maxWidth: { xs: "40vh", md: "50vw" } }}>
                <Box sx={{ pb: "100%", position: "relative" }}>
                    <Image
                        src={`/static/${product.code}.jpg`}
                        style={{ objectFit: "contain" }}
                        alt={product.name}
                        fill
                    />
                </Box>
            </Grid2>
            <Grid2 xs={12} md={6} sx={{ px: { xs: 1, md: 6 } }}>
                <Stack rowGap={2}>
                    <Typography variant="h2">
                        <b>Oeps....</b>
                    </Typography>
                    <Typography variant="h5">
                        <b>Dit product bestaat niet</b>
                    </Typography>
                    <Typography variant="subtitle1" sx={{ pb: 4 }}>
                        Ga alsjeblieft terug naar de webshop
                    </Typography>
                    <Link href="/webshop" style={{ textDecoration: "none" }}>
                        <Button color="primary" variant="contained" size="large" fullWidth>
                            Webshop
                        </Button>
                    </Link>
                </Stack>
            </Grid2>
        </Grid2>
    );
};

export default ProductNotFound;
