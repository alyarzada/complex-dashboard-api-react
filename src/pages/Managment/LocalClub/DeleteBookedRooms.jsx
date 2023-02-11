import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteBookedRoom } from "../../../app/Slicers/leisure/meetingRoom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import CustomDialogModal from "../../../components/UI/CustomDialogModal";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeDeleteBookedRoomStatus } from "../../../app/Slicers/leisure/meetingRoom";

const DeleteBookedRooms = ({ params }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { deleteBookedRoomStatus } = useSelector((state) => state.meetingRoom);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (deleteBookedRoomStatus === "succeeded") {
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
        setOpenDialog(false);
        dispatch(changeDeleteBookedRoomStatus("idle"));
      }, 3000);
    }
  }, [deleteBookedRoomStatus]);

  const handleAgree = () => {
    dispatch(
      deleteBookedRoom({
        id: params.id,
        token: Cookies.get("token"),
      })
    );
  };

  return (
    <>
      <IconButton onClick={() => setOpenDialog(true)}>
        <DeleteIcon />
      </IconButton>
      <CustomDialogModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleAgree={handleAgree}
        question="Please confirm your request"
        loadingData={deleteBookedRoomStatus}
      />
    </>
  );
};

export default DeleteBookedRooms;