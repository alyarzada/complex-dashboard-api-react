import { useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useScrollToUp } from "../../../hooks/useScrollToUp";

// icons
import MovieIcon from "@mui/icons-material/Movie";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

// components
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";
import Calendar from "./Calendar";

// date picker

// redux
import { useSelector, useDispatch } from "react-redux";
import BronModal from "./Modals/Cinema/BronModal";
import DateModal from "./Modals/Cinema/DateModal";
import EventModal from "./Modals/Cinema/EventModal";

const columns = [
  {
    field: "startTime",
    headerName: "Başlama vaxtı",
    width: 250,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "endTime",
    headerName: "Bitmə vaxtı",
    width: 250,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "duration",
    headerName: "Müddət",
    width: 208,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "crated",
    headerName: "Yaradıldı",
    width: 200,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
];

const Cinema = () => {
  useScrollToUp();

  const { events, eventsCinema } = useSelector((state) => state.events);
  const [openModal, setOpenModal] = useState(false);
  const [openEventModal, setOpenEventModal] = useState(false);
  const [startEvent, SetStartEvent] = useState();
  const [endEvent, SetEndEvent] = useState();
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateDefaultValue, setDateDefaultValue] = useState("");

  const dispatch = useDispatch();
  const today = new Date();

  const handleEventClick = (e) => {
    setOpenEventModal(true);
  };

  const handleDateClick = (e) => {
    setDate(e.date);
    if (date >= today) {
      setOpenDateModal(true);
    }
  };

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Cinema", icon: MovieIcon }} />

      <Box className="rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-6 px-6 my-4">
          <Box className="flex justify-end mb-6">
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              className="capitalize btn-danger"
              variant="contained"
              onClick={() => setOpenModal(true)}
            >
              Yeni bronlama
            </Button>
          </Box>

          <Calendar
            name="cinema"
            eventClick={handleEventClick}
            dateClick={handleDateClick}
          />

          <Box className="mb-10">
            <DataGrid
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
              rows={[]}
              columns={columns}
            />
          </Box>
        </Box>
        <GoBackButton />
      </Box>

      <NewDate/>

      {openModal ? <BronModal /> : null}
      {openDateModal ? <DateModal /> : null}
      {openEventModal ? <EventModal /> : null}
    </Box>
  );
};

export default Cinema;
