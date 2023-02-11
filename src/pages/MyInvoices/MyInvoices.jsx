import { useState, useRef, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
// components
import Header from "../../components/UI/Header";
import PayButton from "./PayButton";
// icons
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReplyIcon from "@mui/icons-material/Reply";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../app/Slicers/modals";
import { getSelectedInvoices } from "../../app/Slicers/invoices";
import GoBackButton from "../../components/UI/GoBackButton";

export const Services = ({ params }) => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const modalArray = [
    { key: "Mənzil-Tikinti Kooperativi", value: "Port Baku" },
    { key: "Kompleks", value: "Port Baku" },
    { key: "Bina", value: "Tower B" },
    { key: "Blok", value: "B" },
    { key: "Mənzil", value: params.apartment },
    { key: "Xidmət", value: params.service },
    { key: "Xidmət haqqı", value: `${params.amount} AZN` },
    { key: "Ödəniləcək məbləğ", value: `${params.amount} AZN` },
    { key: "Hesablama intervalı", value: "Gündəlik" },
    { key: "Tarix aralığı", value: params.creationDate },
    { key: "Status", value: params.status },
  ];

  const modalData = (
    <>
      <Box>
        {modalArray.map((item, index) => (
          <Box key={index} className="flex justify-between mb-4">
            <Typography className="text-white">{item.key}</Typography>
            <Typography className="text-white">{item.value}</Typography>
          </Box>
        ))}
      </Box>
      {/* <Box className="flex justify-end">
        <Button
          variant="contained"
          className="capitalize"
          onClick={() => setOpenModal(false)}
        >
          {t(["Close"])}
        </Button>
      </Box> */}
    </>
  );

  return (
    <Box>
      <Button
        className="capitalize text-blue-500"
        onClick={() => {
          dispatch(
            setModal({
              isOpen: true,
              children: modalData,
              title: params.service,
            })
          );
        }}
        ref={ref}
      >
        {params.service}
      </Button>
    </Box>
  );
};

const Myİnvoices = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { invoices } = useSelector((state) => state.invoice);
  const [selectionModel, setSelectionModel] = useState([]);
  const { disableTransform } = useSelector((state) => state.themes);

  useEffect(() => {
    dispatch(getSelectedInvoices(selectionModel));
  }, [selectionModel]);

  const columns = [
    {
      field: "apartment",
      headerName: t(["Apartment"]),
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "service",
      headerName: t(["Service"]),
      width: 300,
      renderCell: (params) => <Services params={params.row} />,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: t(["Amount"]),
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography className="text-red-500 font-medium text-sm">
          {params.row.amount} AZN
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: t(["Status"]),
      width: 140,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography className="bg-logoColor rounded p-1 text-sm">
          {params.row.status}
        </Typography>
      ),
    },
    {
      field: "creationDate",
      headerName: t(["Created at"]),
      width: 220,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "operation",
      headerName: t(["Action"]),
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => <PayButton params={params}>{t("Pay")}</PayButton>,
    },
  ];

  return (
    <Box>
      <Header currentPage={{ title: "My Invoices", icon: ReceiptLongIcon }} />
      <Box className="my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          className="pt-6 pb-2 px-6"
          spacing={2}
        >
          <Stack direction={{ sm: "row", xs: "column" }} spacing={2}>
            <Button className="capitalize" variant="contained">
              {t(["Current invoices"])}
            </Button>
            <Button className="capitalize" variant="outlined">
              {t(["Paid invoices"])}
            </Button>
          </Stack>
          <Button
            onClick={() => navigate("/myinvoice/payment")}
            className="capitalize"
            variant="contained"
          >
            {t(["Pay selected invoices"])}
          </Button>
        </Stack>

        <Box className="px-6 mt-3" style={{ height: 630, width: "100%" }}>
          <DataGrid
            rows={invoices}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) =>
              setSelectionModel(newSelectionModel)
            }
            selectionModel={selectionModel}
            sx={{
              "& .MuiDataGrid-virtualScrollerRenderZone": {
                transform: disableTransform
                  ? "none !important"
                  : "translate3d(0px, 0px, 0px) !important",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Myİnvoices;
