import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
// redux
import { useDispatch, useSelector } from "react-redux";
import { changeDeletedCinemaStatus } from "../../../../app/Slicers/dataFetching/cinema";
import { deleteBookedCinemaRoom } from "../../../../app/Slicers/dataFetching/cinema";
// component
import { setDialogModal } from "../../../../app/Slicers/localStates/modals";

const DeleteBookedCinemaRoom = ({ params }) => {
  const { deletedCinemaStatus } = useSelector((state) => state.cinema);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (deletedCinemaStatus === "succeeded") {
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
        dispatch(changeDeletedCinemaStatus("idle"));
      }, 1000);
    }
  }, [deletedCinemaStatus]);

  return (
    <>
      <IconButton
        onClick={() =>
          dispatch(
            setDialogModal({
              loadingData: deletedCinemaStatus,
              isOpen: true,
              handleAgree: () => {
                dispatch(
                  deleteBookedCinemaRoom({
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

export default DeleteBookedCinemaRoom;
