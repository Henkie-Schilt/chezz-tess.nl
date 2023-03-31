"use client";
import { shoppingCartAtom, checkoutFormAtom } from "@/utils/state";
import ShoppingCartItem from "@/molecules/ShoppingCartItem";
import DeliveryCosts from "@/molecules/DeliveryCosts";
import { CheckoutElement } from "@/config/elements";
import Stack from "@mui/material/Stack";
import Detail from "@/atoms/Detail";
import { useAtom } from "jotai";

const Overview = () => {
    const [checkoutFormData] = useAtom(checkoutFormAtom);
    const [shoppingCart] = useAtom(shoppingCartAtom);

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ width: "100%", py: 4 }}>
            {CheckoutElement}
            <Stack justifyContent="flex-start" sx={{ py: 3, width: "100%" }}>
                <Detail label="Name" value={`${checkoutFormData.firstName} ${checkoutFormData.lastName}`} />
                <Detail
                    value={`${checkoutFormData.street}, ${checkoutFormData.zip} ${checkoutFormData.city}`}
                    label="Adres"
                />
                <Detail label="Telefoonnummer" value={checkoutFormData.phone} />
                <Detail label="E-mail" value={checkoutFormData.email} />
                <Detail label="Opmerkingen" value={checkoutFormData.remarks} />
            </Stack>
            <Stack sx={{ py: 4, width: "100%" }}>
                {shoppingCart.map(({ code }) => (
                    <ShoppingCartItem key={code} code={code} />
                ))}
            </Stack>
            <Stack sx={{ px: 1, width: "100%" }}>
                <DeliveryCosts />
            </Stack>
        </Stack>
    );
};

export default Overview;
