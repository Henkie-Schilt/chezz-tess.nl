"use client";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const FormTextField = ({
    multiline = false,
    required = false,
    maxLength = 250,
    type = "text",
    resetField,
    control,
    label,
    name,
}) => (
    <Controller
        rules={{
            maxLength: { value: maxLength, message: `Maximaal ${maxLength} tekens` },
            required: { value: required, message: "Dit is een verplicht veld" },
        }}
        control={control}
        defaultValue=""
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
            <TextField
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ pr: 1 }}>
                            <IconButton onClick={() => resetField(name, { defaultValue: "" })} edge="end" tabIndex={-1}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    "& label": { paddingLeft: (theme) => theme.spacing(2) },
                    "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
                    "& fieldset": { paddingLeft: (theme) => theme.spacing(2.5) },
                }}
                minRows={multiline ? 4 : null}
                helperText={error?.message}
                multiline={multiline}
                required={required}
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
