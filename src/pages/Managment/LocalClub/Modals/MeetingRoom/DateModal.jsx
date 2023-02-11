import CustomModal from "../../../../../components/UI/CustomModal";
import CustomTextField from "../../../../../components/Form/CustomTextField";
import CustomSelect from "../../../../../components/Form/CustomSelect";
import CustomDateTimePicker from "../../../../../components/Form/CustomDateTimePicker";

import { Box, Button, IconButton } from "@mui/material";
import { Formik, Form, FieldArray } from "formik";

// icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { bookRoom } from "../../../../../app/Slicers/leisure/meetingRoom";

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

const DateModal = ({
  setOpenDateModal,
  guests,
  setGuests,
  dateDefaultValue,
}) => {
  const dispatch = useDispatch();
  const handleGuestDelete = (index) => {
    const list = [...guests];
    list.splice(index, 1);
    setGuests(list);
  };

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
          duration: "",
          meeting_room: "",
          title: "",
          message: "",
          guests: [],
        }}
        onSubmit={(values) => {
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
          setOpenDateModal(false);
        }}
      >
        {() => (
          <Form>
            <CustomDateTimePicker
              label="Bronlama vaxti"
              name="start_date"
              defaultValue={dateDefaultValue}
              calendar
            />
            <CustomSelect
              label="Bronlama müddəti"
              options={optionsTime}
              name="duration"
              className="mb-0"
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
            <Box className="mb-3 bg-blue-500 rounded text-gray-200 p-3 ">
              <AccountCircleIcon className="mr-1 h-4 w-4" />
              Qonaqlar
            </Box>
            <FieldArray name="guests">
              {({ insert, remove, push }) => (
                <Box className="flex flex-col ">
                  {guests.map((item, index) => (
                    <Box key={index} className="flex items-center m-2 ">
                      <CustomTextField
                        label="Qonağın tam adı"
                        name={`guests.${index}`}
                        className="mb-0 flex-1"
                        variant="outlined"
                      />
                      {index === 0 && (
                        <IconButton
                          onClick={() => setGuests([...guests, { guest: "" }])}
                        >
                          <AddOutlinedIcon />
                        </IconButton>
                      )}
                      {index !== 0 && (
                        <IconButton onClick={() => handleGuestDelete(index)}>
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </FieldArray>
            <Box className="flex gap-x-2 my-3 justify-end">
              <Button
                onClick={() => setOpenDateModal(false)}
                type="button"
                variant="outlined"
                color="error"
                className="capitalize"
              >
                Ləğv et
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="capitalize"
              >
                Yarat
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default DateModal;