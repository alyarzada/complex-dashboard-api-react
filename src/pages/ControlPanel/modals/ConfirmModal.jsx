import React, { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";
import { destroyModal, destroyAllModals } from "../../../app/Slicers/modals";
import { sendConfirmRequest } from "../../../app/Slicers/requests";
import { changeConfirmStatus } from "../../../app/Slicers/requests";
import CheckIcon from "@mui/icons-material/Check";
import ReplyIcon from "@mui/icons-material/Reply";
import Cookies from "js-cookie";

const ConfirmModal = ({ modal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { confirmStatus } = useSelector((state) => state.requests);

  const confirmRequestHandler = (modal) => {
    dispatch(
      sendConfirmRequest({
        body: {
          requestform_type: modal.data.requestType,
          requestform_department: [modal.data.requestDepartment],
          requestform_dep_employess: [1629],
          title: "Əməkdaşın çağrılması üçün müraciət",
          message: "Əməkdaşın çağrılması üçün müraciət",
        },
        token: Cookies.get("token"),
      })
    );
  };

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
      <Typography className="text-sm p-3 bg-yellow-200 mb-4 text-slate-900 rounded">
        {t(["Confirm the request to invite the employee."])}
      </Typography>
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
          color="success"
          variant="contained"
          className="capitalize"
          startIcon={<CheckIcon />}
          onClick={() => {
            confirmRequestHandler(modal);
          }}
        >
          {t("Confirm")}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default ConfirmModal;
