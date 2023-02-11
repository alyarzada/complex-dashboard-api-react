import React, { useState } from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const ActionButtons = () => {
  const params = useParams();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    // setOpenDialog(true);
    console.log("open");
  };

  const openSnackHandler = () => {
    console.log("snack");
  };

  return (
    <Box>
      <Tooltip title="View room details">
        <IconButton onClick={() => console.log(params)}>
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this room">
        <IconButton
          onClick={() => {
            handleOpen();
          }}
        >
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this room">
        <IconButton
          onClick={() => {
            setOpenDialog({
              isOpen: true,
              message: "Bu taskı silmək istədiyinizə əminsiniz?",
            });
            // openSnackHandler(SlideTransition);
          }}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ActionButtons;
