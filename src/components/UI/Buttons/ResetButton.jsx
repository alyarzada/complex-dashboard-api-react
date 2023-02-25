import { Button } from "@mui/material";

const DefaultButton = ({
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
          ? "dark:bg-[#C9B26D] w-full dark:shadow-lg dark:shadow-logoColor/40  dark:hover:shadow-logoColor/50"
          : variant === "outlined"
          ? "dark:border dark:border-[#2B3759] dark:hover:border-logoColor dark:shadow-white/80 dark:text-text1"
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

export default DefaultButton;
