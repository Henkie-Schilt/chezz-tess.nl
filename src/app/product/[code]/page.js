"use client";
import { formatPrice, getProduct, getRelatedProducts } from "@/utils/utils";
import ShoppingCartAmount from "@/molecules/ShoppingCartAmount";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductCard from "@/molecules/ProductCard";
import Typography from "@mui/material/Typography";
import { PRODUCT_DETAILS, PRODUCT_TEXT } from "@/config/constants";
import { notFound } from "next/navigation";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Detail from "@/atoms/Detail";
import Box from "@mui/material/Box";
import Image from "next/image";

export const dynamicParams = false;
export const generateStaticParams = () => products.map(({ code }) => ({ code }));

const ProductPage = ({ params: { code } }) => {
    const relatedProducts = getRelatedProducts(code);
    const product = getProduct(code);

    if (!product) {
        notFound();
    }

    return (
        <Stack>
            <Paper sx={{ p: 2 }}>
                <Grid2 justifyContent="space-evenly" alignItems="center" spacing={2} rowGap={3} container>
                    <Grid2 xs={12} sm={6} md={5} lg={4} sx={{ maxWidth: { xs: "40vh", sm: "50vw" } }}>
                        <Box sx={{ pb: "100%", position: "relative" }}>
                            <Image
                                style={{ objectFit: "scale-down" }}
                                src={`/static/${product.code}.jpg`}
                                alt={product.description}
                                fill
                            />
                        </Box>
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={5} lg={4} sx={{ mt: 2 }}>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                            <Typography variant="subtitle1">
                                <b>{product.name}</b>
                            </Typography>
                            <Chip
                                sx={{ display: product.new || product.popular ? "flex" : "none" }}
                                label={product.popular ? "Populairst" : "Nieuw"}
                                color="primary"
                            />
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {product.description}
                        </Typography>
                        {PRODUCT_DETAILS.map(({ label, field, getValue }) => (
                            <Detail key={label} label={label} value={field ? product[field] : getValue(product)} />
                        ))}
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            {PRODUCT_TEXT}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            <b>{formatPrice(product.price)}</b>
                        </Typography>
                        <Grid2
                            sx={{
                                backgroundColor: (theme) => theme.palette.background.paper,
                                position: "sticky",
                                bottom: 0,
                                py: 2,
                                px: 0,
                            }}
                        >
                            <ShoppingCartAmount code={code} buttons />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Paper>
            <Typography variant="h5" sx={{ display: relatedProducts.length ? "flex" : "none", py: 2 }}>
                Gerelateerde producten
            </Typography>
            <Grid2 container direction="row" spacing={2}>
                {relatedProducts.map(({ code }) => (
                    <Grid2 key={code} xs={7} sm={4} md={3} lg={2}>
                        <ProductCard code={code} imageHeight={150} />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    );
};

export default ProductPage;
