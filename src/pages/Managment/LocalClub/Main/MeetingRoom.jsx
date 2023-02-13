import { useState, useEffect } from "react";
import { Box, Button, IconButton, FormLabel, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { useScrollToUp } from "../../../../hooks/useScrollToUp";
import { Formik, Form, FieldArray } from "formik";
import { format } from "date-fns";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import DefaultButton from "../../../../components/UI/Buttons/DefaultButton";
import BackButton from "../../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../../components/UI/Buttons/SuccessButton";

// icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// components
import Header from "../../../../components/UI/Header";
import Calendar from "./Calendar";
import DeleteBookedRooms from "../Components/DeleteBookedRooms";
import CustomSelect from "../../../../components/Form/CustomSelect";
import CustomTextField from "../../../../components/Form/CustomTextField";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getBookedRooms } from "../../../../app/Slicers/leisure/meetingRoom";
import { bookRoom } from "../../../../app/Slicers/leisure/meetingRoom";
import { setModal } from "../../../../app/Slicers/modals";
import { changeBookRoomStatus } from "../../../../app/Slicers/leisure/meetingRoom";
import CustomDatePicker from "../../../../components/Form/CustomDatePicker";
import CustomDigitalTimePicker from "../../../../components/Form/CustomDigitalTimePicker";
import { BronMeetingRoomSchema } from "../../../../validations/leisureclub/meetinRoomVal";
import DefaultButton from "../../../../components/UI/Buttons/DefaultButton";

const optionsTime = [
  { label: "00:10", value: "00:10" },
  { label: "00:20", value: "00:20" },
  { label: "00:30", value: "00:30" },
  { label: "00:40", value: "00:40" },
  { label: "00:50", value: "00:50" },
  { label: "01:00", value: "01:00" },
  { label: "01:10", value: "01:10" },
  { label: "01:20", value: "01:20" },
  { label: "01:30", value: "01:30" },
  { label: "01:40", value: "01:40" },
  { label: "01:50", value: "01:50" },
  { label: "02:00", value: "02:00" },
];

const optionRoom = [
  { label: "Iclas otağı 1", value: "1" },
  { label: "Iclas otağı 2", value: "2" },
];

const columns = [
  {
    field: "start_date",
    headerName: "Başlama vaxtı",
    width: 200,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "end_date",
    headerName: "Bitmə vaxtı",
    width: 200,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "duration",
    headerName: "Müddət",
    width: 120,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "meeting_room",
    headerName: "İclas otağı",
    width: 200,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "created_time",
    headerName: "Yaradıldı",
    width: 200,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
  },
  {
    field: "delete",
    headerName: "Sil",
    width: 80,
    headerClassName: "data-grid-header",
    headerAlign: "center",
    cellClassName: "data-grid-cell",
    renderCell: (params) => {
      return <DeleteBookedRooms params={params} />;
    },
  },
];

