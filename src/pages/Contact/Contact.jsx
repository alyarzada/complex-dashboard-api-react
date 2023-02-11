import React from "react";
import { Typography, Box, Avatar, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

const Contact = ({ contact }) => {
  const { status } = useSelector((state) => state.contacts);

  return (
    <Box
      className={`rounded px-3 ${
        status !== "loading" && "py-6"
      }  dark:text-text1 bg-bgLight drop-shadow-lg hover:drop-shadow-xl flex flex-col justify-center items-center dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary`}
    >
      {status === "loading" ? (
        <Skeleton
          animation="wave"
          className="my-auto rounded-[50%] h-44 w-32"
        />
      ) : (
        <Avatar className="w-28 h-28 border-4 border-slate-400 mb-3" />
      )}
      {status === "loading" ? (
        <Skeleton animation="wave" className="w-1/3 h-6 mb-2 my-auto" />
      ) : (
        <Typography>{contact.name}</Typography>
      )}
      {status === "loading" ? (
        <Skeleton animation="wave" className="w-1/3 h-6 mb-4 my-auto" />
      ) : (
        <Typography className="text-sm mb-2 text-textmuted">
          {contact.position}
        </Typography>
      )}
      {status === "loading" ? (
        <Skeleton animation="wave" className="w-4/5 h-6 mb-2 my-auto" />
      ) : (
        <Typography className="text-[13px]">
          <span className="ml-1 text-logoColor">
            {contact.contact.email.map((item) => (
              <Typography className="text-sm">
                <span className="text-text1">@ Email:</span> {item}
              </Typography>
            ))}
          </span>
        </Typography>
      )}
    </Box>
  );
};

export default Contact;
