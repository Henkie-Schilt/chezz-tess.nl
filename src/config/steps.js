
"use client";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
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
