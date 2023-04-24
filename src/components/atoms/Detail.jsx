"use client";
import Typography from "@mui/material/Typography";
import isEmpty from "lodash/isEmpty";

const Detail = ({ label, value }) => (
    <Typography
        sx={{ display: isEmpty(value) ? "none" : "block", wordWrap: "break-word" }}
        color="text.secondary"
        variant="body2"
    >
        <b>{label}:</b> {value}
    </Typography>
);

export default Detail;
