"use client";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Navigation, Pagination, Autoplay } from "swiper";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Swiper, SwiperSlide } from "swiper/react";
import { alpha } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Image from "next/image";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ pictures }) => {
    return (
        <Stack>
            <Stack
                direction="row"
                sx={{ position: "relative", width: { xs: "25em", md: "30em", lg: "35em" }, maxWidth: "80vw" }}
            >
                <Fab
                    sx={{
                        ":focus": {
                            backgroundColor: alpha("#161c24", 0.6),
                        },
                        backgroundColor: alpha("#161c24", 0.6),
                        position: "absolute",
                        margin: "auto",
                        bottom: 0,
                        left: 10,
                        top: 0,
                    }}
                    className="swiper-custom-navigation-previous"
                    size="medium"
                >
                    <ChevronLeftIcon fontSize="large" sx={{ color: "lightgrey" }} />
                </Fab>
                <Swiper
                    pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
                    navigation={{
                        nextEl: ".swiper-custom-navigation-next",
                        prevEl: ".swiper-custom-navigation-previous",
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Pagination, Navigation, Autoplay]}
                    style={{ width: "100%" }}
                    className="mySwiper"
                    spaceBetween={30}
                    speed={1000}
                    autoHeight
                    loop
                >
                    {pictures.map((picture) => (
                        <SwiperSlide key={picture}>
                            <Grid2 container alignItems="center" justifyContent="center">
                                <Image
                                    style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "20px" }}
                                    src={`/static/${picture}.jpg`}
                                    alt={picture}
                                    height={600}
                                    width={600}
                                />
                            </Grid2>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Fab
                    sx={{
                        ":focus": {
                            backgroundColor: alpha("#161c24", 0.6),
                        },
                        backgroundColor: alpha("#161c24", 0.6),
                        position: "absolute",
                        margin: "auto",
                        right: 10,
                        bottom: 0,
                        top: 0,
                    }}
                    className="swiper-custom-navigation-next"
                    size="medium"
                >
                    <ChevronRightIcon fontSize="large" sx={{ color: "lightgrey" }} />
                </Fab>
            </Stack>
            <Stack alignItems="center" sx={{ width: "100%" }}>
                <Box className="swiper-custom-pagination" sx={{ width: "auto !important", pt: 1 }} />
            </Stack>
        </Stack>
    );
};

export default Carousel;
