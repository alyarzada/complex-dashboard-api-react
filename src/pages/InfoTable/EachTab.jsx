import React from "react";
import {
  Stack,
  Box,
  Typography,
  ListItemText,
  Divider,
  ListItem,
  Button,
  List,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import imageNotFound from "../../assets/image-not-found.jpg";

const EachTab = ({ datas }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [fullImage, setFullImage] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.8 }}
    >
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
        <Box className="w-full  lg:w-[38%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="select-none h-[auto] rounded cursor-pointer"
          >
            <SwiperSlide>
              <img
                src={imageNotFound}
                alt="image 1"
                className="object-center object-cover w-full h-full relative cursor-pointer peer hover:opacity-[0.6]"
                onClick={() => {
                  setShowModal(true);
                  setFullImage("w-[40%] h-[70%]");
                  console.log("salam");
                }}
              />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-[#FFC626] absolute bottom-2 right-2"
              >
                <CameraAltOutlinedIcon color="action" />
              </Button>

              <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden pointer-events-none peer-hover:block   imageIcon">
                <ZoomInOutlinedIcon fontSize="large" />
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <img src={imageNotFound} alt="image 2" className="relative" />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-[#FFC626] absolute bottom-2 right-2 "
              >
                <CameraAltOutlinedIcon />
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={imageNotFound} alt="image 3" className="relative" />
              <Button
                onClick={() => navigate("/information/photoedit")}
                className="bg-[#FFC626] absolute bottom-2 right-2"
              >
                <CameraAltOutlinedIcon />
              </Button>
            </SwiperSlide>
          </Swiper>
        </Box>

        {showModal && (
          <div className="fixed top-0 left-[-34px] w-full h-full bg-black z-[99999] flex items-center justify-center">
            <img
              className={`photo-transition ${fullImage}  block`}
              src={imageNotFound}
              alt=""
            />
            <button
              className="absolute top-[10px] right-[10px] bg-none color-white py-[10px] px-[20px] border-none rounded cursor-pointer"
              id="close-modal"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <CloseOutlinedIcon color="action" />
            </button>

            {/* <h1 className="bg-red-400">salamammm</h1> */}
          </div>
        )}

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
