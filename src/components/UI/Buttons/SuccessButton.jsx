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
              ? "bg-[#09BB04] shadow-lg shadow-[#18E700]/60 hover:shadow-[#18E700]/80"
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
