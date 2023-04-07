"use client";
import CardActionArea from "@mui/material/CardActionArea";
import ShoppingCartAmount from "./ShoppingCartAmount";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { formatPrice } from "@/utils/utils";
import { useProduct } from "@/utils/hooks";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ code, imageHeight }) => {
    const product = useProduct(code);

    return (
        <Card>
            <Link href={`/product/${code}`} style={{ textDecoration: "none", color: "black" }}>
                <CardActionArea>
                    <CardMedia>
                        <Box sx={{ position: "relative", width: "100%", height: imageHeight }}>
                            <Image
                                src={`/static/${product.code}.jpg`}
                                style={{ objectFit: "contain" }}
                                alt={product.name}
                                fill
                            />
                        </Box>
                    </CardMedia>
                    <Chip
                        sx={{
                            display: product.new || product.popular ? "flex" : "none",
                            position: "absolute",
                            right: 10,
                            top: 10,
                        }}
                        label={product.popular ? "Populairst" : "Nieuw"}
                        color="primary"
                    />
                    <CardContent>
                        <Typography variant="subtitle1" component="div" noWrap gutterBottom>
                            <b>{product.name}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ height: "4.5em", overflow: "hidden" }}>
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            <b>{formatPrice(product.price)}</b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <ShoppingCartAmount code={code} />
            </CardActions>
        </Card>
    );
};

export default ProductCard;
