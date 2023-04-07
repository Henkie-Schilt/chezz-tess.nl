"use client";
import { HOME_CAROUSEL, HOME_TEXT } from "@/config/constants";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import ProductCard from "@/molecules/ProductCard";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { HomeElement } from "@/config/elements";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import Carousel from "@/molecules/Carousel";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import filter from "lodash/filter";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Stack rowGap={3} alignItems="center">
            <Box maxWidth="md">{HomeElement}</Box>
            <Carousel pictures={HOME_CAROUSEL} />
            <Typography maxWidth="md" align="center">
                {HOME_TEXT}
            </Typography>
            <Typography variant="subtitle1" sx={{ pt: 3 }}>
                Mijn <b>favorieten</b> van dit moment:
            </Typography>
            <Grid2 container spacing={3} justifyContent="center">
                {filter(products, ["recommended", true]).map(({ code }) => (
                    <Grid2 key={code} xs={10} sm={6} md={4} lg={3}>
                        <ProductCard code={code} imageHeight={250} />
                    </Grid2>
                ))}
            </Grid2>
            <Stack sx={{ maxWidth: "60em", mt: 3 }}>
                <ListSubheader>Nieuwe producten</ListSubheader>
                <ImageList variant="masonry" cols={sm ? 3 : 2} sx={{ mt: "3px" }}>
                    {filter(products, ["new", true]).map(({ code, name, description }) => (
                        <Link key={code} href={`/product/${code}`}>
                            <ImageListItem>
                                <Box sx={{ width: "100%", position: "unset !important" }}>
                                    <Image
                                        style={{ height: "100%", width: "100%" }}
                                        src={`/static/${code}.jpg`}
                                        height={600}
                                        width={600}
                                        alt=""
                                    />
                                </Box>
                                <ImageListItemBar
                                    subtitle={description}
                                    title={name}
                                    actionIcon={
                                        <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Stack>
        </Stack>
    );
};

export default Home;
