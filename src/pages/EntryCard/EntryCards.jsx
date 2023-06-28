import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import { useTranslation } from "react-i18next";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Header from "../../components/UI/Header";
import CustomSearchFilter from "../../components/UI/CustomSearchFilter";
import ActionButtons from "../../components/UI/Buttons/ActionButtons";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";
import CustomDataGrid from "../../components/UI/CustomDataGrid";
import { Link } from "react-router-dom";

const EntryCards = () => {
  useScrollToUp();
  const { entryCards } = useSelector((state) => state.entryCards);
  const { t } = useTranslation();
  const { role_id } = useSelector((state) => state.user);

  const navigate = useNavigate();

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

  const mobileColumns = [
    {
      key: "name",
      label: "Müraciət sahibi",
      width: 200,
      render: (value, data) => {
        return (
          <Link to={`/requests/details/${data.id}`}>
            {value + " - " + data.message}
          </Link>
        );
      },
    },
    {
      key: "status",
      label: "Status",
      width: 100,
      render: (value) => {
        if (value === 1) {
          return (
            <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded-xl">
              Aşağı
            </Typography>
          );
        } else if (value === 2) {
          return (
            <Typography className="text-xs bg-red-500 text-white py-1 px-2 rounded-xl">
              Yüksək
            </Typography>
          );
        } else {
          return (
            <Typography className="text-xs bg-green-600 text-white py-1 px-2 rounded-xl">
              Normal
            </Typography>
          );
        }
      },
    },
    {
      key: "requestDepartments",
      label: "Şöbə",
      width: 150,
    },
    // {
    //   key: "message",
    //   label: "Müraciət",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 250,
    // },
    { key: "startTime", label: "Başlama tarixi", width: 160 },
    { key: "endTime", label: "Bitmə tarixi", width: 160 },
  ];
  return (
    <Box className="w-full">
      <Header
        currentPage={{ title: "Access card", icon: CreditCardOutlinedIcon }}
      />

      <Box className="rounded-xl  drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        <Box className="py-4 px-6">
          {role_id === 2 || role_id === 4 ? <CustomSearchFilter /> : null}
          <Box className="flex flex-col mb-6 sm:flex-row justify-end gap-3 pt-6">
            <DefaultButton
              variant="contained"
              onClick={() => navigate("/user-card-request/access/create")}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Access card")}
            </DefaultButton>
            <DefaultButton
              variant="contained"
              onClick={() => navigate("/user-card-request/parking/create")}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              {t("New Parking card")}
            </DefaultButton>
          </Box>

          <Box>
            <CustomDataGrid
              desktopColumns={columns}
              mobileColumns={mobileColumns}
              rows={entryCards}
              width={630}
              status={entryCards.status}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EntryCards;
