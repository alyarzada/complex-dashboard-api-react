import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { appendModal } from "../../app/Slicers/modals";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AndroidOutlinedIcon from "@mui/icons-material/AndroidOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";

const EachPanel = ({
  id,
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
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (role_id === 9 || role_id === 2) {
    return (
      <>
        {type === 1 ? (
          <Box
            id="restoran-home"
            className=" text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain  ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000  relative w-full p-5 z-30"
          >
            <Box>
              <Stack direction="column" spacing={1}>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30 group-hover:text-black transition-all duration-1000">
                  <RemoveRedEyeOutlinedIcon fontSize="small" />
                  {t(active)} : 387
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30 group-hover:text-black transition-all duration-1000">
                  <AndroidOutlinedIcon fontSize="small" /> {android} : 94
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30 group-hover:text-black transition-all duration-1000">
                  <AppleIcon fontSize="small" /> {ios} : 273
                </Typography>
                <Typography className="flex gap-[10px] font-bold text-[#aab8c5] text-[0.9rem] text-center z-30 group-hover:text-black transition-all duration-1000">
                  <LanguageOutlinedIcon fontSize="small" /> {web} : 40
                </Typography>
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box
            id="restoran-home"
            className=" text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain  ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000  relative w-full p-5 z-30 "
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography className="z-30 text-[#8391a2] font-bold group-hover:text-black transition-all duration-1000">
                {t(title)}
              </Typography>
              <IconButton className={`z-30 ${color} `}>{img}</IconButton>
            </Stack>
            <Box>
              <Typography className="mb-4 font-[800] text-[1.5rem] text-[tex1] relative z-30 group-hover:text-black transition-all duration-1000">
                1
              </Typography>
              <Link
                className={`capitalize relative z-30 font-bold ${color} group-hover:text-black transition-all duration-1000`}
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

  return (
    <Box>
      {title === "Portmania" ? (
        <a
          href={link}
          className="text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain  ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group flex flex-col rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000 items-center justify-center relative gap-y-3 w-full"
        >
          <img
            className={`imgscale z-30 w-[24%] sm:w-[30%] xmd:w-[26%] md:w-[28%] xxl:w-[20%] exl:w-[15%] rounded-[50%] group-hover:border group-hover:border-black transition-all duration-1000 p-2 ${
              role_id === 4 && "bg-bgLight dark:bg-logoColor"
            }`}
            src={img}
            alt="image"
            style={{ border: role_id === 4 ? "2px solid #C9B26D" : "none" }}
          />
          <Typography
            className={`z-30 h-5 font-medium ${
              role_id === 4 && "text-[#C9B26D]"
            } group-hover:text-lg group-hover:text-[#2b2b2b] group-hover:font-medium transition-all duration-1000`}
          >
            {t(title)}
          </Typography>
        </a>
      ) : (
        <Box
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
          className="text-textDark drop-shadow-lg hover:drop-shadow-xl bg-bgLight dark:bg-bgMain ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group flex flex-col rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000 items-center justify-center relative gap-y-3 w-full"
        >
          <LazyLoadImage
            className={`imgscale z-30 w-[27%] sm:w-[44%] xmd:w-[27%] xxl:w-[34%] exl:w-[24%] rounded-[50%] group-hover:border group-hover:border-black transition-all duration-1000 p-2 ${
              role_id === 4 && "bg-bgLight dark:bg-logoColor"
            }`}
            
           
            // effect='blur'
            
            src={img}
            alt="image"
            style={{ border: role_id === 4 ? "2px solid #C9B26D" : "none" }}
          />
          <Typography
            className={`z-30 h-5 font-medium ${
              role_id === 4 && "text-[#C9B26D]"
            } group-hover:text-lg group-hover:text-[#2b2b2b] group-hover:font-medium transition-all duration-1000`}
          >
            {t(title)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default EachPanel;
