"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { CacheProvider } from "@emotion/react";
import "react-toastify/dist/ReactToastify.css";
import createCache from "@emotion/cache";
import Header from "@/organisms/Header";
import Footer from "@/molecules/Footer";
import Box from "@mui/material/Box";
import theme from "@/config/theme";
import { Provider } from "jotai";
import "./globals.css";

const initialEmotionCache = createCache({ key: "css", prepend: true });

const Root = ({ children, emotionCache = initialEmotionCache }) => (
    <html lang="en">
        <CacheProvider value={emotionCache}>
            <Provider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <body>
                        <ToastContainer
                            style={{ minWidth: "35%" }}
                            position="top-center"
                            autoClose={2000}
                            hideProgressBar
                        />
                        <Box sx={{ mx: "auto" }}>
                            <Header />
                            <Box maxWidth="xl" sx={{ mx: "auto", my: 4, px: 3 }}>
                                {children}
                            </Box>
                            <Footer />
                        </Box>
                    </body>
                </ThemeProvider>
            </Provider>
        </CacheProvider>
    </html>
);

export default Root;
