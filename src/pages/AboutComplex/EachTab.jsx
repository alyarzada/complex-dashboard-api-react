import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  ListItemText,
  ListItem,
  Button,
  List,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

import imageNotFound from "../../assets/tabone-slider/image-not-found.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const EachTab = ({ datas }) => {
  const [showModal, setShowModal] = useState(false);
  const [fullImage, setFullImage] = useState("");

  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
        <Box className="w-full  lg:w-[50%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="select-none h-full rounded-xl cursor-pointer"
          >
            <SwiperSlide>
              <img
                src={imageNotFound}
                alt="1"
                className="object-center object-cover w-full h-full relative cursor-pointer peer hover:opacity-[0.6] transition-all duration-300"
                onClick={() => {
                  setShowModal(true);
                  setFullImage("w-[40%] h-[70%]");
                }}
              />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-logoColor absolute bottom-2 right-2"
              >
                <CameraAltOutlinedIcon color="action" />
              </Button>

              <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none scale-0 transition-all duration-300 peer-hover:scale-100 ">
                <ZoomInOutlinedIcon fontSize="large" color="action" />
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={imageNotFound}
                alt="2"
                className="object-center object-cover w-full h-full relative cursor-pointer peer hover:opacity-[0.6] transition-all duration-300"
                onClick={() => {
                  setShowModal(true);
                  setFullImage("w-[40%] h-[70%]");
                }}
              />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-logoColor absolute bottom-2 right-2 "
              >
                <CameraAltOutlinedIcon color="action" />
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={imageNotFound}
                alt="3"
                className="object-center object-cover w-full h-full relative cursor-pointer peer hover:opacity-[0.6] transition-all duration-300"
                onClick={() => {
                  setShowModal(true);
                  setFullImage("w-[40%] h-[70%]");
                }}
              />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-logoColor absolute bottom-2 right-2"
              >
                <CameraAltOutlinedIcon color="action" />
              </Button>
            </SwiperSlide>
          </Swiper>
        </Box>

        {showModal && (
          <div className="fixed top-0 left-0 m-0 w-full h-full bg-black z-[99999] flex items-center justify-center ">
            <img
              className={`photo-transition ${fullImage} w-[77%] h-[38%] block xs:w-[78%] h-[38%] sm:w-[77%] h-[48%] md:w-[65%] h-[65%]  `}
              src={imageNotFound}
              alt=""
            />
            <button
              className="absolute top-[10px] right-[10px] bg-none dark:text-[#fff] text-[#fff] py-[10px] px-[20px] border-none rounded-xl cursor-pointer"
              id="close-modal"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <CloseOutlinedIcon
                color="action"
                className="dark:text-[#fff] text-[#fff]"
              />
            </button>
          </div>
        )}

        <Box className=" w-full lg:w-1/2 shadow-2xl flex-1 p-3 bg-bgLight dark:bg-bgMain rounded-xl overflow-hidden">
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
