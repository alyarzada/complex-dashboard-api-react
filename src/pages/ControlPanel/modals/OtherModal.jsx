import React from "react";
import { Box, Stack, Typography } from "@mui/material";
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
        {modal.data.panelId === 11 ? (
          <Typography className="dark:text-text1">
            {/* {description} */}
          </Typography>
        ) : (
          modal.data.subCategory?.map((category, index) => (
            <SubMenuPanel
              key={index}
              category={category}
              // ref={parentModalRef}
              // closeParentModal={setOpenModal}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};

export default OtherModal;
