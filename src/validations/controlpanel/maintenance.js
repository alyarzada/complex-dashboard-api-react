import * as Yup from "yup";

export const MaintenanceSchema = Yup.object().shape({
  title: Yup.string().required(),
  message: Yup.string().required(),
  selection: Yup.object()
    .shape({
      label: Yup.string(),
      value: Yup.string(),
    })
    .nullable()
    .required("This field is required."),
});
