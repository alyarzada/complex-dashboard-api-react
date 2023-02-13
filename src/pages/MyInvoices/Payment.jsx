import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/UI/Header";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SuccessButton from "../../components/UI/Buttons/SuccessButton";

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

  return (
    <Box>
      <Header currentPage={{ title: "My Invoices", icon: ReceiptLongIcon }} />
      <Box className="flex drop-shadow-lg rounded bg-white dark:bg-transparent">
        <Box className="flex-1">
          <Box style={{ height: 400, width: "100%" }}>
            <DataGrid
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
              <SuccessButton variant="contained">{t("Pay")}</SuccessButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
