import React from "react";
import {Button} from '@mui/material'

const DefaultButton = ({variant, children, onClick, startIcon, margin = 'mb-4',  type='button'}) => {
  return (
    <Button
      className={`capitalize ${variant==='contained' ?  `bg-[#A91B0D] shadow-lg shadow-[#FF1818]/70 hover:shadow-[#FF1818]/90 px-4 ${margin}` : variant === 'outlined' ? "text-[#FF3333] border-[#FE0000] shadow-lg shadow-[#FF3333]/50 hover:shadow-[#FF3333]/70" : ""}`} 
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
