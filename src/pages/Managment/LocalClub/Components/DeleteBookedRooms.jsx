import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteBookedRoom } from "../../../../app/Slicers/leisure/meetingRoom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeDeleteBookedRoomStatus } from "../../../../app/Slicers/leisure/meetingRoom";
import { setDialogModal } from "../../../../app/Slicers/modals";

const DeleteBookedRooms = ({ params }) => {
  const { deleteBookedRoomStatus } = useSelector((state) => state.meetingRoom);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (deleteBookedRoomStatus === "succeeded") {
      console.log("hellooooo");
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
        dispatch(changeDeleteBookedRoomStatus("idle"));
      }, 1000);
    }
  }, [deleteBookedRoomStatus]);

  return (
    <IconButton
      onClick={() => {
        dispatch(
          setDialogModal({
            loadingData: deleteBookedRoomStatus,
            isOpen: true,
            handleAgree: () => {
              dispatch(
                deleteBookedRoom({
                  id: params.id,
                  token: Cookies.get("token"),
                })
              );
            },
          })
        );
        console.log("aye click");
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteBookedRooms;
