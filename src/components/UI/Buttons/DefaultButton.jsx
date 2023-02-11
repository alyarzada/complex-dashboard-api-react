import React from "react";
import {Button} from '@mui/material'

const DefaultButton = ({variant, children, onClick, startIcon, type='button'}) => {
  return (
    <Button
      className={`capitalize ${variant==='contained' ?  "dark:bg-[#14213D] dark:shadow-lg dark:shadow-logoColor/40  dark:hover:shadow-logoColor/50" : variant === 'outlined' ? "dark:border dark:border-[#2B3759] dark:hover:border-logoColor dark:text-text1" : ""}`} 
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      type={type}
    >
      {children}
    </Button>
  );
};

export default DefaultButton;
