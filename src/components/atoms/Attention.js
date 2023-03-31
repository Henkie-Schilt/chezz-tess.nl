"use client";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { createElement } from "react";

const Attention = ({ icon, text }) => (
    <Paper sx={{ backgroundColor: (theme) => theme.palette.primary.main, p: 2, width: "100%" }}>
        <Stack alignItems="center" direction="row">
            {createElement(icon, { color: "secondary", sx: { fontSize: "2em", mr: 3, ml: 1 } })}
            <Typography variant="body2" color="text.secondary">
                {text}
            </Typography>
        </Stack>
    </Paper>
);

export default Attention;
