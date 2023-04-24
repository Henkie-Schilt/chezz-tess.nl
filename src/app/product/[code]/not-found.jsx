"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Carousel from "@/molecules/Carousel";
import Button from "@mui/material/Button";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import map from "lodash/map";

const ProductNotFound = () => (
    <Paper sx={{ backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.5), py: 3, px: 6 }}>
        <Grid2 justifyContent="space-evenly" direction="row-reverse" alignItems="center" rowGap={3} container>
            <Grid2 xs={12} md={6}>
                <Carousel pictures={map(products, "code")} width="30em" />
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
                    <Link href="/webshop" style={{ color: "inherit" }}>
                        <Button color="primary" variant="contained" size="large" fullWidth>
                            Webshop
                        </Button>
                    </Link>
                </Stack>
            </Grid2>
        </Grid2>
    </Paper>
);

export default ProductNotFound;
