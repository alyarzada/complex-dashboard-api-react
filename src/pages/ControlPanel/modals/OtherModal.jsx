import { Box, Stack } from "@mui/material";
import SubMenuPanel from "../subMenuPanel";

const OtherModal = ({ modal }) => {
  return (
    <Box>
      <Stack
        className="my-3"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {modal.data.subCategory?.map((category, index) => (
          <SubMenuPanel key={index} category={category} />
        ))}
      </Stack>
    </Box>
  );
};

export default OtherModal;
