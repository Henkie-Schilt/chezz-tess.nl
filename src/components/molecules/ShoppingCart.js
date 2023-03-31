"use client";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartItem from "@/molecules/ShoppingCartItem";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack, Typography } from "@mui/material";
import { formatPrice } from "@/utils/products";
import { useTotalPrice } from "@/utils/hooks";
import shoppingCartAtom from "@/utils/state";
import DeliveryCosts from "./DeliveryCosts";
import { useAtom } from "jotai";

const ShoppingCart = () => {
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const totalPrice = useTotalPrice();

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
            <ProductionQuantityLimitsIcon
                sx={{ display: shoppingCart.length ? "none" : "flex", my: 8, width: "3em", height: "3em" }}
                color="primary"
            />
            <Stack rowGap={1} sx={{ py: 4, width: "100%" }}>
                {shoppingCart.map(({ code }) => (
                    <ShoppingCartItem key={code} code={code} editable />
                ))}
            </Stack>
            <Grid2 container sx={{ display: shoppingCart.length ? "block" : "none", width: "100%" }}>
                <DeliveryCosts editable />
            </Grid2>
            <Typography
                sx={{
                    backgroundColor: "white",
                    position: "sticky",
                    fontWeight: "bold",
                    width: "100%",
                    zIndex: 999,
                    bottom: -1,
                    pr: 2,
                    py: 1,
                }}
                variant="subtitle2"
                align="right"
            >
                Totaal: {formatPrice(totalPrice)}
            </Typography>
        </Stack>
    );
};

export default ShoppingCart;
