import React from "react";
import {Button} from '@mui/material'

const DefaultButton = ({variant, children, onClick, startIcon, type='button'}) => {
  return (
    <Button
      className={`capitalize ${variant==='contained' ?  "bg-[#A91B0D] hover:bg-[#900603] p-1" : variant === 'outlined' ? "dark:border dark:border-[#2B3759] dark:hover:border-logoColor dark:text-text1" : ""}`} 
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
