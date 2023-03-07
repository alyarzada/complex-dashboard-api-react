import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/UI/Header";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SuccessButton from "../../components/UI/Buttons/SuccessButton";
import CustomDataGrid from "../../components/UI/CustomDataGrid";
import { Link } from "react-router-dom";

const Payment = () => {
  const params = useParams();
  const { invoices, selectedInvoices } = useSelector((state) => state.invoice);
  const { disableTransform } = useSelector((state) => state.themes);
  const data = invoices.find((item) => item.id === Number(params.id));
  const { t } = useTranslation();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "service",
      headerName: t(["Service"]),
      flex: 12,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: t(["Amount"]),
      flex: 3,
      align: "center",
      headerAlign: "center",
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
            <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">
              Aşağı
            </Typography>
          );
        } else if (value === 2) {
          return (
            <Typography className="text-xs bg-red-500 text-white py-1 px-2 rounded">
              Yüksək
            </Typography>
          );
        } else {
          return (
            <Typography className="text-xs bg-green-600 text-white py-1 px-2 rounded">
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
    <Box>
      <Header currentPage={{ title: "My Invoices", icon: ReceiptLongIcon }} />
      <Box className="flex drop-shadow-lg rounded bg-white dark:bg-transparent">
        <Box className="flex-1">
          <Box style={{ width: "100%" }}>
            {/* <DataGrid
              rows={selectedInvoices.map((item) => ({
                id: item.id,
                service: item.service,
                amount: item.amount + " " + "AZN",
              }))}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[2]}
              sx={{
                "& .MuiDataGrid-virtualScrollerRenderZone": {
                  transform: disableTransform
                    ? "none !important"
                    : "translate3d(0px, 0px, 0px) !important",
                },
              }}
            /> */}

            <CustomDataGrid
              desktopColumns={columns}
              mobileColumns={mobileColumns}
              rows={selectedInvoices.map((item) => ({
                
                id: item.id,
                service: item.service,
                amount: item.amount + " " + "AZN",
              }))}
              width={400}
              status={selectedInvoices.status}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="mt-3"
            >
              <Typography className="dark:text-white bg-rose-500 shadow-lg shadow-[#F43F5E]/60 hover:shadow-[#F43F5E]/80 py-1 px-2 rounded">
                Total:{" "}
                {selectedInvoices.length > 0
                  ? selectedInvoices.reduce(
                      (acc, item) => acc + item.amount,
                      0
                    ) +
                    " " +
                    "AZN"
                  : 0 + " " + "azn"}
              </Typography>
              <SuccessButton variant="contained">{t("Pay")}sdfsd</SuccessButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
