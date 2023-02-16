import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";
import { useTranslation } from "react-i18next";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const columns = [
  // { field: "id", headerName: "#", width: 200 },
  {
    field: "name",
    headerName: "Applicant",
    flex: 1,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return <Link to={`details/${params.row.id}`}>{params.row.name}</Link>;
    },
  },
  {
    field: "request",
    headerName: "Müraciət",
    flex: 3,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Link to={`details/${params.row.id}`}>{params.row.request}</Link>
    ),
  },
  {
    field: "date",
    headerName: "Tarix",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];

const RequestComponent = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const { myRequests, allRequests, status } = useSelector(
    (state) => state.requests
  );
  const [filteredRequests, setFilteredRequests] = useState([]);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
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
      const filtered = myRequests?.filter(
        (item) => item.requestform_type === Number(params.type)
      );
      const data = filtered?.map((item) => {
        return {
          name: item.userData.name,
          request: item.title,
          date: item.last_message_date,
          id: item.id,
        };
      });

      setFilteredRequests(data);
    } else {
      const filtered = allRequests?.filter(
        (item) => item.requestform_type === Number(params.type)
      );
      const data = filtered?.map((item) => {
        return {
          name: item.userData.name,
          request: item.title,
          date: item.last_message_date,
          id: item.id,
        };
      });

      setFilteredRequests(data);
    }
  }, [myRequests, allRequests, status, filteredRequests]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="dark:bg-gradient-to-r bg-bgLight drop-shadow-lg dark:from-mainPrimary dark:to-mainSecondary text-text1 min-h-full rounded p-3"
    >
      <CustomDataGrid
        desktopColumns={columns}
        mobileColumns={mobileColumns}
        rows={filteredRequests?.length > 0 ? filteredRequests : []}
        width={630}
        status={filteredRequests.status}
      />
    </motion.div>
  );
};

export default RequestComponent;
