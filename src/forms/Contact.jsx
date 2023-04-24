"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import FormTextField from "@/atoms/FormTextField";
import { contactFormAtom } from "@/utils/state";
import { useWatch } from "react-hook-form";
import { useEffect } from "react";
import { useAtom } from "jotai";

const ContactForm = ({ control, resetField }) => {
    const [_, setContactFormData] = useAtom(contactFormAtom);
    const contactFormData = useWatch({ control });

    useEffect(() => {
        setContactFormData(contactFormData);
    }, [setContactFormData, contactFormData]);

    return (
        <Grid2 container spacing={1} rowGap={1}>
            <Grid2 xs={12} sm={6} md={4}>
                <FormTextField resetField={resetField} required control={control} label="Voornaam" name="firstName" />
            </Grid2>
            <Grid2 xs={12} sm={6} md={4}>
                <FormTextField resetField={resetField} required control={control} label="Achternaam" name="lastName" />
            </Grid2>
            <Grid2 xs={12} md={4}>
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
                    control={control}
                    maxLength={1000}
                    label="Bericht"
                    name="message"
                    multiline
                    required
                />
            </Grid2>
        </Grid2>
    );
};

export default ContactForm;
