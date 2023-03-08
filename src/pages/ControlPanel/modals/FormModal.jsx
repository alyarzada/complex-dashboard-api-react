import React, { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { destroyModal, destroyAllModals } from "../../../app/Slicers/modals";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomSelect from "../../../components/Form/CustomSelect";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  sendFormRequest,
  sendCardRequest,
  changeConfirmStatus,
} from "../../../app/Slicers/requests";
import SendIcon from "@mui/icons-material/Send";
import ReplyIcon from "@mui/icons-material/Reply";
import { parkingCardSchema } from "../../../validations/parkingCardValidation";
import { ServicesSchema } from "../../../validations/controlpanel/services";
import { MaintenanceSchema } from "../../../validations/controlpanel/maintenance";
import CustomFile from "../../../components/Form/CustomFile";
import Cookies from "js-cookie";

const electricianServices = [
  {
    label: "Other",
    value: "Digər",
  },
  {
    label: "An electrician",
    value: "Elektrik",
  },
  {
    label: "Mechanic",
    value: "Mexanik",
  },
];

const accessCardsData = [
  {
    label: "New card",
    value: 1,
  },
  {
    label: "Card lost",
    value: 2,
  },
  {
    label: "Reserve copy",
    value: 3,
  },
];

const FormModal = ({ modal }) => {
  const { confirmStatus } = useSelector((state) => state.requests);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (confirmStatus === "succeeded") {
      toast(t("Your application has been sent successfully !"));

      setTimeout(() => {
        dispatch(destroyAllModals());
        dispatch(changeConfirmStatus("idle"));
      }, 1000);
    }
  }, [confirmStatus, dispatch]);

  return (
    <Box>
      {modal.data.requestType === "rtype" &&
      modal.data.requestDepartment === "Parking card" ? (
        <Formik
          initialValues={{
            rtype: modal.data.requestDepartment,
            reason: null,
            car_number: null,
            parking_place_number: null,
            message: "",
            count: 1,
          }}
          onSubmit={(values) => {
            dispatch(
              sendCardRequest({
                body: values,
                token: Cookies.get("token"),
              })
            );
          }}
          validationSchema={parkingCardSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <CustomSelect
                name="reason"
                label={t("Reason")}
                options={accessCardsData}
              />
              <CustomTextField
                className="mb-4"
                number
                name="count"
                label={t("Count")}
              />
              {errors.count && touched.count ? (
                <Typography component="span" className="text-[#f44336] text-xs">
                  Bu xana rəqəmdən ibarət olmalıdır
                </Typography>
              ) : null}
              <CustomTextField
                className="mb-4"
                name="car_number"
                label={t("Car number")}
              />
              {errors.car_number && touched.car_number ? (
                <Typography
                  component="span"
                  className="text-[#f44336] text-xs mb-4 block"
                >
                  Zəhmət olmasa etibarlı avtomobil nömrəsi qeyd edin
                </Typography>
              ) : null}
              <CustomTextField
                className="mb-4"
                name="parking_place_number"
                label={t("Parking place number")}
              />
              {errors.parking_place_number && touched.parking_place_number ? (
                <Typography
                  component="span"
                  className="text-[#f44336] text-xs mb-4 block"
                >
                  Bu xana rəqəmdən ibarət olmalıdır
                </Typography>
              ) : null}
              <CustomTextField
                multiline
                className="mb-1"
                name="message"
                label={t("Your request")}
                rows={6}
              />
              {errors.message && touched.message ? (
                <Typography
                  component="span"
                  className="text-[#f44336] text-xs mb-4 block"
                >
                  Bu xana boş qala biməz
                </Typography>
              ) : null}
              <Stack direction="row" justifyContent="end" spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  className="capitalize"
                  startIcon={<ReplyIcon />}
                  onClick={() => {
                    dispatch(destroyModal());
                  }}
                >
                  {t("Back")}
                </Button>
                <LoadingButton
                  loadingPosition="start"
                  loading={confirmStatus === "loading"}
                  variant="contained"
                  color="success"
                  startIcon={<SendIcon />}
                  className="capitalize"
                  type="submit"
                >
                  {t("Send")}
                </LoadingButton>
              </Stack>
            </Form>
          )}
        </Formik>
      ) : modal.data.requestType === "rtype" &&
        modal.data.requestDepartment === "Access card" ? (
        <Formik
          initialValues={{
            reason: null,
            rtype: modal.data.requestDepartment,
            count: 1,
            message: "",
          }}
          onSubmit={(values) => {
            dispatch(
              sendCardRequest({
                body: values,
                token: Cookies.get("token"),
              })
            );
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <CustomSelect
                name="reason"
                label={t("Reason")}
                options={accessCardsData}
              />
              <CustomTextField
                name="count"
                label={t("Count")}
                number={modal.data.title === "Access" ? true : false}
              />
              <CustomTextField
                multiline
                name="message"
                label={t("Your request")}
                rows={6}
              />
              {errors.message && touched.message ? (
                <Typography component="span" className="text-[#f44336] text-xs">
                  Bu xana boş qala biməz
                </Typography>
              ) : null}
              <Stack direction="row" justifyContent="end" spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  className="capitalize"
                  startIcon={<ReplyIcon />}
                  onClick={() => {
                    dispatch(destroyModal());
                  }}
                >
                  {t("Back")}
                </Button>
                <LoadingButton
                  loadingPosition="start"
                  loading={confirmStatus === "loading"}
                  variant="contained"
                  color="success"
                  className="capitalize"
                  type="submit"
                  startIcon={<SendIcon />}
                >
                  {t("Send")}
                </LoadingButton>
              </Stack>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={
            modal.data.requestDepartment === 6
              ? {
                  requestform_type: modal.data.requestType,
                  requestform_department: [modal.data.requestDepartment],
                  requestform_dep_employess: [1629],
                  title: "",
                  message: "",
                  selection: "",
                }
              : {
                  requestform_type: modal.data.requestType,
                  requestform_department: [modal.data.requestDepartment],
                  requestform_dep_employess: [1629],
                  title: "",
                  message: "",
                }
          }
          onSubmit={(values) => {
            dispatch(
              sendFormRequest({
                body: values,
                token: Cookies.get("token"),
              })
            );
          }}
          validationSchema={
            modal.data.requestDepartment === 6
              ? MaintenanceSchema
              : ServicesSchema
          }
        >
          {({ errors, touched }) => (
            <Form>
              {modal.data.requestDepartment === 6 ? (
                <CustomSelect
                  name="selection"
                  label={t("Technical service type")}
                  options={electricianServices}
                  errorMessage="Zəhmət olmasa xidmət növünü seçin"
                />
              ) : null}
              <CustomTextField
                className="mb-4"
                name="title"
                label={t("Title")}
              />
              {errors.title && touched.title ? (
                <Typography
                  component="span"
                  className="text-[#f44336] text-xs -mt-2 mb-4 block"
                >
                  Zəhmət olmasa, başlıq daxil edin
                </Typography>
              ) : null}
              <CustomTextField
                multiline
                name="message"
                label={t("Your request")}
                rows={6}
                className="mb-4"
              />
              {errors.message && touched.message ? (
                <Typography
                  component="span"
                  className="text-[#f44336] text-xs -mt-2 mb-4 block"
                >
                  Zəhmət olmasa, müraciətinizi daxil edin
                </Typography>
              ) : null}
              <Stack direction="row" justifyContent="end" spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  className="capitalize"
                  startIcon={<ReplyIcon />}
                  onClick={() => {
                    dispatch(destroyModal());
                  }}
                >
                  {t("Back")}
                </Button>
                <LoadingButton
                  loadingPosition="start"
                  loading={confirmStatus === "loading"}
                  variant="contained"
                  color="success"
                  className="capitalize"
                  type="submit"
                  startIcon={<SendIcon />}
                >
                  {t("Send")}
                </LoadingButton>
              </Stack>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default FormModal;
