"use client";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import HouseTwoToneIcon from "@mui/icons-material/HouseTwoTone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DELIVERY__COSTS_TEXT } from "@/config/constants";
import Typography from "@mui/material/Typography";
import { useDeliveryCosts } from "@/utils/hooks";
import { deliveryAtom } from "@/utils/state";
import { formatPrice } from "@/utils/utils";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useAtom } from "jotai";

const DeliveryCosts = ({ editable }) => {
    const [delivery, setDelivery] = useAtom(deliveryAtom);
    const deliveryCosts = useDeliveryCosts();

    return (
        <Paper elevation={3} sx={{ width: "100%", my: 2, p: 2 }}>
            <Grid2 container justifyContent="space-between" alignItems="center">
                <Grid2 xs="auto" sx={{ pr: 4, display: editable ? "flex" : "none" }}>
                    <Tooltip title={DELIVERY__COSTS_TEXT} enterTouchDelay={0} leaveTouchDelay={3000}>
                        <Stack direction="row" alignItems="center">
                            <FormControlLabel
                                control={<Switch checked={!delivery} onChange={() => setDelivery(!delivery)} />}
                                label="Zelf afhalen?"
                            />
                            <HelpOutlineIcon fontSize="small" color="primary" sx={{ cursor: "pointer" }} />
                        </Stack>
                    </Tooltip>
                </Grid2>

                <Grid2 container justifyContent="flex-end" sx={{ flexGrow: 1 }}>
                    <Stack direction="row" alignItems="center">
                        <LocalShippingTwoToneIcon
                            sx={{
                                display: delivery ? "flex" : "none",
                                height: "1.5em",
                                width: "1.5em",
                                mr: 2,
                            }}
                            color="primary"
                        />
                        <HouseTwoToneIcon
                            sx={{
                                display: delivery ? "none" : "flex",
                                height: "1.5em",
                                width: "1.5em",
                                mr: 2,
                            }}
                            color="primary"
                        />
                        <Typography variant="subtitle2">Verzendkosten:</Typography>
                        <Typography variant="subtitle2" sx={{ ml: 1 }}>
                            <b>{formatPrice(deliveryCosts)}</b>
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </Paper>
    );
};

export default DeliveryCosts;
