import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import RequestDetails from "./RequestDetails";
import { useTranslation } from "react-i18next";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const AllRequests = () => {
  const { myRequests, allRequests, status } = useSelector(
    (state) => state.requests
  );
  const [allData, setAllData] = useState([]);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation();

  const columns = [
    // { field: "id", headerName: "#", width: 200 },
    {
      field: "name",
      headerName: t("Applicant"),
      width: 200,
      renderCell: (params) => {
        return <Link to={`details/${params.row.id}`}>{params.row.name}</Link>;
      },
    },
    {
      field: "request",
      headerName: t("Request"),
      width: 400,
      renderCell: (params) => (
        <Link to={`details/${params.row.id}`}>{params.row.request}</Link>
      ),
    },
    { field: "Start date", headerName: t("Date"), width: 200 },
  ];

  useEffect(() => {
    if (role_id === 8) {
      const data = myRequests?.map((item) => {
        return {
          name: item.userData.name,
          request: item.title,
          date: item.last_message_date,
          id: item.id,
        };
      });
      setAllData(data);
    } else {
      const data = allRequests?.map((item) => {
        return {
          name: item.userData.name,
          request: item.title,
          date: item.last_message_date,
          id: item.id,
        };
      });
      setAllData(data);
    }
  }, [myRequests, status]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="dark:bg-gradient-to-r bg-bgLight drop-shadow-lg dark:from-mainPrimary dark:to-mainSecondary text-text1 min-h-full rounded p-3"
    >
      <DataGrid
        columns={columns}
        rows={allData?.length > 0 ? allData : []}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className="lastTask-scrollbar"
        autoHeight
        loading={status === "loading"}
      />
    </motion.div>
  );
};

export default AllRequests;
