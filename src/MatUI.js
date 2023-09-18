import * as React from "react";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import SendIcon from "@mui/icons-material/Send";

export default function ContinuousSlider() {
  return (
    <div>
      <div className="col-4"></div>
      <div className="mx-5">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        <Stack spacing={2}>
          <TextField fullWidth label="Username" />
          <TextField fullWidth label="Email" />
          <Button variant="outlined" startIcon={<SendIcon />}>
            Login
          </Button>
        </Stack>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
