import { Box, Button, FormLabel, TextField } from "@mui/material";
import CustomModal from "../../../../../components/UI/CustomModal";

const EventModal = ({ setOpenEventModal, eventData }) => {
  return (
    <CustomModal
      handleClose={() => setOpenEventModal(false)}
      title="Bronlanıb"
      className="h-fit"
    >
      <Box className="p-2">
        <FormLabel>Başlama tarixi</FormLabel>
        <TextField
          disabled
          defaultValue={`${eventData.extendedProps.startStr}`}
          variant="outlined"
          margin="dense"
          fullWidth
          className="mb-8"
        />
        <FormLabel>Bitmə tarixi</FormLabel>
        <TextField
          disabled
          defaultValue={`${eventData.extendedProps.endStr}`}
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </Box>
      <Box className="flex gap-x-2 my-3 justify-end">
        <Button
          onClick={() => setOpenEventModal(false)}
          type="button"
          variant="outlined"
          color="error"
          className="capitalize"
        >
          Bağla
        </Button>
      </Box>
    </CustomModal>
  );
};

export default EventModal;
