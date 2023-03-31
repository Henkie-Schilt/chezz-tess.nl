"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductCard from "@/molecules/ProductCard";
import { HomeElement } from "@/config/elements";
import products from "@/config/products";

const Home = () => (
    <Grid2 container spacing={2} justifyContent="center">
        <Grid2 xs={12}>
            <InstagramPosts />
        </Grid2>
        {products.map(({ code }) => (
            <Grid2 key={code} xs={12} sm={6} md={4} lg={3}>
                <ProductCard code={code} imageHeight={380} />
            </Grid2>
        ))}
    </Grid2>
);

export default Home;


// <Grid2 xs={12} sx={{ mb: 2 }}>
// {HomeElement}
// </Grid2>