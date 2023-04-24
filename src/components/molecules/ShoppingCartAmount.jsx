"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion, useAnimationControls } from "framer-motion";
import { useShoppingCartItemAmount } from "@/utils/hooks";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { shockwave, wiggle } from "@/utils/animations";
import { Controller, useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { shoppingCartAtom } from "@/utils/state";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import isEmpty from "lodash/isEmpty";
import reject from "lodash/reject";
import concat from "lodash/concat";
import { useEffect } from "react";
import { useAtom } from "jotai";

const ShoppingCartAmount = ({ code, buttons }) => {
    const amount = useShoppingCartItemAmount(code);

    const { control, setValue, handleSubmit, reset } = useForm({ mode: "onChange", defaultValues: { amount } });
    const [shoppingCart, setShoppingCart] = useAtom(shoppingCartAtom);
    const animation = useAnimationControls();

    useEffect(() => setValue("amount", amount), [setValue, amount]);

    return (
        <Grid2 container alignItems="center" direction={buttons ? "column" : "row"} sx={{ p: 0, width: "100%" }}>
            <Grid2 xs={buttons ? 12 : true} sx={{ flexGrow: 1 }}>
                <Controller
                    rules={{
                        required: { value: true, message: "Dit is een verplicht veld" },
                        min: { value: 1, message: "Aantal moet minimaal 1 zijn" },
                    }}
                    control={control}
                    name={"amount"}
                    render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error, isDirty } }) => (
                        <TextField
                            onBlur={() => {
                                if (!isEmpty(amount) && !invalid) {
                                    setShoppingCart(
                                        shoppingCart.map((item) =>
                                            item.code === code ? { code, amount: parseInt(value) } : item
                                        )
                                    );
                                } else if (isEmpty(amount) && !invalid && isDirty) {
                                    animation.start(buttons ? shockwave(1.04) : wiggle);
                                } else if (isEmpty(amount) && isEmpty(value)) {
                                    reset();
                                } else if (invalid) {
                                    setTimeout(() => setValue("amount", amount, { shouldValidate: true }), 1000);
                                }

                                onBlur();
                            }}
                            sx={{
                                "& label": { paddingLeft: (theme) => theme.spacing(2) },
                                "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
                                "& fieldset": {
                                    paddingLeft: (theme) => theme.spacing(2.5),
                                },
                            }}
                            helperText={error?.message}
                            onChange={onChange}
                            error={invalid}
                            label="Aantal"
                            value={value}
                            type="number"
                            size="small"
                            fullWidth
                        />
                    )}
                />
            </Grid2>
            <Grid2 xs="auto" sx={{ display: !buttons && isEmpty(amount) ? "flex" : "none", p: 0 }}>
                <motion.div animate={animation}>
                    <IconButton
                        onClick={handleSubmit((formValues) =>
                            setShoppingCart(concat(shoppingCart, { code, amount: parseInt(formValues.amount) }))
                        )}
                        size="large"
                    >
                        <AddShoppingCartIcon fontSize="medium" />
                    </IconButton>
                </motion.div>
            </Grid2>
            <Grid2 xs="auto" sx={{ display: !buttons && !isEmpty(amount) ? "flex" : "none", p: 0 }}>
                <IconButton onClick={() => setShoppingCart(reject(shoppingCart, ["code", code]))} size="large">
                    <DeleteOutlineOutlinedIcon fontSize="medium" />
                </IconButton>
            </Grid2>
            <Grid2 xs={12} sx={{ display: buttons && isEmpty(amount) ? "flex" : "none", mt: 1 }}>
                <motion.div animate={animation} style={{ width: "100%" }}>
                    <Button
                        onClick={handleSubmit((formValues) =>
                            setShoppingCart(concat(shoppingCart, { code, amount: parseInt(formValues.amount) }))
                        )}
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                    >
                        In winkelwagen
                    </Button>
                </motion.div>
            </Grid2>
            <Grid2 xs={12} sx={{ display: buttons && !isEmpty(amount) ? "flex" : "none", mt: 1 }}>
                <Button
                    onClick={() => setShoppingCart(reject(shoppingCart, ["code", code]))}
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                >
                    Verwijderen
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default ShoppingCartAmount;
