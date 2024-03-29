import { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import Header from "../../../components/UI/Header";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "../style/styles.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import CloseIcon from "@mui/icons-material/Close";

const Calendar = ({ eventClick, dateClick, events }) => {
  const light = useSelector((state) => state.light);
  const matches = useMediaQuery("(min-width: 640px)");
  const [theme, setTheme] = useState("dark");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    light === false ? setTheme("dark") : setTheme("light");
  }, [light]);

  useEffect(() => {
    if (matches) {
      document.querySelector(".fc-header-toolbar").style.flexDirection = "row";
    } else {
      document.querySelector(".fc-header-toolbar").style.flexDirection =
        "column";
    }
  }, [matches]);

  useEffect(() => {
    document.querySelector(".fc-listWeek-button").textContent = t("List");
    document.querySelector(".fc-today-button").textContent = t("Today");
    document.querySelector(".fc-dayGridMonth-button").textContent = t("Month");
  }, [i18n.language, t]);

  function renderEventContent(eventInfo) {
    if (eventInfo.date < new Date().setHours(0, 0, 0, 0)) {
      return (
        <div className="bg-red-900 rounded">
          <CloseIcon className="block w-full " />
        </div>
      );
    }

    return;
  }

  return (
    <Box className="mb-10 aaa">
      <Header currentPage={{ title: "Calendar", icon: CalendarMonthIcon }} />
      <Box className="demo-app-calendar w-full shadow-xl" id="mycalendartest">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          selectable={true}
          editable={true}
          defaultView="dayGridMonth"
          eventBackgroundColor="green"
          eventColor="white"
          eventClick={eventClick}
          dateClick={dateClick}
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, listWeek",
          }}
          height={600}
          initialView="dayGridMonth"
          weekends={true}
          firstDay={1}
          className={theme}
          timeZone="local"
          dayCellContent={renderEventContent}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
