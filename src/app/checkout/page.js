"use client";
import { shoppingCartAtom, checkoutFormAtom, checkoutStepAtom, contactFormAtom } from "@/utils/state";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CHECKOUT_ERROR_TOAST, CHECKOUT_SUCCESS_TOAST } from "@/config/constants";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import { useDeliveryCosts, useTotalPrice } from "@/utils/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { formatPrice, mergeObjects } from "@/utils/utils";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCart from "@/organisms/ShoppingCart";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import Backdrop from "@mui/material/Backdrop";
import CheckoutForm from "@/forms/Checkout";
import Overview from "@/organisms/Overview";
import Stepper from "@mui/material/Stepper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import Step from "@mui/material/Step";
import { useAtom } from "jotai";
import pick from "lodash/pick";

export const checkoutSteps = [
    {
        activeIcon: <ShoppingCartOutlinedIcon color="secondary" />,
        completedIcon: <ShoppingCartTwoToneIcon color="primary" />,
        defaultIcon: <ShoppingCartTwoToneIcon color="disabled" />,
        label: "Producten",
    },
    {
        activeIcon: <LocationOnOutlinedIcon color="secondary" />,
        completedIcon: <LocationOnTwoToneIcon color="primary" />,
        defaultIcon: <LocationOnTwoToneIcon color="disabled" />,
        label: "Je gegevens",
    },
    {
        activeIcon: <CheckCircleOutlinedIcon color="secondary" />,
        completedIcon: <CheckCircleTwoToneIcon color="primary" />,
        defaultIcon: <CheckCircleTwoToneIcon color="disabled" />,
        label: "Overzicht",
    },
];

const CheckoutPage = () => {
    const [checkoutFormData, setCheckoutFormData] = useAtom(checkoutFormAtom);
    const [shoppingCart, setShoppingCart] = useAtom(shoppingCartAtom);
    const [activeStep, setActiveStep] = useAtom(checkoutStepAtom);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [contactFormData] = useAtom(contactFormAtom);
    const deliveryCosts = useDeliveryCosts();
    const totalPrice = useTotalPrice();
    const router = useRouter();

    const { handleSubmit, reset, control, resetField } = useForm({
        defaultValues: mergeObjects(pick(contactFormData, ["firstName", "lastName", "email"]), checkoutFormData),
    });

    useEffect(() => {
        scrollTo({ top: 0, behavior: "smooth" });
    }, [activeStep]);

    return (
        <Stack maxWidth="lg" justifyContent="center" sx={{ mx: "auto" }}>
            <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 3 }} open={isSubmitting}>
                <CircularProgress color="primary" />
            </Backdrop>
            <Stepper alternativeLabel activeStep={activeStep}>
                {checkoutSteps.map(({ label, completedIcon, activeIcon, defaultIcon }) => (
                    <Step
                        key={label}
                        sx={{
                            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                                color: "text.secondary",
                            },
                            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                                color: "text.secondary",
                                fontWeight: "bold",
                            },
                            "& .MuiStepLabel-label.Mui-disabled.MuiStepLabel-alternativeLabel": {
                                color: "text.secondary",
                            },
                        }}
                    >
                        <StepLabel
                            StepIconComponent={({ active, completed }) =>
                                completed ? completedIcon : active ? activeIcon : defaultIcon
                            }
                        >
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid2 xs={12} justifyContent="center" sx={{ display: activeStep === 0 ? "flex" : "none" }}>
                <ShoppingCart />
            </Grid2>
            <Grid2 sx={{ display: activeStep === 1 ? "flex" : "none", my: 4, mx: "auto" }} maxWidth="md" container>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Je gegevens
                </Typography>
                <CheckoutForm control={control} resetField={resetField} />
            </Grid2>
            <Grid2 xs={12} justifyContent="center" sx={{ display: activeStep === 2 ? "flex" : "none" }}>
                <Overview />
            </Grid2>
            <Grid2
                sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    display: shoppingCart.length ? "flex" : "none",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    position: "sticky",
                    width: "100%",
                    bottom: 0,
                    py: 2,
                }}
                justifyContent="flex-end"
                container
            >
                <Typography
                    sx={{ backgroundColor: (theme) => theme.palette.background.default, width: "100%", p: 1 }}
                    variant="subtitle2"
                    align="right"
                >
                    <b>Totaal: {formatPrice(totalPrice)}</b>
                </Typography>
                <Button
                    sx={{ display: activeStep > 0 ? "flex" : "none", mr: 1 }}
                    onClick={() => setActiveStep(activeStep - 1)}
                    variant="outlined"
                    color="secondary"
                >
                    Vorige
                </Button>
                <Button
                    sx={{ display: activeStep !== checkoutSteps.length - 1 ? "flex" : "none" }}
                    onClick={(e) => {
                        if (activeStep === 1) {
                            handleSubmit(() => setActiveStep(activeStep + 1))(e);
                        } else {
                            setActiveStep(activeStep + 1);
                        }
                    }}
                    variant="contained"
                    color="secondary"
                >
                    Volgende
                </Button>
                <Button
                    onClick={async () => {
                        setIsSubmitting(true);

                        const response = await fetch("/api/checkout", {
                            headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                checkout: checkoutFormData,
                                deliveryCosts,
                                shoppingCart,
                            }),
                            method: "POST",
                        });

                        if ((await response.json()).success) {
                            router.push("/");

                            setCheckoutFormData({});
                            setShoppingCart([]);
                            setActiveStep(0);
                            reset();

                            toast.success(CHECKOUT_SUCCESS_TOAST, {
                                icon: <CheckCircleOutlineIcon fontSize="large" />,
                                theme: "colored",
                            });
                        } else {
                            toast.error(CHECKOUT_ERROR_TOAST, {
                                icon: <HighlightOffOutlinedIcon fontSize="large" />,
                                theme: "colored",
                                autoClose: 5000,
                            });

                            setIsSubmitting(false);
                        }
                    }}
                    sx={{ display: activeStep !== checkoutSteps.length - 1 ? "none" : "flex" }}
                    variant="contained"
                    color="secondary"
                >
                    Bestellen
                </Button>
            </Grid2>
        </Stack>
    );
};

export default CheckoutPage;
