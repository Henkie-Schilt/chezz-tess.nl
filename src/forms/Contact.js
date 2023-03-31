"use client";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { maxLength, required } from "@/utils/rules";
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
        <Grid2 container>
            <Grid2 xs={12} sm={6} md={4}>
                <FormTextField
                    resetField={resetField}
                    rules={{ required }}
                    control={control}
                    label="Voornaam"
                    name="firstName"
                />
            </Grid2>
            <Grid2 xs={12} sm={6} md={4}>
                <FormTextField
                    resetField={resetField}
                    rules={{ required }}
                    label="Achternaam"
                    control={control}
                    name="lastName"
                />
            </Grid2>
            <Grid2 xs={12} md={4}>
                <FormTextField
                    resetField={resetField}
                    rules={{ required }}
                    control={control}
                    label="E-mail"
                    name="email"
                    type="email"
                />
            </Grid2>
            <Grid2 xs={12}>
                <FormTextField
                    rules={{ required, maxLength: maxLength(1000) }}
                    resetField={resetField}
                    control={control}
                    label="Bericht"
                    name="message"
                    multiline
                />
            </Grid2>
        </Grid2>
    );
};

export default ContactForm;
