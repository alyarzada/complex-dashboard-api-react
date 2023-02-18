import { Box, Tooltip, IconButton } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";

const ActionButtons = () => {
  return (
    <Box>
      <Tooltip title="View room details">
        <IconButton>
          <Visibility />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this room">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this room">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ActionButtons;
