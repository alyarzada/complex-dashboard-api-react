import React from "react";
import {
  Stack,
  Box,
  Typography,
  ListItemText,
  Divider,
  ListItem,
  List,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";

const EachTab = ({ datas }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
        <Box className="w-full lg:w-[38%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="select-none h-[auto] rounded"
          >
            <SwiperSlide>
              <img
                src=""
                alt="image 1"
                className="object-center object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="" alt="image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="" alt="image 3" />
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box className="overflow-scroll w-full lg:w-1/2 shadow-2xl flex-1 p-3 dark:bg-gradient-to-r dark:from-mainSecondary dark:to-mainPrimary  rounded ">
          <Typography className="uppercase dark:text-text1 text-textDark2">
            {t(["Detail information"])}
          </Typography>
          <Box className="dark:text-text1 text-textDark2">
            <List sx={{ width: "100%", maxWidth: 760 }}>
              {datas.map((data) => (
                <ListItem
                  alignItems="d-flex justify-content-between"
                  sx={{ borderBottom: 1, borderColor: "divider" }}
                  key={data.id}
                >
                  <ListItemText
                    sx={{ width: "100%", maxWidth: 300 }}
                    primary={t([data.key])}
                  />
                  <ListItemText
                    sx={{ width: "100%", maxWidth: 300 }}
                    primary={data.value}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Stack>
    </motion.div>
  );
};

export default EachTab;
