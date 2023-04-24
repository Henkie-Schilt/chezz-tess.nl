"use client";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import ShoppingCart from "@/organisms/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { shoppingCartAtom } from "@/utils/state";
import { useTotalPrice } from "@/utils/hooks";
import { formatPrice } from "@/utils/utils";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAtom } from "jotai";
import Link from "next/link";

const ShoppingCartDialog = ({ open, setOpen }) => {
    const [shoppingCart] = useAtom(shoppingCartAtom);
    const totalPrice = useTotalPrice();

    return (
        <Dialog onClose={() => setOpen(false)} open={open} maxWidth="md" fullWidth>
            <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                Winkelwagen
                <IconButton onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <ShoppingCart />
            </DialogContent>
            <DialogActions>
                <Stack alignItems="flex-end" sx={{ p: 1 }}>
                    <Typography
                        sx={{
                            backgroundColor: (theme) => theme.palette.background.paper,
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                            p: 1,
                        }}
                        variant="subtitle2"
                        align="right"
                    >
                        <b>Totaal: {formatPrice(totalPrice)}</b>
                    </Typography>
                    <Link
                        style={{ textDecoration: "inherit", display: shoppingCart.length ? "flex" : "none" }}
                        href="/checkout"
                    >
                        <Button onClick={() => setOpen(false)} size="large" color="secondary" variant="contained">
                            Afronden
                        </Button>
                    </Link>
                </Stack>
            </DialogActions>
        </Dialog>
    );
};

export default ShoppingCartDialog;
