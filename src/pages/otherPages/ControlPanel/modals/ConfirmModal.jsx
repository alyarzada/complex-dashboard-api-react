import { useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { sendConfirmRequest } from "../../../../services/requestsReqs";
import { destroyModal, destroyAllModals } from "../../../../app/Slicers/modals";

import LoadingButton from "@mui/lab/LoadingButton";
import CheckIcon from "@mui/icons-material/Check";
import ReplyIcon from "@mui/icons-material/Reply";

import "react-toastify/dist/ReactToastify.css";
import "../styles/style.css";

const ConfirmModal = ({ modal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { confirmStatus } = useSelector((state) => state.requests);
  const { mutate } = useMutation({ mutationFn: sendConfirmRequest });

  const confirmReqData = {
    requestform_type: modal.data.requestType,
    requestform_department: [modal.data.requestDepartment],
    requestform_dep_employess: [1629],
    title: "Əməkdaşın çağrılması üçün müraciət",
    message: "Əməkdaşın çağrılması üçün müraciət",
  };

  useEffect(() => {
    if (confirmStatus === "succeeded") {
      toast(t("Your application has been sent successfully !"));

      setTimeout(() => {
        dispatch(destroyAllModals());
        // dispatch(changeConfirmStatus("idle"));
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
            mutate(confirmReqData);
          }}
        >
          {t("Confirm")}
        </LoadingButton>
      </Stack>
    </Box>
  );
};

export default ConfirmModal;
