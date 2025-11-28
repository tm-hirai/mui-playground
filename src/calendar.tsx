import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "dayjs/locale/ja";
import dayjs from "dayjs";

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      <DateCalendar
        slotProps={{
          calendarHeader: {
            format: "YYYY年MM月",
          },
        }}
        minDate={dayjs()}
        maxDate={dayjs("2025/11/28").add(31, "day")}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
