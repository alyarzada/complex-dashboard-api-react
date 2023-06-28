import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
// redux
import { useDispatch, useSelector } from "react-redux";
// component
import { setDialogModal } from "../../../app/Slicers/modals";

const DeleteBookedMassage = ({ params }) => {
  const { deletedMassageStatus } = useSelector((state) => state.massage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (deletedMassageStatus === "succeeded") {
      toast.success(t("Deleted"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        dispatch(
          setDialogModal((prev) => {
            return {
              ...prev,
              isOpen: false,
            };
          })
        );
        dispatch(changeDeletedMassageStatus("idle"));
      }, 1000);
    }
  }, [deletedMassageStatus]);

  return (
    <>
      <IconButton
        onClick={() =>
          dispatch(
            setDialogModal({
              loadingData: deletedMassageStatus,
              isOpen: true,
              handleAgree: () => {
                dispatch(
                  deleteMassageReservation({
                    id: params.id,
                    token: Cookies.get("token"),
                  })
                );
              },
            })
          )
        }
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default DeleteBookedMassage;
