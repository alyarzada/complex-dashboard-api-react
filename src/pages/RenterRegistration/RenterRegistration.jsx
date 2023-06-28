import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import { useTranslation } from "react-i18next";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Header from "../../components/UI/Header";
import ActionButtons from "../../components/UI/Buttons/ActionButtons";
import CustomSearchFilter from "../../components/UI/CustomSearchFilter";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";
import CustomDataGrid from "../../components/UI/CustomDataGrid";

const RenterRegistration = () => {
  useScrollToUp();

  const { tenants } = useSelector((state) => state.tenants);
  const { role_id } = useSelector((state) => state.user);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const columns = [
    { field: "startTime", headerName: t("Start date"), width: 150 },
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
      width: 150,
      renderCell: (params) => <ActionButtons {...{ params }} />,
    },
  ];
  const mobileColumns = [
    {
      key: "startTime",
      label: t("Start date"),
      width: 200,
    },
    {
      key: "endTime",
      label: t("End date"),
      width: 100,
    },
    {
      key: "title",
      label: t("Title"),
      width: 150,
    },
    {
      key: "status",
      label: t("Status"),
      sortable: false,
      width: 250,
    },
    { key: "comments", label: t("Comments"), width: 160 },
    {
      key: "actions",
      label: "actions",
      width: 160,
      render: (value, data) => <ActionButtons params={data} />,
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

      <Box className=" rounded  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="py-6 px-6">
          {role_id === 4 ? <CustomSearchFilter /> : null}
          <Box className="flex flex-col mb-6 sm:flex-row justify-end pt-3">
            <DefaultButton
              variant="contained"
              onClick={() => navigate("/user-tenant-registration/create-new")}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("Create new")}
            </DefaultButton>
          </Box>
          <CustomDataGrid
            desktopColumns={columns}
            mobileColumns={mobileColumns}
            rows={tenants}
            width={630}
            status={tenants.status}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RenterRegistration;
