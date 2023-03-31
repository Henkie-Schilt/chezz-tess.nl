"use client";
import CardActionArea from "@mui/material/CardActionArea";
import { formatPrice, getProduct } from "@/utils/utils";
import ShoppingCartAmount from "./ShoppingCartAmount";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Link from "next/link";

const ProductCard = ({ code, imageHeight }) => {
    const product = getProduct(code);

    return (
        <Card>
            <Link href={`/product/${code}`} style={{ textDecoration: "none", color: "black" }}>
                <CardActionArea>
                    <CardMedia
                        sx={{ objectFit: "contain", height: imageHeight }}
                        image={`/static/${code}.jpg`}
                        alt={product.name}
                        component="img"
                    />
                    <CardContent>
                        <Typography variant="subtitle1" component="div" noWrap gutterBottom>
                            <b>{product.name}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ height: "4.5em", overflow: "hidden" }}>
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {formatPrice(product.price)}
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
