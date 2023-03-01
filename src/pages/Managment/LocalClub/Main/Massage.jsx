import { useState, useEffect } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { useScrollToUp } from "../../../../hooks/useScrollToUp";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import { format } from "date-fns";
import { LoadingButton } from "@mui/lab";
import "react-toastify/dist/ReactToastify.css";

// components
import Header from "../../../../components/UI/Header";
import Calendar from "./Calendar";
import DeleteBookedMassage from "../Components/DeleteBookedMassage";
import CustomTextField from "../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../components/Form/CustomSelect";
import { BronMassageSchema } from "../../../../validations/leisureclub/massageVal";
import CustomDataGrid from "../../../../components/UI/CustomDataGrid"

// redux;
import { useDispatch, useSelector } from "react-redux";
import {
  bookMassage,
  getBookedMassage,
} from "../../../../app/Slicers/leisure/massage";
import { changeBookedMassageStatus } from "../../../../app/Slicers/leisure/massage";

// icons
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import WomanIcon from "@mui/icons-material/Woman";
import { setModal } from "../../../../app/Slicers/modals";
import CustomDatePicker from "../../../../components/Form/CustomDatePicker";
import CustomDigitalTimePicker from "../../../../components/Form/CustomDigitalTimePicker";
import DefaultButton from "../../../../components/UI/Buttons/DefaultButton";
import BackButton from "../../../../components/UI/Buttons/BackButton";
import SuccessButton from "../../../../components/UI/Buttons/SuccessButton";

//multiselect
const optionsMassage = [
  {
    label: "General Massage -90dəq. -85AZN",
    value: "1",
  },
  {
    label: "General Massage -60dəq. -55AZN",
    value: "2",
  },
  {
    label: "General Massage -45dəq. -50AZN",
    value: "3",
  },
  { label: "Sport Massage -60dəq. -60AZN", value: "4" },
  {
    label: "Head and Shoulders Massage -30dəq. -40AZN",
    value: "16",
  },
  {
    label: "Anti-Cellulite Massage -30dəq. -40AZN",
    value: "17",
  },
  {
    label: "Facial Massage -60dəq. -80AZN",
    value: "18",
  },
  {
    label: "Anti-aging facial massage - 90 dəq. - 100 AZN",
    value: "19",
  },
];

const columns = [
  {
    field: "start_date",
    headerName: "Başlama vaxtı",
    width: 200,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "end_date",
    headerName: "Bitmə vaxtı",
    width: 200,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "duration",
    headerName: "Müddət",
    width: 120,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "therapist",
    headerName: "Terapevt",
    width: 200,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "created_at",
    headerName: "Yaradıldı",
    width: 158,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
  },
  {
    field: "delete",
    headerName: "Sil",
    width: 50,
    headerClassName: "data-grid-header",
    cellClassName: "data-grid-cell",
    renderCell: (params) => {
      return <DeleteBookedMassage params={params} />;
    },
  },
];

const masseurs = [
  { label: "Yuliya", value: "Yuliya" },
  { label: "Sabina", value: "Sabina" },
];

