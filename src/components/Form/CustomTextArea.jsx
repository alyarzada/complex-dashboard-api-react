import React from "react";
import { TextareaAutosize } from "@mui/material";

const CustomTextArea = ({ label, name, placeholder, ...props }) => {
  return (
    <TextareaAutosize
      className="w-full bg-transparent border border-slate-50 rounded p-3 font-semibold text-textDark2 dark:text-text2 text-[16px]"
      aria-label="minimum height"
      label={label}
      name={name}
      minRows={3}
      placeholder={placeholder}
    />
  );
};

export default CustomTextArea;
