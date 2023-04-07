"use client";
import { WEBSHOP_PRIMARY_COLOR, WEBSHOP_SECONDARY_COLOR, WEBSHOP_BACKGROUND_COLOR } from "./constants";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: WEBSHOP_PRIMARY_COLOR,
        },
        secondary: {
            main: WEBSHOP_SECONDARY_COLOR,
        },
        background: {
            default: WEBSHOP_BACKGROUND_COLOR,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "--toastify-color-success": WEBSHOP_PRIMARY_COLOR,
                    "--toastify-color-error": WEBSHOP_SECONDARY_COLOR,
                    "--swiper-pagination-color": WEBSHOP_SECONDARY_COLOR,
                    "--swiper-navigation-color": WEBSHOP_SECONDARY_COLOR,
                    scrollbarColor: "#6b6b6b transparent",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "transparent",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        border: `3px solid ${WEBSHOP_BACKGROUND_COLOR}`,
                        backgroundColor: "#6b6b6b",
                        borderRadius: 8,
                        minHeight: 24,
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    },
});

export default theme;
