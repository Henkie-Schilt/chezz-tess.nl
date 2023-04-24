"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/organisms/ProductCard";
import { useSearchParams } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
import { categoryAtom } from "@/utils/state";
import Button from "@mui/material/Button";
import products from "@/config/products";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Menu from "@mui/material/Menu";
import Tab from "@mui/material/Tab";
import Crumbs from "@/atoms/Crumbs";
import concat from "lodash/concat";
import filter from "lodash/filter";
import { useAtom } from "jotai";
import uniq from "lodash/uniq";
import find from "lodash/find";
import map from "lodash/map";

const WebshopPage = () => {
    const categories = useMemo(() => concat("Alles", uniq(map(products, "category"))), []);
    const [category, setCategory] = useAtom(categoryAtom);
    const [anchorEl, setAnchorEl] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchCategory = find(
            categories,
            (category) => category.toLowerCase() === searchParams.get("category")?.toLowerCase()
        );

        if (searchCategory) {
            setCategory(searchCategory);
        }
    }, [categories, searchParams, setCategory]);

    return (
        <Stack>
            <Crumbs
                crumbs={[
                    { label: "Chezz Tess", href: "/" },
                    { label: "Webshop", href: "/webshop" },
                ]}
            />
            <Tabs value={category} sx={{ my: 3, display: { xs: "none", md: "flex" } }}>
                {categories.map((category) => (
                    <Tab
                        key={category}
                        label={category}
                        value={category}
                        onClick={() => {
                            setCategory(category);
                            setAnchorEl(null);
                        }}
                    />
                ))}
            </Tabs>
            <Button
                onClick={(event) => setAnchorEl(event.currentTarget)}
                sx={{ my: 3, display: { xs: "flex", md: "none" } }}
                endIcon={<KeyboardArrowDownIcon />}
                variant="contained"
                size="large"
            >
                {category}
            </Button>
            <Menu
                sx={{ display: { xs: "block", md: "none" } }}
                onClose={() => setAnchorEl(null)}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                keepMounted
            >
                {categories.map((category) => (
                    <MenuItem
                        onClick={() => {
                            setCategory(category);
                            setAnchorEl(null);
                        }}
                        value={category}
                        sx={{ px: 3 }}
                        key={category}
                    >
                        {category}
                    </MenuItem>
                ))}
            </Menu>
            <Grid2 container spacing={2} justifyContent="center">
                {(category === "Alles" ? products : filter(products, ["category", category])).map(({ code }) => (
                    <Grid2 key={code} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard code={code} imageHeight={380} />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    );
};

export default WebshopPage;
