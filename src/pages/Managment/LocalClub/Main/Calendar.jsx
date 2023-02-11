import { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

// components
import Header from "../../../../components/UI/Header";

// icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// style
import "../style/styles.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const Calendar = ({ eventClick, dateClick, events }) => {
  const light = useSelector((state) => state.light);
  const matches = useMediaQuery("(min-width: 640px)");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    light == false ? setTheme("dark") : setTheme("light");
  }, [light]);

  useEffect(() => {
    if (matches) {
      document.querySelector(".fc-header-toolbar").style.flexDirection = "row";
    } else {
      document.querySelector(".fc-header-toolbar").style.flexDirection =
        "column";
    }
  }, [matches]);

  return (
    <Box className="mb-10 aaa">
      <Header currentPage={{ title: "Calendar", icon: CalendarMonthIcon }} />
      <Box className="demo-app-calendar w-full" id="mycalendartest">
        <FullCalendar
          selectable={true}
          defaultView="dayGridMonth"
          eventBackgroundColor="green"
          eventColor="white"
          eventClick={eventClick}
          dateClick={dateClick}
          editable={true}
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, listWeek",
          }}
          height={600}
          initialView="dayGridMonth"
          events={events}
          weekends={true}
          firstDay={1}
          className={theme}
          timeZone="local"
        />
      </Box>
    </Box>
  );
};

export default Calendar;
