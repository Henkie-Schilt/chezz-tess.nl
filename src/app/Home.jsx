"use client";
import { HOME_CAROUSEL, HOME_TEXT } from "@/config/constants";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import ProductCard from "@/organisms/ProductCard";
import { HomeElement } from "@/config/elements";
import Carousel from "@/molecules/Carousel";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import filter from "lodash/filter";

const Home = () => (
    <Stack rowGap={3} alignItems="center">
        <Box maxWidth="md">{HomeElement}</Box>
        <Carousel pictures={HOME_CAROUSEL} width="60em" />
        <Typography variant="subtitle1" maxWidth="md" align="center" sx={{ pt: 2 }}>
            {HOME_TEXT}
        </Typography>
        <Typography variant="subtitle1">
            Mijn <b>favorieten</b> van dit moment:
        </Typography>
        <Grid2 container spacing={3} justifyContent="center">
            {filter(products, ["recommended", true]).map(({ code }) => (
                <Grid2 key={code} xs={10} sm={6} md={4} lg={3}>
                    <ProductCard code={code} imageHeight={250} />
                </Grid2>
            ))}
        </Grid2>
    </Stack>
);

export default Home;
