import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const columns = [
  // { field: "id", headerName: "#", width: 200 },
  {
    field: "name",
    headerName: "Applicant",
    width: 200,
    renderCell: (params) => {
      return <Link to={`details/${params.row.id}`}>{params.row.name}</Link>;
    },
  },
  {
    field: "request",
    headerName: "Müraciət",
    width: 400,
    renderCell: (params) => (
      <Link to={`details/${params.row.id}`}>{params.row.request}</Link>
    ),
  },
  { field: "date", headerName: "Tarix", width: 200 },
];

const RequestComponent = () => {
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
      <DataGrid
        columns={columns}
        rows={filteredRequests?.length > 0 ? filteredRequests : []}
        pageSize={5}
        rowsPerPageOptions={[5]}
        className="lastTask-scrollbar"
        autoHeight
        loading={status === "loading"}
      />
    </motion.div>
  );
};

export default RequestComponent;
