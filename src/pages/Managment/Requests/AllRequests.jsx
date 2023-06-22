import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const AllRequests = () => {
  const { myRequests, allRequests, loading } = useSelector(
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
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <Link to={`details/${params.row.id}`}>{params.row.name}</Link>;
      },
    },
    {
      field: "request",
      flex: 3,
      headerAlign: "center",
      align: "center",
      headerName: t("Request"),
      renderCell: (params) => (
        <Link to={`details/${params.row.id}`}>{params.row.request}</Link>
      ),
    },
    {
      field: "Start date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerName: t("Date"),
    },
  ];
  const mobileColumns = [
    {
      key: "name",
      label: t("Applicant"),
      width: 200,
      render: (value, data) => {
        return <Link to={`details/${data.id}`}>{data.name}</Link>;
      },
    },
    {
      key: "request",
      label: t("Request"),
      width: 100,
      render: (value, data) => (
        <Link to={`details/${data.id}`}>{data.request}</Link>
      ),
    },
    {
      key: "Start date",
      label: t("Date"),
      width: 150,
    },
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
  }, [myRequests, loading]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="  drop-shadow-lg bg-bgLight dark:bg-bgMain text-text1 min-h-full rounded-xl p-3"
    >
      <CustomDataGrid
        desktopColumns={columns}
        mobileColumns={mobileColumns}
        rows={allData?.length > 0 ? allData : []}
        width={630}
        status={allData.status}
      />
    </motion.div>
  );
};

export default AllRequests;
