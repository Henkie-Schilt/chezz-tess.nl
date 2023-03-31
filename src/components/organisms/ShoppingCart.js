"use client";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartItem from "@/molecules/ShoppingCartItem";
import DeliveryCosts from "../molecules/DeliveryCosts";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { shoppingCartAtom } from "@/utils/state";
import Stack from "@mui/material/Stack";
import { useAtom } from "jotai";

const ShoppingCart = () => {
    const [shoppingCart] = useAtom(shoppingCartAtom);

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
            <Grid2 container sx={{ display: shoppingCart.length ? "block" : "none", width: "100%", px: 1 }}>
                <DeliveryCosts editable />
            </Grid2>
        </Stack>
    );
};

export default ShoppingCart;
