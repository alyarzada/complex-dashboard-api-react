import { Button } from "@mui/material";

const HoverLogoButton = ({
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
          ? " "
          : variant === "outlined"
          ? "dark:border dark:border-[#2B3759] dark:hover:border-logoColor dark:hover:bg-logoColor dark:shadow-white/80 dark:text-text1 dark:hover:text-[white]"
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

export default HoverLogoButton;
