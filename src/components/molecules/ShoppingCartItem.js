"use client";
import { formatPrice, getProduct } from "@/utils/utils";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCartAmount from "./ShoppingCartAmount";
import { useShoppingCartItem } from "@/utils/hooks";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Image from "next/image";

const ShoppingCartItem = ({ code, editable }) => {
    const [amount] = useShoppingCartItem(code);
    const product = getProduct(code);

    return (
        <Grid2 container justifyContent="flex-start" alignItems="center" sx={{ width: "100%" }}>
            <Grid2 xs={2} sm={1}>
                <Box sx={{ pb: "100%", position: "relative" }}>
                    <Image
                        src={`/static/${product.code}.jpg`}
                        style={{ objectFit: "contain" }}
                        alt={product.name}
                        fill
                    />
                </Box>
            </Grid2>
            <Grid2 xs={10} sm={6} sx={{ display: editable ? "flex" : "none" }}>
                <Stack sx={{ width: "100%", ml: 3 }}>
                    <ShoppingCartAmount code={code} />
                </Stack>
            </Grid2>
            <Grid2 xs={7} sm={6} sx={{ display: editable ? "none" : "flex" }}>
                <Typography alignItems="center" variant="body2" sx={{ ml: 2 }}>
                    Aantal: {amount} ({formatPrice(product.price)} per stuk)
                </Typography>
            </Grid2>
            <Grid2 alignItems="center" xs={editable ? 12 : 3} sm={true} sx={{ pr: 2, py: 0 }}>
                <Stack justifyContent="flex-end" alignContent="center" direction="row">
                    <Typography alignItems="center" variant="subtitle2">
                        <b>{formatPrice(product.price * parseInt(amount))}</b>
                    </Typography>
                </Stack>
            </Grid2>
        </Grid2>
    );
};

export default ShoppingCartItem;
