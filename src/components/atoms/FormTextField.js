"use client";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const FormTextField = ({ control, resetField, label, name, rules = {}, type = "text", multiline = false }) => (
    <Controller
        control={control}
        defaultValue=""
        rules={rules}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
            <TextField
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => resetField(name, { defaultValue: "" })} edge="end" tabIndex={-1}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                minRows={multiline ? 4 : null}
                helperText={error?.message}
                multiline={multiline}
                onChange={onChange}
                error={invalid}
                onBlur={onBlur}
                label={label}
                value={value}
                type={type}
                fullWidth
            />
        )}
    />
);

export default FormTextField;
