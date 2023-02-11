import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/UI/Buttons/BackButton";

const PayButton = ({ params, children }) => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    await params.api.selectRow();
    navigate("/myinvoice/payment");
  };

  return (
    <BackButton
      variant="outlined"
      onClick={() => {
        clickHandler();
      }}
    >
      {children}
    </BackButton>
  );
};

export default PayButton;
