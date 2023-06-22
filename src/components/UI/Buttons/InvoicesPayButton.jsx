import { Button } from "@mui/material";

const InvoicesPayButton = ({
  variant,
  children,
  onClick,
  startIcon,
  type = "button",
}) => {
  return (
    <Button
      className={`capitalize ${
        variant === "contained"
          ? "dark:bg-rose-500 dark:hover:bg-rose-400"
          : variant === "outlined"
          ? " "
          : ""
      }`}
      onClick={onClick}
      sx={{ boxShadow: 3 }}
      variant={variant}
      startIcon={startIcon}
      type={type}
    >
      {children}
    </Button>
  );
};

export default InvoicesPayButton;
