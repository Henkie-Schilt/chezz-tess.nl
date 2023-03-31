"use client";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion, useAnimationControls } from "framer-motion";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { shockwave, wiggle } from "@/utils/animations";
import { Controller, useForm } from "react-hook-form";
import { useShoppingCartItem } from "@/utils/hooks";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import isEmpty from "lodash/isEmpty";
import { useEffect } from "react";

const ShoppingCartAmount = ({ code, buttons }) => {
    const [amount, add, update, remove] = useShoppingCartItem(code);
    const { control, setValue, handleSubmit, reset } = useForm({ mode: "onChange", defaultValues: { amount } });
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
                                    update(parseInt(value));
                                } else if (isEmpty(amount) && !invalid && isDirty) {
                                    animation.start(buttons ? shockwave(1.04) : wiggle);
                                } else if (isEmpty(amount) && isEmpty(value)) {
                                    reset();
                                } else if (invalid) {
                                    setTimeout(() => setValue("amount", amount, { shouldValidate: true }), 1000);
                                }

                                onBlur();
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
                    <IconButton onClick={handleSubmit((formValues) => add(formValues.amount))} size="large">
                        <AddShoppingCartIcon fontSize="medium" />
                    </IconButton>
                </motion.div>
            </Grid2>
            <Grid2 xs="auto" sx={{ display: !buttons && !isEmpty(amount) ? "flex" : "none", p: 0 }}>
                <IconButton onClick={() => remove()} size="large">
                    <DeleteOutlineOutlinedIcon fontSize="medium" />
                </IconButton>
            </Grid2>
            <Grid2 xs={12} sx={{ display: buttons && isEmpty(amount) ? "flex" : "none" }}>
                <motion.div animate={animation} style={{ width: "100%" }}>
                    <Button
                        onClick={handleSubmit((formValues) => add(formValues.amount))}
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth
                    >
                        In winkelwagen
                    </Button>
                </motion.div>
            </Grid2>
            <Grid2 xs={12} sx={{ display: buttons && !isEmpty(amount) ? "flex" : "none" }}>
                <Button onClick={() => remove()} variant="contained" color="secondary" size="large" fullWidth>
                    Verwijderen
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default ShoppingCartAmount;
