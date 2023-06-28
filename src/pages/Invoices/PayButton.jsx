import { useNavigate } from "react-router-dom";
import InvoicesPayButton from "../../components/UI/Buttons/InvoicesPayButton";

const PayButton = ({ params, children }) => {
  const navigate = useNavigate();

  const clickHandler = async () => {
    await params.api.selectRow();
    navigate("/myinvoice/payment");
  };

  return (
    <InvoicesPayButton
      variant="contained"
      onClick={() => {
        clickHandler();
      }}
    >
      {children}
    </InvoicesPayButton>
  );
};

export default PayButton;
