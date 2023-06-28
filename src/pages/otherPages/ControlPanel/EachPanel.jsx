import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { appendModal } from "../../../app/Slicers/modals";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import EastIcon from "@mui/icons-material/East";

import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const EachPanel = ({
  img,
  title,
  subCategory,
  link,
  web,
  android,
  ios,
  panelId,
  category,
  active,
  color,
  type,
}) => {
  const [hover, setHover] = useState(false);
  const { role_id } = useSelector((state) => state.user);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (role_id === 9 || role_id === 2) {
    return (
      <>
        {type === 1 ? (
          <Box
            id="restoran-home"
            className=" text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain hover:after:scale-[3] transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group rounded relative w-full p-5 z-30"
          >
            <Box>
              <Stack direction="column" spacing={1}>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30  transition-all duration-1000">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                  {t(active)} : 387
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30  transition-all duration-1000">
                  <AndroidOutlinedIcon fontSize="small" /> {android} : 94
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30  transition-all duration-1000">
                  <AppleIcon fontSize="small" /> {ios} : 273
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30  transition-all duration-1000">
                  <LanguageOutlinedIcon fontSize="small" /> {web} : 40
                </Typography>
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box
            id="restoran-home"
            className="text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain  hover:after:scale-[3]  dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group rounded relative w-full p-5 z-30 "
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography className="z-30 text-[#8391a2] font-bold">
                {t(title)}
              </Typography>
              <IconButton className={`z-30 ${color}`}>{img}</IconButton>
            </Stack>
            <Box>
              <Typography className="mb-4 font-[800] text-[1.5rem] text-[tex1] relative z-30 ">
                1
              </Typography>
              <Link
                className={`capitalize relative z-30 font-bold ${color} transition-all duration-1000`}
              >
                Etrafli{" "}
                <EastIcon
                  sx={{ fontSize: 18 }}
                  className="hover:ml-3"
                  id="more"
                />
              </Link>
            </Box>
          </Box>
        )}
      </>
    );
  }

  // after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full after:scale-0 hover:after:scale-[3] after:transition-all after:duration-1000

  return (
    <Box>
      {title === "Portmania" ? (
        <a
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          href={link}
          className=" text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain transition-all duration-500 dark:text-white text-text5 overflow-hidden h-[170px]  cursor-pointer group flex flex-col rounded  items-center justify-center relative gap-y-3 w-full"
        >
          <motion.img
            className={`z-30 w-[90px] xxl:w-[100px] exl:w-[110px] rounded-[50%] p-2 ${
              role_id === 4 && "bg-bgLight dark:bg-logoColor"
            }`}
            src={img}
            alt="image"
            style={{ border: role_id === 4 ? "2px solid #C9B26D" : "none" }}
            animate={
              hover
                ? {
                    y: -10,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      damping: 3,
                    },
                  }
                : null
            }
          />
          <Typography
            className={`z-30 text-center font-medium ${
              role_id === 4 && "text-[#C9B26D]"
            }`}
          >
            {t(title)}
          </Typography>
        </a>
      ) : (
        <Box
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          onClick={() => {
            if (link) {
              navigate(link);
            } else {
              dispatch(
                appendModal({
                  name: title,
                  category,
                  data: {
                    subCategory,
                    panelId,
                  },
                  type,
                })
              );
            }
          }}
          className="text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain  dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer flex flex-col rounded-xl  items-center justify-center relative gap-y-3 w-full"
        >
          <motion.img
            initial={{ y: 0 }}
            animate={
              hover
                ? {
                    y: -10,
                    transition: {
                      duration: 0.4,
                      type: "spring",
                      damping: 3,
                    },
                  }
                : null
            }
            className={`z-30 w-[80px] xxl:w-[90px] exl:w-[100px] rounded-[50%] p-2 ${
              role_id === 4 && "bg-bgLight dark:bg-logoColor"
            }`}
            // effect='blur'

            src={img}
            alt="image"
            style={{ border: role_id === 4 ? "2px solid #C9B26D" : "none" }}
          />
          <Typography
            className={`z-30 text-center font-medium ${
              role_id === 4 && "text-[#C9B26D]"
            }`}
          >
            {t(title)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default EachPanel;
