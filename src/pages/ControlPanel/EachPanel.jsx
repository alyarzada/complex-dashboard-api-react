import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { appendModal } from "../../app/Slicers/modals";

const EachPanel = ({
  img,
  title,
  subCategory,
  link,
  panelId,
  category,
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

  return (
    <Box>
      {title === "Portmania" ? (
        <a
          href={link}
          className="text-textDark drop-shadow-lg hover:drop-shadow-xl dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-bgLight ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group flex flex-col rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000 items-center justify-center relative gap-y-3 w-full"
        >
          <img
            className={`imgscale z-30 w-[24%] sm:w-[30%] xmd:w-[26%] md:w-[28%] xxl:w-[20%] exl:w-[15%] rounded-[50%] group-hover:border group-hover:border-black transition-all duration-1000 p-2 ${
              role_id === 4 && "bg-[#fff] dark:bg-[#c9b26d]"
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
          className="text-textDark drop-shadow-lg hover:drop-shadow-xl dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-bgLight ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group flex flex-col rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000 items-center justify-center relative gap-y-3 w-full"
        >
          <img
            className={`imgscale z-30 w-[27%] sm:w-[44%] xmd:w-[27%] xxl:w-[34%] exl:w-[24%] rounded-[50%] group-hover:border group-hover:border-black transition-all duration-1000 p-2 ${
              role_id === 4 && "bg-[#fff] dark:bg-[#c9b26d]"
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
        </Box>
      )}
    </Box>
  );
};

export default EachPanel;
