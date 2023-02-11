import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";
import ActionButtons from "../../../components/UI/ActionButtons";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CustomSearchFilter from "../../../components/UI/CustomSearchFilter";
import { useTranslation } from "react-i18next";

const RenterRegistration = () => {
  const { tenants } = useSelector((state) => state.tenants);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  useScrollToUp();

  const columns = [
    { field: "startTime", headerName: t("Start date"), width: 200 },
    { field: "endTime", headerName: t("End date"), width: 150 },

    { field: "title", headerName: t("Title"), width: 160, sortable: false },
    {
      field: "status",
      headerName: t("Status"),
      width: 160,
    },
    {
      field: "comments",
      headerName: t("Comments"),
      width: 100,
    },
    {
      field: "created",
      headerName: t("Created"),
      width: 200,
    },
    {
      field: "actions",
      headerName: "",
      width: 200,
      renderCell: (params) => <ActionButtons {...{ params }} />,
    },
  ];

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Tenant Registration"]),
          icon: PersonAddAltOutlinedIcon,
        }}
      />

      <Box className="my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-6 px-6">
          {role_id === 4 ? <CustomSearchFilter /> : null}
          <Box className="flex flex-col mb-6 sm:flex-row justify-end pt-3">
            <Button
              onClick={() => navigate("/user-tenant-registration/create-new")}
              className="capitalize"
              variant="contained"
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("Create new")}
            </Button>
          </Box>
          <DataGrid
            rows={tenants}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RenterRegistration;
