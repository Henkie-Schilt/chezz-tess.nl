"use client";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Attention from "@/atoms/Attention";
import Link from "next/link";

export const HomeElement = (
    <Attention
        text={
            <span>
                Ik kan ook personelijke sierraden of kaarsen maken, je kunt hierover contact met me openemen via de {" "}
                <Link href="/contact" style={{ color: "black" }}>
                    <b>contactpagina</b>
                </Link>
                .
            </span>
        }
        icon={VolunteerActivismOutlinedIcon}
    />
);

export const CheckoutElement = (
    <Attention
        icon={InfoOutlinedIcon}
        text="Let op: Op dit moment is het nog niet mogelijk om via de website je betaling te voldoen. Na
            afronding van je bestelling ontvang je een factuur op het opgegeven e-mailadres. Na betaling van
            deze factuur, zal het pakket jouw kant op komen."
    />
);

export const ContactElement = (
    <Attention
        text="Ik kan ook personelijke sierraden of kaarsen maken, je kunt hierover contact met me openemen via de contactpagina."
        icon={VolunteerActivismOutlinedIcon}
    />
);
