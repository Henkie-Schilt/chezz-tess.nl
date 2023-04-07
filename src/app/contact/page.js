"use client";
import { CONTACT_ERROR_TOAST, CONTACT_SUCCESS_TOAST, CONTACT_TEXT } from "@/config/constants";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { checkoutFormAtom, contactFormAtom } from "@/utils/state";
import CircularProgress from "@mui/material/CircularProgress";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ContactElement } from "@/config/elements";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { mergeObjects } from "@/utils/utils";
import ContactForm from "@/forms/Contact";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAtom } from "jotai";
import pick from "lodash/pick";

const ContactPage = () => {
    const [contactFormData, setContactFormData] = useAtom(contactFormAtom);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [checkoutFormData] = useAtom(checkoutFormAtom);

    const { handleSubmit, reset, control, resetField } = useForm({
        defaultValues: mergeObjects(pick(checkoutFormData, ["firstName", "lastName", "email"]), contactFormData),
    });

    return (
        <Grid2 container maxWidth="md" spacing={2} sx={{ mx: "auto" }}>
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isSubmitting}>
                <CircularProgress color="primary" />
            </Backdrop>
            <Grid2 xs={12} sx={{ mb: 2 }}>
                {ContactElement}
                <Typography variant="body2" sx={{ my: 2 }}>
                    {CONTACT_TEXT}
                </Typography>
            </Grid2>
            <ContactForm control={control} resetField={resetField} />
            <Grid2 xs={12}>
                <Button
                    onClick={handleSubmit(async (data) => {
                        setIsSubmitting(true);

                        const response = await fetch("/api/contact", {
                            headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                            method: "POST",
                        });

                        if ((await response.json()).success) {
                            setContactFormData({});
                            reset();

                            toast.success(CONTACT_SUCCESS_TOAST, {
                                icon: <CheckCircleOutlineIcon fontSize="large" />,
                                theme: "colored",
                            });
                        } else {
                            toast.error(CONTACT_ERROR_TOAST, {
                                icon: <HighlightOffOutlinedIcon fontSize="large" />,
                                theme: "colored",
                                autoClose: 5000,
                            });
                        }

                        setIsSubmitting(false);
                    })}
                    disabled={isSubmitting}
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                >
                    Verzenden
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default ContactPage;
