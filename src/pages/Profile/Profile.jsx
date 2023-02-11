import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProfileForm from "./ProfileForm";
import Header from "../../components/UI/Header";

import FlipCameraIosOutlinedIcon from "@mui/icons-material/FlipCameraIosOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Profile = () => {
  const [firstLetters, setFirstLetters] = useState(null);
  const { t } = useTranslation();
  const {
    user: {
      email,
      name,
      profil_image,
      has_role,
      user_details,
      last_login_at,
      last_login_ip,
      username,
    },
    user,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    const words = name.split(" ");
    const fL = words
      .map((word) => word.charAt(0))
      .reduce((acc, item) => acc + item, "");

    setFirstLetters(fL);
  }, [user]);

  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: t(["Profile"]), icon: PersonOutlineOutlinedIcon }}
      />
      <Box className="flex flex-col md:flex-row justify-between mt-4">
        <Box className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary p-6 rounded w-full h-[500px]  md:w-[30%]">
          {/* first row */}
          <Box className="flex flex-col items-center">
            <Box className="relative">
              <Avatar
                alt={name}
                className="cursor-pointer"
                sx={{ width: 140, height: 140 }}
                // src={user}
              >
                {firstLetters}
              </Avatar>
              <Box className="absolute bottom-0 right-2 bg-yellow-400 px-3 py-1 rounded">
                <FlipCameraIosOutlinedIcon
                  fontSize="small"
                  className="m-auto"
                />
              </Box>
            </Box>
            <h4 className="text-text3">{name}</h4>
            <Typography className="text-text4">{has_role.role_name}</Typography>
          </Box>

          {/* second row */}
          <Box className="mt-5 text-text4">
            <ul>
              <li className="font-bold text-sm my-2">
                {t(["Full Name"])}:{" "}
                <span className="font-normal ml-2">{name}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Username"])}:{" "}
                <span className="font-normal ml-2">{username}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Last login date"])}:{" "}
                <span className="font-normal ml-2">{last_login_at}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Last login IP"])}:{" "}
                <span className="font-normal ml-2">{last_login_ip}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Country"])}: <span className="font-normal ml-2"></span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary p-6 rounded w-full md:w-[68%] min-h-[500px]">
          <ProfileForm userData={user} />
        </Box>
      </Box>
      <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#404954] py-5 px-3 sm:px-6 rounded mt-2">
        <Link to="/">
          <Button
            startIcon={<ReplyIcon className="text-white dark:text-black" />}
            variant="contained"
            className="capitalize"
          >
            {t("geriqayit")}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Profile;