const MeetingRoom = () => {
  useScrollToUp();
  const { bookedRooms, bookRoomStatus } = useSelector(
    (state) => state.meetingRoom
  );
  const { modal } = useSelector((state) => state.modals);
  const { light } = useSelector((state) => state.themes);
  const [theme, setTheme] = useState("dark");
  const [guests, setGuests] = useState([{ guest: "" }]);
  const [eventData, setEventData] = useState(null);
  const [defaultDate, setDefaultDate] = useState(null);
  const [date, setDate] = useState(null);

  const today = new Date();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    light ? setTheme("dark") : setTheme("light");
  }, [light]);

  useEffect(() => {
    dispatch(getBookedRooms(Cookies.get("token")));
  }, []);

  useEffect(() => {
    if (date >= today) {
      dispatch(
        setModal({
          isOpen: true,
          title: "Yeni bronlama",
          children: bronModal,
          changeStatus: () => {
            dispatch(changeBookRoomStatus("idle"));
          },
          status: bookRoomStatus,
          data: {
            guests,
            setGuests,
            defaultDate,
          },
        })
      );
    }
  }, [date]);

  useEffect(() => {
    dispatch(
      setModal({
        ...modal,
        status: bookRoomStatus,
        children: bronModal,
      })
    );
  }, [bookRoomStatus]);

  useEffect(() => {
    if (eventData) {
      dispatch(
        setModal({
          isOpen: true,
          title: "Yeni bronlama",
          children: eventModal,
          data: eventData,
          className: "h-fit",
        })
      );
    }
  }, [eventData]);

  const handleDateClick = (e) => {
    setDefaultDate(
      format(e.date, "yyyy-MM-dd") + " " + format(new Date(), "HH:mm")
    );
    setDate(e.date);
  };

  const handleEventClick = (e) => {
    setEventData(e.event._def);
  };

  const bronModal = (
    <Box>
      <Formik
        initialValues={{
          start_date: "",
          duration: "",
          meeting_room: "",
          title: "",
          message: "",
          guests: [""],
        }}
        onSubmit={(values) => {
          console.log(values);
          const editedValues = {
            ...values,
            start_date: values.start_date.replace("T", ", "),
          };
          dispatch(
            bookRoom({
              data: editedValues,
              token: Cookies.get("token"),
            })
          );
        }}
      >
        {({ values }) => (
          <Form>
            <NewCustomTimePicker
              name="start_date"
              label="Bronlama vaxti"
              defaultValue={defaultDate ? defaultDate : ""}
            />
            <CustomSelect
              label="Bronlama müddəti"
              options={optionsTime}
              name="duration"
              noTranslation
              onlyValue
            />
            <CustomSelect
              label="İclas otağı"
              options={optionRoom}
              name="meeting_room"
              onlyValue
            />
            <CustomTextField label="Başlıq" name="title" />
            <CustomTextField label="Şərhiniz" name="message" multiline />
            <Box className="mb-3 bg-blue-500 rounded text-gray-200 p-2">
              <AccountCircleIcon className="mr-1 h-4 w-4" />
              {t("Guests")}
            </Box>
            <FieldArray name="guests">
              {({ insert, remove, push }) => (
                <Box className="flex flex-col ">
                  {values?.guests?.map((item, index) => (
                    <Box key={index} className="flex items-center m-2 ">
                      <CustomTextField
                        label="Qonağın tam adı"
                        name={`guests.${index}`}
                        className="mb-0 flex-1"
                        variant="outlined"
                      />
                      {index === 0 && (
                        <IconButton onClick={() => push("")}>
                          <AddOutlinedIcon />
                        </IconButton>
                      )}
                      {index !== 0 && (
                        <IconButton onClick={() => remove(index)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </FieldArray>
            <Box className="flex gap-x-2 my-3 justify-end">
              <BackButton
                variant="outlined"
                onClick={() =>
                  dispatch(
                    setModal({
                      ...modal,
                      isOpen: false,
                    })
                  )
                }
              >
                {t("Close")}
              </BackButton>
              <SuccessButton
                type="submit"
                variant="contained"
                loading={bookRoomStatus === "loading"}
              >
                {t("Save")}
              </SuccessButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );

  const eventModal = (
    <Box>
      <Box className="p-2">
        <FormLabel>Başlama tarixi</FormLabel>
        <TextField
          disabled
          defaultValue={`${eventData?.extendedProps?.startStr}`}
          variant="outlined"
          margin="dense"
          fullWidth
          className="mb-4"
        />
        <FormLabel>Bitmə tarixi</FormLabel>
        <TextField
          disabled
          defaultValue={`${eventData?.extendedProps?.endStr}`}
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </Box>

      <Box className="flex gap-x-2 my-3 justify-end">
        <BackButton
          variant="outlined"
          onClick={() =>
            dispatch(
              setModal({
                ...modal,
                isOpen: false,
              })
            )
          }
        >
          {t("Close")}
        </BackButton>
      </Box>
    </Box>
  );

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Meeting room", icon: MeetingRoomIcon }} />
      <Box className="rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-6 px-6 my-4">
          <Box className="flex justify-end mb-6">
            <DefaultButton
              startIcon={<AddCircleOutlineOutlinedIcon />}
              variant="contained"
              onClick={() =>
                dispatch(
                  setModal({
                    isOpen: true,
                    children: bronModal,
                  })
                )
              }
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Reservation")}
            </DefaultButton>
          </Box>

          <Calendar
            eventClick={handleEventClick}
            dateClick={handleDateClick}
            events={bookedRooms.map((item) => {
              return {
                id: item.id,
                className: "bg-green-500 rounded p-1 m-1",
                title: `${item.start_date.substring(10).slice(0, -3)} ${
                  item.rtype === 1 ? "(R1)" : "(R2)"
                } Bronlanıb`,
                date: item.start_date.slice(0, -9),
                startStr:
                  item.start_date.slice(0, -9) +
                  ", " +
                  item.start_date.substring(10).slice(0, -3),
                endStr:
                  item.end_date.slice(0, -9) +
                  ", " +
                  item.end_date.substring(10).slice(0, -3),
              };
            })}
          />

          <Box className="mb-10">
            <DataGrid
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
              rows={bookedRooms.map((item) => {
                return {
                  id: item.id,
                  start_date: item.start_date.slice(0, -3),
                  end_date: item.end_date.slice(0, -3),
                  meeting_room: item.rdata.meeting_room,
                  duration: "",
                  // Number(item.start_date.substring(10).slice(0, -3)) -
                  // Number(item.end_date.substring(10).slice(0, -3)),
                  status: "",
                  created_time: item?.created_at
                    ?.replace("T", " ")
                    ?.slice(0, -11),
                  delete: "",
                };
              })}
              columns={columns}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetingRoom;
