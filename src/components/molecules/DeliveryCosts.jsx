"use client";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { DELIVERY__COSTS_TEXT } from "@/config/constants";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import { deliveryAtom } from "@/utils/state";
import { formatPrice } from "@/utils/utils";
import Tooltip from "@mui/material/Tooltip";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useAtom } from "jotai";

const DeliveryCostTile = ({ children, editable, value, costs, delivery, setDelivery }) => (
    <Grid2 xs={12} sm={6} onClick={() => setDelivery(editable ? value : delivery)}>
        <Paper elevation={6} sx={{ p: 2, my: 1, cursor: "pointer", width: "100%" }}>
            <Stack direction="row" spacing={2}>
                <Radio checked={value === delivery} disabled={!editable} />
                <Stack>
                    {children}
                    <Typography variant="subtitle2">
                        <b>{formatPrice(costs)}</b>
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    </Grid2>
);

const DeliveryCosts = ({ editable }) => {
    const [delivery, setDelivery] = useAtom(deliveryAtom);

    return (
        <Grid2 container spacing={2} justifyContent="center" alignItems="center">
            <DeliveryCostTile
                setDelivery={setDelivery}
                delivery={delivery}
                editable={editable}
                costs={4.95}
                value={true}
            >
                <Typography variant="subtitle2">Verzenden</Typography>
            </DeliveryCostTile>{" "}
            <DeliveryCostTile editable={editable} value={false} costs={0} delivery={delivery} setDelivery={setDelivery}>
                <Tooltip title={DELIVERY__COSTS_TEXT} enterTouchDelay={0} leaveTouchDelay={5000}>
                    <Stack onClick={(e) => e.stopPropagation()} alignItems="center" direction="row" spacing={1}>
                        <Typography variant="subtitle2">Zelf afhalen</Typography>
                        <HelpOutlineIcon fontSize="small" color="primary" />
                    </Stack>
                </Tooltip>
            </DeliveryCostTile>
        </Grid2>
    );
};

export default DeliveryCosts;
