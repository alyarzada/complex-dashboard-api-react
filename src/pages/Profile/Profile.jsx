import { useState, useEffect } from "react";
import { format } from "date-fns";
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
  const [defaultDate, setDefaultDate] = useState(null);
  const [date, setDate] = useState(null);
  const { t } = useTranslation();
  const {
    user: {
      user_details:{
        gender,
        birthday,
      },
      email,
      name,
      has_role,
      username,
      phone,
    },
    
    user,
    
  } = useSelector((state) => state.auth);
  console.log(user)

  // Reverse Birthday
  const reverseBirthday = (birthdayDate) => {
    const reversedDate = format(new Date(birthday), 'dd/MM/yyyy');
    return reversedDate;
  }
   

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
        <Box className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary p-8 rounded w-full   md:w-[38%]">
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
                {t(["Apartment owner"])}:{" "}
                <span className="font-normal ml-2">{name}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Username"])}:{" "}
                <span className="font-normal ml-2">{username}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Gender"])}: <span className="font-normal ml-2">{t(gender)}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Date of birth"])}: <span className="font-normal ml-2">{reverseBirthday(birthday)}</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Telephone number"])}:{" "}
                <span className="font-normal ml-2">0554264434</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Addition Phone number"])}:{" "}
                <span className="font-normal ml-2">0554264434</span>
              </li>
              <li className="font-bold text-sm my-2">
                {t(["Email address"])}: <span className="font-normal ml-2">{email}</span>
              </li>
            </ul>
          </Box>
        </Box>

        <Box className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary p-6 rounded w-full md:w-[61%] min-h-[500px]">
          <ProfileForm userData={user} />
        </Box>
      </Box>

    </Box>
  );
};

export default Profile;
