import { useState, useEffect } from "react";
import { Box, IconButton, FormLabel, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import { Formik, Form, FieldArray } from "formik";
import { format } from "date-fns";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../../app/Slicers/modals";
import { BronMeetingRoomSchema } from "../../../validations/leisureclub/meetinRoomVal";

// icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// components
import Header from "../../../components/UI/Header";
import Calendar from "./Calendar";
import DeleteBookedRooms from "../Components/DeleteBookedRooms";
import CustomSelect from "../../../components/Form/CustomSelect";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomDatePicker from "../../../components/Form/CustomDatePicker";
import CustomDigitalTimePicker from "../../../components/Form/CustomDigitalTimePicker";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";
import BackButton from "../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../components/UI/Buttons/SuccessButton";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";
import { useQuery } from "@tanstack/react-query";
import { getBookedRooms } from "../../../services/leisureClub/meetingReqs";

const optionsTime = [
  { value: "00:10", label: "10 dəqiqə" },
  { value: "00:20", label: "20 dəqiqə" },
  { value: "00:30", label: "30 dəqiqə" },
  { value: "00:40", label: "40 dəqiqə" },
  { value: "00:50", label: "50 dəqiqə" },
  { value: "01:00", label: "1 saat" },
  { value: "01:10", label: "1 saat 10 dəqiqə" },
  { value: "01:20", label: "1 saat 20 dəqiqə" },
  { value: "01:30", label: "1 saat 30 dəqiqə" },
  { value: "01:40", label: "1 saat 40 dəqiqə" },
  { value: "01:50", label: "1 saat 50 dəqiqə" },
  { value: "02:00", label: "2 saat" },
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
  const { t } = useTranslation();

  const { data: bookedRooms, isLoading } = useQuery({
    queryKey: ["meetingRooms"],
    queryFn: getBookedRooms,
  });

  const { modal } = useSelector((state) => state.modals);
  const { light } = useSelector((state) => state.themes);

  const [theme, setTheme] = useState("dark");
  const [guests, setGuests] = useState([{ guest: "" }]);
  const [eventData, setEventData] = useState(null);
  const [defaultDate, setDefaultDate] = useState(null);
  const [date, setDate] = useState(null);

  const mobileColumns = [
    {
      key: "start_date",
      label: "Başlama vaxtı",
      width: 200,
    },
    {
      key: "end_date",
      label: "Bitmə vaxtı",
      width: 100,
    },
    {
      key: "duration",
      label: "Terapevt",
      width: 100,
    },
    {
      key: "meeting_room",
      label: "İclas otağı",
      width: 100,
    },
    {
      key: "status",
      label: "Status",
      width: 100,
    },
    {
      key: "created_time",
      label: "Yaradıldı",
      width: 100,
    },
    {
      key: "delete",
      label: t("Delete"),
      width: 150,
      render: (value, data) => {
        return <DeleteBookedRooms params={data} />;
      },
    },
  ];

  const today = new Date().setHours(0, 0, 0, 0);
  const dispatch = useDispatch();

  const bronModal = (
    <Box>
      <Formik
        initialValues={{
          start_date: "",
          start_time: "",
          duration: "",
          meeting_room: "",
          title: "",
          message: "",
          guests: [""],
        }}
        validationSchema={BronMeetingRoomSchema}
        onSubmit={(values) => {
          // dispatch(
          //   bookRoom({
          //     data: {
          //       ...values,
          //       start_date: values.start_date.replace("T", ", "),
          //     },
          //     token: Cookies.get("token"),
          //   })
          // );
        }}
      >
        {({ values }) => (
          <Form>
            <CustomDatePicker
              name="start_date"
              errorMessage="Zəhmət olmasa, bronlanma tarixini seçin"
              label="Bronlama günü"
              containerClassName="w-full mb-6"
              className="w-full"
            />
            <CustomDigitalTimePicker
              name="start_time"
              label="Başlama saatı"
              containerClassName="w-full mb-6"
              errorMessage="Zəhmət olmasa, bronlanma vaxtını seçin"
              className="w-full"
            />
            <CustomSelect
              label="Bronlama müddəti"
              options={optionsTime}
              name="duration"
              containerClassName="mb-6 z-[10000] m-0"
              errorMessage="Zəhmət olmasa, bronlama müddətini seçin"
              noTranslation
              onlyValue
            />
            <CustomSelect
              label="İclas otağı"
              options={optionRoom}
              name="meeting_room"
              containerClassName="mb-6 z-[10000] m-0"
              errorMessage="Zəhmət olmasa, bronlama müddətini seçin"
              onlyValue
            />
            <CustomTextField label="Başlıq" name="title" />
            <CustomTextField label="Şərhiniz" name="message" multiline />
            <Box className="bg-blue-500 mb-6 rounded text-gray-200 p-2">
              <AccountCircleIcon className="mr-1 h-4 w-4" />
              {t("Guests")}
            </Box>
            <FieldArray name="guests">
              {({ insert, remove, push }) => (
                <Box className="flex flex-col ">
                  {values?.guests?.map((item, index) => (
                    <Box key={index} className="flex items-center">
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
                onClick={() =>
                  dispatch(
                    setModal({
                      ...modal,
                      isOpen: false,
                    })
                  )
                }
                type="button"
                variant="outlined"
              >
                {t("Close")}
              </BackButton>
              <SuccessButton
                loading={isLoading}
                type="submit"
                variant="contained"
              >
                {t("Save")}
              </SuccessButton>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );

  useEffect(() => {
    light ? setTheme("dark") : setTheme("light");
  }, [light]);

  useEffect(() => {
    dispatch(
      setModal({
        ...modal,
        status: isLoading,
        children: bronModal,
      })
    );
  }, [isLoading, bronModal, dispatch, modal]);

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

  if (isLoading) return <div>Loading...</div>;

  // useEffect(() => {
  //   if (date >= today) {
  //     dispatch(
  //       setModal({
  //         isOpen: true,
  //         title: "Yeni bronlama",
  //         children: bronModal,
  //         changeStatus: () => {
  //           dispatch(changeBookRoomStatus("idle"));
  //         },
  //         status: bookRoomStatus,
  //         data: {
  //           guests,
  //           setGuests,
  //           defaultDate,
  //         },
  //       })
  //     );
  //   }
  // }, [date]);

  const handleDateClick = (e) => {
    setDefaultDate(
      format(e.date, "yyyy-MM-dd") + " " + format(new Date(), "HH:mm")
    );
    setDate(e.date);
  };

  const handleEventClick = (e) => {
    setEventData(e.event._def);
  };

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
          onClick={() =>
            dispatch(
              setModal({
                ...modal,
                isOpen: false,
              })
            )
          }
          type="button"
          variant="outlined"
        >
          {t("Close")}
        </BackButton>
      </Box>
    </Box>
  );

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Meeting room", icon: MeetingRoomIcon }} />
      <Box className="rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="py-6 px-6">
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
            >
              {t("New Reservation")}
            </DefaultButton>
          </Box>

          <Calendar
            eventClick={handleEventClick}
            dateClick={handleDateClick}
            events={bookedRooms.map((item) => {
              if (new Date(item.start_date) < new Date()) return {};

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
            <CustomDataGrid
              desktopColumns={columns}
              mobileColumns={mobileColumns}
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
              width={630}
              status={bookedRooms.status}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetingRoom;
