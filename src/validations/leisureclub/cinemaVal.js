import * as Yup from "yup";

export const BronCinemaSchema = Yup.object().shape({
  start_date: Yup.string().required(),
  duration: Yup.string().required(),
  number_of_residents: Yup.string().required(),
  number_of_guest: Yup.string().required(),
});
