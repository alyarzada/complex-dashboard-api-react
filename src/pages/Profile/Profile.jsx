import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Box, Typography, Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import ProfileForm from "./ProfileForm";
import Header from "../../components/UI/Header";
import FlipCameraIosOutlinedIcon from "@mui/icons-material/FlipCameraIosOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Profile = () => {
  const [firstLetters, setFirstLetters] = useState(null);
  const [defaultDate, setDefaultDate] = useState(null);
  const [date, setDate] = useState(null);
  const { t } = useTranslation();
  const {
    user: {
      user_details: { gender, birthday },
      email,
      name,
      has_role,
      username,
      notifi_phone,
    },

    user,
  } = useSelector((state) => state.auth);
  console.log(user);

  // Reverse Birthday
  const reverseBirthday = (birthdayDate) => {
    const reversedDate = format(new Date(birthday), "dd/MM/yyyy");
    return reversedDate;
  };

  const personalDetails = [
    {
      id: 1,
      label: "Apartment owner",
      value: name,
    },
    {
      id: 2,
      label: "Username",
      value: username,
    },
    {
      id: 3,
      label: "Gender",
      value: gender,
    },
    {
      id: 4,
      label: "Date of birth",
      value: birthday ? reverseBirthday(birthday) : null,
    },
    {
      id: 5,
      label: "Telephone number",
      value: notifi_phone,
    },
    {
      id: 6,
      label: "Addition Phone number",
      value: notifi_phone,
    },
    {
      id: 7,
      label: "Email address",
      value: email,
    },
  ];

  console.log(gender);

  const reverseBirthday = (birthdayDate) => {
    return format(new Date(birthdayDate), "dd/MM/yyyy");
  };

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
              {personalDetails.map((detail) => {
                if (detail.value === "female" || detail.value === "male") {
                  return (
                    <li className="font-bold text-sm my-2" key={detail.id}>
                      {t(detail.label)}:{" "}
                      <span className="font-normal ml-2">
                        {t(
                          detail.value.charAt(0).toUpperCase() +
                            detail.value.slice(1)
                        )}
                      </span>
                    </li>
                  );
                }
                return (
                  <li className="font-bold text-sm my-2" key={detail.id}>
                    {t(detail.label)}:{" "}
                    <span className="font-normal ml-2">{t(detail.value)}</span>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>

        <Box className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary p-6 rounded w-full md:w-[61%] min-h-[500px]">
          <ProfileForm user={user} />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