const Massage = () => {
  useScrollToUp();
  const [eventData, setEventData] = useState(null);
  const [date, setDate] = useState(null);
  const [defaultDate, setDefaultDate] = useState(null);
  const [masseur, setMasseur] = useState({ value: "2", name: "Yuliya" });
  const { bookedMassage, bookMassageStatus } = useSelector(
    (state) => state.massage
  );
  const { modal } = useSelector((state) => state.modals);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const today = new Date();

  const handleEventClick = (e) => {
    setEventData(e.event._def);
  };

  const handleDateClick = (e) => {
    setDefaultDate(
      format(e.date, "yyyy-MM-dd") + " " + format(new Date(), "HH:mm")
    );
    setDate(e.date);
  };

  useEffect(() => {
    if (eventData) {
      dispatch(
        setModal({
          isOpen: true,
          children: eventModal,
          data: eventData,
          className: "h-fit",
        })
      );
    }
  }, [eventData]);

  useEffect(() => {
    dispatch(
      setModal({
        ...modal,
        status: bookMassageStatus,
        className: "h-fit",
      })
    );
  }, [bookMassageStatus]);

  useEffect(() => {
    if (date >= today) {
      dispatch(
        setModal({
          isOpen: true,
          children: bronModal,
          status: bookMassageStatus,
          changeStatus: () => {
            dispatch(changeBookedMassageStatus("idle"));
          },
          data: {
            masseur,
          },
          className: "h-fit",
        })
      );
    }
  }, [date]);

  useEffect(() => {
    dispatch(getBookedMassage(Cookies.get("token")));
  }, []);
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
      key: "therapist",
      label: "Terapevt",
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
        return <DeleteBookedMassage params={data} />;
      },
    },
  ];
  const bronModal = (
    <Box>
      <Formik
        initialValues={{
          start_date: "",
          start_time: "",
          therapist: "Yuliya",
          massage: "",
          message: "",
        }}
        validationSchema={BronMassageSchema}
        onSubmit={(values) => {
          const editedValues = {
            ...values,
            start_date: values.start_date.replace("T", ", "),
          };
          dispatch(
            bookMassage({
              data: editedValues,
              token: Cookies.get("token"),
            })
          );
        }}
      >
        {() => (
          <Form>
            {/* <NewCustomTimePicker
              label="Bronlama vaxti"
              name="start_date"
              defaultValue={defaultDate ? defaultDate : ""}
            /> */}
            {/* <CustomTextField
              label="Terapevt"
              name="therapist"
              masseur={masseur}
              value={masseur.name}
              disabled
              massage
            /> */}
            <CustomDatePicker
              errorMessage="Zəhmət olmasa bronlama tarixini seçin"
              name="start_date"
              label="Bronlama tarixi"
              containerClassName="w-full mb-6"
              className="w-full"
            />
            <CustomDigitalTimePicker
              label="Bronlama vaxtı"
              name="start_time"
              containerClassName="w-full mb-6"
              className="w-full"
              errorMessage="Zəhmət olmasa, bronlanma vaxtını seçin"
            />
            <CustomSelect
              label="Terapevt"
              name="therapist"
              options={masseurs}
              defaultValue="Yuliya"
              noTranslation
              onlyValue
              containerClassName="mb-6 z-[10000] m-0"
            />
            <CustomSelect
              label="Masaj"
              options={optionsMassage}
              name="massage"
              defaultValue="1"
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
              loading={bookMassageStatus === "loading"}
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
    <Box>
      <Header
        currentPage={{ title: "Massage", icon: AdminPanelSettingsOutlinedIcon }}
      />
      <Box className="rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="py-6 px-6">
          <Box className="flex justify-between mb-6">
            <Box>
              <Button
                onClick={() => setMasseur({ value: "2", name: "Yuliya" })}
                className={`${
                  masseur.value == 2 ? "bg-slate-300" : "bg-logoColor"
                } mr-2 btn-masseur capitalize text-stone-800 shadow-md shadow-logoColor/50`}
                startIcon={<WomanIcon />}
              >
                Yuliya
              </Button>
              <Button
                onClick={() => setMasseur({ value: "14", name: "Sabina" })}
                className={`${
                  masseur.value == "14" ? "bg-slate-300" : "bg-logoColor"
                } btn-masseur capitalize text-stone-800 shadow-md shadow-logoColor/50`}
                startIcon={<WomanIcon />}
              >
                Sabina
              </Button>
            </Box>
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
            events={bookedMassage.map((item) => {
              return {
                title: `${item.start_date.substring(10).slice(0, -3)} ${
                  item?.therapist
                }`,
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
          />

          <Box className="mb-10">
            {/* <DataGrid
              sx={{
                align: "center",
              }}
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
              rows={bookedMassage.map((item) => {
                console.log(
                  item?.created_at
                    ? item?.created_at?.replace("T", " ").slice(0, -11)
                    : null
                );
                return {
                  id: item.id,
                  start_date: item.start_date,
                  end_date: item.end_date,
                  duration: "",
                  therapist: item.therapist,
                  status: item.status,
                  // created_time: item?.created_at
                  //   ? item?.created_at?.replace("T", " ").slice(0, -11)
                  //   : null,
                  created_time: "",
                  delete: "",
                };
              })}
              columns={columns}
            /> */}
            <CustomDataGrid
              desktopColumns={columns}
              mobileColumns={mobileColumns}
              rows={bookedMassage.map((item) => {
                console.log(
                  item?.created_at
                    ? item?.created_at?.replace("T", " ").slice(0, -11)
                    : null
                );
                return {
                  id: item.id,
                  start_date: item.start_date,
                  end_date: item.end_date,
                  duration: "",
                  therapist: item.therapist,
                  status: item.status,
                  // created_time: item?.created_at
                  //   ? item?.created_at?.replace("T", " ").slice(0, -11)
                  //   : null,
                  created_time: "",
                  delete: "",
                };
              })}
              width={630}
              status={bookedMassage.status}

            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Massage;
