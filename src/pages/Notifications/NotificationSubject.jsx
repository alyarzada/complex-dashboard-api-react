import { Button, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../app/Slicers/modals";
import { useTranslation } from "react-i18next";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const NotificationType = ({ row: { type, subject, content }, row }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const notificationModal = (
    <>
      <Stack direction="row" spacing={2}>
        {type === "info" ? (
          <InfoOutlinedIcon className="text-text1" />
        ) : type === "payment" ? (
          <PaymentOutlinedIcon className="text-text1" />
        ) : type === "invoice" ? (
          <ReceiptOutlinedIcon className="text-text1" />
        ) : null}
        <Typography className="mb-8 text-text1">{subject}</Typography>
      </Stack>
      <Typography className="mb-4 text-text1">{content}</Typography>
      <Button
        variant="contained"
        className="bg-yellow-600 capitalize"
        onClick={() => navigate("/")}
      >
        {t("Detail information")}
      </Button>
    </>
  );

  const openModal = () => {
    dispatch(
      setModal({
        isOpen: true,
        children: notificationModal,
        className: "h-fit",
        status: "",
        title: "",
        data: {
          type,
          subject,
          content,
        },
      })
    );
  };

  return (
    <Button className="capitalize text-text1" onClick={openModal}>
      {subject}-{content}
    </Button>
  );
};

export default NotificationType;
