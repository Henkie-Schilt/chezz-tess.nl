"use client";
import { IconButton, Button, Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";
import ShoppingCart from "@/molecules/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import shoppingCartAtom from "@/utils/state";
import { useAtom } from "jotai";
import Link from "next/link";

const ShoppingCartDialog = ({ open, setOpen }) => {
    const [shoppingCart] = useAtom(shoppingCartAtom);

    return (
        <Dialog onClose={() => setOpen(false)} open={open} maxWidth="md" fullWidth>
            <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
                Winkelwagen
                <IconButton onClick={() => setOpen(false)} sx={{ ml: "auto" }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pb: 0 }}>
                <ShoppingCart />
            </DialogContent>
            <DialogActions>
                <Link
                    style={{ textDecoration: "none", display: shoppingCart.length ? "flex" : "none" }}
                    href="/checkout"
                >
                    <Button onClick={() => setOpen(false)} size="large" color="secondary" variant="contained">
                        Afronden
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    );
};

export default ShoppingCartDialog;
