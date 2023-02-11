import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import GoBackButton from "../../../components/UI/GoBackButton";
import Header from "../../../components/UI/Header";
import CustomSearchFilter from "../../../components/UI/CustomSearchFilter";
import ActionButtons from "../../../components/UI/ActionButtons";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { useTranslation } from "react-i18next";

const EntryCards = () => {
  const { entryCards } = useSelector((state) => state.entryCards);
  const { t } = useTranslation();
  const navigate = useNavigate();
  useScrollToUp();

  const columns = [
    { field: "type", headerName: t("Type"), width: 250 },
    { field: "reason", headerName: t("Reason"), width: 250 },

    { field: "status", headerName: t("Status"), width: 250, sortable: false },
    {
      field: "created",
      headerName: t("Created"),
      width: 250,
    },
    {
      field: "actions",
      headerName: "",
      width: 250,
      renderCell: (params) => <ActionButtons {...{ params }} />,
    },
  ];

  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: "Access card", icon: CreditCardOutlinedIcon }}
      />

      <Box className="my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-4 px-6">
          <CustomSearchFilter />
          <Box className="flex flex-col mb-6 sm:flex-row justify-end gap-3 pt-6">
            <Button
              onClick={() => navigate("/user-card-request/access/create")}
              className="capitalize"
              variant="contained"
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Access card")}
            </Button>
            <Button
              onClick={() => navigate("/user-card-request/parking/create")}
              className="capitalize"
              variant="contained"
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Parking card")}
            </Button>
          </Box>

          <Box>
            <DataGrid
              rows={entryCards}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[10]}
              autoHeight
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EntryCards;
