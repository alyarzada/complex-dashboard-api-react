import { Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import CustomModal from "../../../../../components/UI/CustomModal";
import CustomTextField from "../../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../../components/Form/CustomSelect";
import CustomDateTimePicker from "../../../../../components/Form/CustomDateTimePicker";

import { bookMassage } from "../../../../../app/Slicers/leisure/massage";
import Cookies from "js-cookie";

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

const DateModal = ({
  setOpenDateModal,
  setOpenModal,
  guests,
  setGuests,
  dateDefaultValue,
  masseur,
}) => {
  const handleGuestDelete = (index) => {
    const list = [...guests];
    list.splice(index, 1);
    setGuests(list);
  };

  const dispatch = useDispatch();

  return (
    <CustomModal
      handleClose={() => setOpenDateModal(false)}
      title="Yeni bronlama"
      className="h-fit"
      bron
    >
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
          setOpenDateModal(false);
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
                Bağla
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="capitalize"
              >
                Yadda saxla
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default DateModal;
