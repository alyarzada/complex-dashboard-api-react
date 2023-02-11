import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// components
import CustomModal from "../../../../../components/UI/CustomModal";
import CustomTextField from "../../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../../components/Form/CustomSelect";
import CustomDateTimePicker from "../../../../../components/Form/CustomDateTimePicker";

// redux
import {
  bookMassage,
  changeBookedMassageStatus,
} from "../../../../../app/Slicers/leisure/massage";
import { useDispatch, useSelector } from "react-redux";

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

const BronModal = ({ setOpenModal, guests, setGuests, masseur }) => {
  const { bookMassageStatus } = useSelector((state) => state.massage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleGuestDelete = (index) => {
    const list = [...guests];
    list.splice(index, 1);
    setGuests(list);
  };

  useEffect(() => {
    if (bookMassageStatus === "succeeded") {
      console.log("successsssssssssssss");
      toast.success(t("Your application has been sent successfully !"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        setOpenModal(false);
        dispatch(changeBookedMassageStatus("idle"));
      }, 1000);
    }

    if (bookMassageStatus === "failed") {
      toast.error(t("Reservations are possible one week in advance."), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        dispatch(changeBookedMassageStatus("idle"));
      }, 1000);
    }
  }, [bookMassageStatus]);

  return (
    <CustomModal
      title="Yeni bronlama"
      handleClose={() => setOpenModal(false)}
      bron
      className="h-fit"
    >
      <Box>
        <Formik
          initialValues={{
            start_date: "",
            therapist: "",
            massage: "",
            message: "",
          }}
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
              <CustomDateTimePicker
                label="Bronlama vaxti"
                name="start_date"
                calendar
                noTranslation
                onlyValue
              />
              <CustomTextField
                label="Terapevt"
                name="therapist"
                masseur={masseur}
                value={masseur.name}
                disabled
                massage
              />
              <CustomSelect
                label="Masaj"
                options={optionsMassage}
                name="massage"
                onlyValue
                noTranslation
              />

              <CustomTextField label="Şərhiniz" name="message" multiline />
              <Box className="flex gap-x-2 my-3 justify-end">
                <Button
                  onClick={() => setOpenModal(false)}
                  type="button"
                  variant="outlined"
                  color="error"
                  className="capitalize"
                >
                  {t("Close")}
                </Button>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="success"
                  className="capitalize"
                  loading={bookMassageStatus === "loading"}
                >
                  {t("Save")}
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </CustomModal>
  );
};

export default BronModal;
