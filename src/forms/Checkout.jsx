"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FormTextField from "@/atoms/FormTextField";
import { checkoutFormAtom } from "@/utils/state";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";
import { useAtom } from "jotai";

const CheckoutForm = ({ control, resetField }) => {
    const [_, setCheckoutFormData] = useAtom(checkoutFormAtom);
    const checkoutFormData = useWatch({ control });

    useEffect(() => {
        setCheckoutFormData(checkoutFormData);
    }, [setCheckoutFormData, checkoutFormData]);

    return (
        <Grid2 spacing={2} container>
            <Grid2 xs={12} sm={6}>
                <FormTextField resetField={resetField} required control={control} label="Voornaam" name="firstName" />
            </Grid2>
            <Grid2 xs={12} sm={6}>
                <FormTextField resetField={resetField} required control={control} label="Achternaam" name="lastName" />
            </Grid2>
            <Grid2 xs={12} md={4}>
                <FormTextField resetField={resetField} required control={control} label="Adres" name="street" />
            </Grid2>
            <Grid2 xs={12} md={4}>
                <FormTextField resetField={resetField} required control={control} label="Postcode" name="zip" />
            </Grid2>
            <Grid2 xs={12} md={4}>
                <FormTextField resetField={resetField} required control={control} label="Plaats" name="city" />
            </Grid2>
            <Grid2 xs={12}>
                <FormTextField
                    resetField={resetField}
                    control={control}
                    label="E-mail"
                    name="email"
                    type="email"
                    required
                />
            </Grid2>
            <Grid2 xs={12}>
                <FormTextField
                    resetField={resetField}
                    label="Telefoonnummer"
                    control={control}
                    name="phone"
                    type="tel"
                />
            </Grid2>
            <Grid2 xs={12}>
                <FormTextField resetField={resetField} control={control} label="Opmerkingen" name="remarks" multiline />
            </Grid2>
        </Grid2>
    );
};

export default CheckoutForm;
