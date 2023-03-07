import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const DefaultButton = ({
  variant,
  children,
  onClick,
  startIcon,
  loading,
  type = "button",
}) => {
  return (
    <>
      {loading ? (
        <LoadingButton
          className="capitalize bg-[#09BB04] shadow-lg shadow-[#18E700]/60 hover:shadow-[#18E700]/80"
          onClick={onClick}
          variant={variant}
          startIcon={startIcon}
          type={type}
          loading={loading}
        >
          {children}
        </LoadingButton>
      ) : (
        <Button
          className={`capitalize ${
            variant === "contained"
              ? "bg-[#178803] shadow-lg shadow-[#18E700]/40 hover:shadow-[#18E700]/60 text-[#fff]"
              : variant === "outlined"
              ? "shadow-lg shadow-[#18E700]/60 hover:shadow-[#18E700]/80"
              : ""
          }`}
          onClick={onClick}
          variant={variant}
          startIcon={startIcon}
          type={type}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default DefaultButton;
