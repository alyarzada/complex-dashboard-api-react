import * as Yup from "yup";

export const BronMassageSchema = Yup.object().shape({
  start_date: Yup.string().required(),
  start_time: Yup.string().required(),
  therapist: Yup.string().required(),
  massages: Yup.string().required(),
});
