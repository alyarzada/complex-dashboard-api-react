import * as Yup from "yup";

export const parkingCardSchema = Yup.object().shape({
  car_number: Yup.string()
    .required()
    .matches(
      /^[0-9]{2}-[A-Z]{2}-[0-9]{3}$/,
      "Must Contain Valid Car Number exp: (10-CA-405)"
    ),
  parking_place_number: Yup.string()
    .required()
    .matches(/^[A-Z][0-9]$/, "Must Contain Valid Car Number exp: (10-CA-405)"),
  count: Yup.number().integer().required(),
  message: Yup.string().required(),
});
