import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { appendModal } from "../../app/Slicers/modals";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SubMenuPanel = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box className="w-full">
      {category.title === "Call" ? (
        <a
          className="hover:scale-[1.05] cursor-pointer transition-transform duration-300 rounded flex flex-col items-center justify-center gap-2 xmd:h-auto bg-zinc-300  sm:py-6 h-28"
          href="tel:+994556643064"
        >
          <img
            className="lg:w-3/5 xs:w-16 xs:px-1.5"
            width={100}
            height={100}
            src={category.img}
            loading="lazy"
            alt="image"
          />
          <Typography className="text-center text-slate-900 ">
            {t(category.title)}
          </Typography>
        </a>
      ) : (
        <Box
          className="hover:scale-[1.05] cursor-pointer transition-transform duration-300 rounded flex flex-col items-center justify-center gap-2 xmd:h-auto bg-zinc-300  sm:py-6 h-28"
          onClick={() => {
            if (category.title === "Call") {
              navigate(category.path);
            } else if (category.link) {
              navigate(category.link);
            } else {
              dispatch(
                appendModal({
                  name: category.title,
                  data: category,
                  role: "children",
                  type: category.type === "form" && "form",
                })
              );
            }
          }}
        >
          <img
            className="lg:w-3/5 xs:w-16 xs:px-1.5"
            width={100}
            height={100}
            src={category.img}
            loading="lazy"
            alt="image"
          />
          <Typography className="text-center text-slate-900 ">
            {t(category.title)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SubMenuPanel;
