import { useState, useEffect } from "react";
import { Box, Button, TextField, FormLabel } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { LoadingButton } from "@mui/lab";
import { useScrollToUp } from "../../../../hooks/useScrollToUp";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import CustomSelect from "../../../../components/Form/CustomSelect";
import CustomTextField from "../../../../components/Form/CustomTextField";
import NewCustomTimePicker from "../../../../components/Form/NewCustomTimePicker";
import { format } from "date-fns";

// icons
import MovieIcon from "@mui/icons-material/Movie";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

// components
import Header from "../../../../components/UI/Header";
import Calendar from "./Calendar";
import CustomDataGrid from "../../../../components/UI/CustomDataGrid"
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  bookCinemaRoom,
  getBookedCinemaRooms,
} from "../../../../app/Slicers/leisure/cinema";
import DeleteBookedCinemaRoom from "../Components/DeleteBookedCinemaRoom";
import { setModal } from "../../../../app/Slicers/modals";
import { changeBookedCinemaStatus } from "../../../../app/Slicers/leisure/cinema";
import CustomDatePicker from "../../../../components/Form/CustomDatePicker";
import { BronCinemaSchema } from "../../../../validations/leisureclub/cinemaVal";
import DefaultButton from "../../../../components/UI/Buttons/DefaultButton";
import BackButton from "../../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../../components/UI/Buttons/SuccessButton";

//multiselect
const optionsCinemaTime = [
  { label: "09:30", value: "09:30" },
  { label: "11:00", value: "11:00" },
  { label: "13:00", value: "13:00" },
  { label: "15:30", value: "15:30" },
  { label: "18:00", value: "18:00" },
  { label: "20:30", value: "20:30" },
];
const optionsNumberOfResident = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
];
const optionsNumberOfGuests = [
  { label: "0", value: "0" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
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
    field: "status",
    headerName: "Status",
    width: 200,
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
      return <DeleteBookedCinemaRoom params={params} />;
    },
  },
];

const Cinema = () => {
  const { t } = useTranslation();
  useScrollToUp();
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
      label: "Müddət",
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
      render: (value,data) => {
        return <DeleteBookedCinemaRoom params={data} />;
      },
    },
  ];
  const [eventData, setEventData] = useState(null);
  const [date, setDate] = useState(new Date());
  const [defaultDate, setDefaultDate] = useState(null);
  const { modal } = useSelector((state) => state.modals);
  const { bookedCinemaRooms, bookCinemaStatus } = useSelector(
    (state) => state.cinema
  );

  const today = new Date();
  const dispatch = useDispatch();

  const handleEventClick = (e) => {
    setEventData(e.event._def);
  };

  const handleDateClick = (e) => {
    setDate(e.date);
    setDefaultDate(
      format(e.date, "yyyy-MM-dd") + " " + format(new Date(), "HH:mm")
    );
  };

  useEffect(() => {
    if (eventData) {
      dispatch(
        setModal({
          isOpen: true,
          children: eventModal,
          data: eventData,
          status: bookCinemaStatus,
          className: "h-fit",
        })
      );
    }
  }, [eventData]);

  useEffect(() => {
    if (date >= today) {
      dispatch(
        setModal({
          isOpen: true,
          children: bronModal,
          status: bookCinemaStatus,
          className: "h-fit",
          changeStatus: () => {
            dispatch(changeBookedCinemaStatus("idle"));
          },
        })
      );
    }
  }, [date]);

  useEffect(() => {
    dispatch(
      setModal({
        ...modal,
        status: bookCinemaStatus,
        className: "h-fit",
      })
    );
  }, [bookCinemaStatus]);

  useEffect(() => {
    dispatch(getBookedCinemaRooms(Cookies.get("token")));
  }, []);

  const bronModal = (
    <Box>
      <Formik
        initialValues={{
          start_date: "",
          duration: "",
          message: "",
          number_of_residents: "1",
          number_of_guest: "0",
        }}
        validationSchema={BronCinemaSchema}
        onSubmit={(values) => {
          dispatch(
            bookCinemaRoom({
              data: values,
              token: Cookies.get("token"),
            })
          );
        }}
      >
        {() => (
          <Form>
            {/* <NewCustomTimePicker
              label="Rezervasiya tarixi"
              defaultValue={defaultDate ? defaultDate : ""}
            /> */}
            <CustomDatePicker
              name="start_date"
              label="Rezervasiya tarixi"
              // defaultValue={defaultDate ? defaultDate : ""}
              errorMessage="Zəhmət olmasa rezervasiya tarixini seçin"
              containerClassName="w-full mb-6"
              className="w-full"
            />
            <CustomSelect
              label="Bronlama vaxtı"
              options={optionsCinemaTime}
              name="duration"
              onlyValue
              noTranslation
              containerClassName="mb-6 z-[10000] m-0"
              errorMessage="Zəhmət olmasa bronlama vaxtını seçin"
            />
            <CustomSelect
              label="Sakinlərin sayı"
              options={optionsNumberOfResident}
              name="number_of_residents"
              defaultValue="1"
              onlyValue
              noTranslation
              containerClassName="mb-6 z-[10000] m-0"
            />
            <CustomSelect
              label="Qonaqların sayı"
              options={optionsNumberOfGuests}
              name="number_of_guest"
              defaultValue="0"
              calendar
              className="mb-0"
              onlyValue
              noTranslation
              containerClassName="mb-6 z-[10000] m-0"
            />
            <CustomTextField label="Şərhiniz" name="message" multiline />
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
              loading={bookCinemaStatus === "loading"}
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
          className="mb-8"
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
        <Button
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
          color="error"
          className="capitalize"
        >
          Bağla
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Cinema", icon: MovieIcon }} />

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
                    title: "Yeni bronlama",
                  })
                )
              }
            >
              {t("New Reservation")}
            </DefaultButton>
          </Box>

          <Calendar
            events={bookedCinemaRooms.map((item) => {
              return {
                title: `${item.start_date.substring(10).slice(0, -3)} ${item.rtype === 1 ? "(R1)" : "(R2)"
                  } Bronlanıb`,
                date: item.start_date.slice(0, -9),
                className: "bg-green-500 rounded p-1 m-1",
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
            eventClick={handleEventClick}
            dateClick={handleDateClick}
          />

          <Box className="mb-10">
            {/* <DataGrid
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
              columns={columns}
              rows={bookedCinemaRooms.map((item) => {
                return {
                  id: item.id,
                  start_date: item.start_date,
                  end_date: item.end_date,
                  duration: "",
                  status: "",
                  // created_time: item.created_at.replace("T", " ").slice(0, -11),
                  delete: "",
                };
              })}
            /> */}
            <CustomDataGrid
              desktopColumns={columns}
              mobileColumns={mobileColumns}
              rows={bookedCinemaRooms.map((item) => {
                return {
                  id: item.id,
                  start_date: item.start_date,
                  end_date: item.end_date,
                  duration: "",
                  status: "",
                  // created_time: item.created_at.replace("T", " ").slice(0, -11),
                  delete: "",
                };
              })}
              width={630}
              status={bookedCinemaRooms.status}

            />

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cinema;
