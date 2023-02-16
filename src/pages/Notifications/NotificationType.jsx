import { Button, Stack, Typography, Checkbox } from "@mui/material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../app/Slicers/modals";
import { useTranslation } from "react-i18next";


const NotificationType = ({ row: { type, subject, content } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <>
    <Checkbox {...label} />
    <Button
      className={`capitalize italic  ${
        type === "info"
          ? "text-logoColor"
          : type === "payment"
          ? "text-green-500"
          : type === "invoice"
          ? "text-rose-500"
          : "text-text1"
      } `}
      onClick={openModal}
      startIcon={
        type === "info" ? (
          <InfoOutlinedIcon />
        ) : type === "payment" ? (
          <PaymentOutlinedIcon />
        ) : type === "invoice" ? (
          <ReceiptOutlinedIcon />
        ) : null
      }
    >
      {type === "info"
        ? "Məlumat"
        : type === "payment"
        ? "Ödəniş"
        : type === "invoice"
        ? "Faktura"
        : null}
    </Button>
    </>
  );
};

export default NotificationType;
