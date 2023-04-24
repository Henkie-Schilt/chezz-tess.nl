import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Crumbs = ({ crumbs }) => (
    <Breadcrumbs sx={{ width: "100%" }}>
        {crumbs.map(({ href, label }, index) => (
            <Link key={label} href={href} style={{ textDecoration: "inherit", color: "inherit" }}>
                <Typography
                    color={index === crumbs.length - 1 ? "text.primary" : "text.secondary"}
                    fontWeight={index === crumbs.length - 1 ? "bold" : ""}
                    variant="body2"
                >
                    {label}
                </Typography>
            </Link>
        ))}
    </Breadcrumbs>
);

export default Crumbs;
