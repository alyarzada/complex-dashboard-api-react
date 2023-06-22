import * as Yup from "yup";

export const ServicesSchema = Yup.object().shape({
  title: Yup.string().required(),
  message: Yup.string().required(),
});
