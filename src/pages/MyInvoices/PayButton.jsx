import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PayButton = ({ params, children }) => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    await params.api.selectRow();
    navigate("/myinvoice/payment");
  };

  return (
    <Button
      variant="contained"
      className="bg-red-500 p-1 capitalize"
      onClick={() => {
        clickHandler();
      }}
    >
      {children}
    </Button>
  );
};

export default PayButton;
