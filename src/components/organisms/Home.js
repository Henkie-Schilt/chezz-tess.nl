
"use client";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InstagramTest from "@/molecules/InstagramTest";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ProductCard from "@/molecules/ProductCard";
import Attention from "@/atoms/Attention";
import products from "@/config/products";
import Link from "next/link";
const Home = () => (
    <>
      <Grid2 container spacing={2} justifyContent="center">
        <Attention
            text={
                <span>
                  
                    Momenteel is de site nog buiten gebruik, en word er via deze site ook nog niks verkocht. Wanneer de site online komt kunt u dit vinden op mijn Instagram: Chezz~Tess{" "}
                    <Link href="/contact" style={{ color: "black" }}>
                       <b>contactpagina</b>
                    </Link>
                    .
                </span>
            }
            icon={HandshakeOutlinedIcon}
        />
        <Grid2 xs={12}>
          <InstagramTest/>
        </Grid2>
      </Grid2>
    </>
  );
  
  export default Home;
