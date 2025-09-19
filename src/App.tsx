import { Box, Typography } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeClock } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
// import dayjs from "dayjs";

function App() {
  const [min, setMin] = useState<dayjs.Dayjs | null>(null);
  const [max, setMax] = useState<dayjs.Dayjs | null>(null);

  return (
    <Box>
      <DemoContainer components={["TimeClock", "TimeClock"]}>
        <Typography variant="h6" gutterBottom>
          TimeClock
        </Typography>
        <Typography variant="h6" gutterBottom>
          選択中の時間 {min?.format("HH:mm") ?? "--:--"} -{" "}
          {max?.format("HH:mm") ?? "--:--"}
        </Typography>
      </DemoContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
        <DemoContainer components={["TimeClock", "TimeClock"]}>
          <DemoItem label="Mobile variant">
            <TimeClock
              ampm={false}
              view="hours"
              value={min}
              maxTime={max ?? undefined}
              onChange={(newValue) => setMin(newValue)}
            />
          </DemoItem>
          <DemoItem label="Mobile variant">
            <TimeClock
              ampm={false}
              view="hours"
              value={max}
              minTime={min ?? undefined}
              onChange={(newValue) => setMax(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}

export default App;
