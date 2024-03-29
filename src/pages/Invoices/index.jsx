import { useState, useRef, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { setModal } from "../../app/Slicers/modals";
import { getSelectedInvoices } from "../../app/Slicers/invoices";

import Header from "../../components/UI/Header";
import PayButton from "./PayButton";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HoverLogoButton from "../../components/UI/Buttons/HoverLogoButton";
import CustomDataGrid from "../../components/UI/CustomDataGrid";

export const Services = ({ params }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const modalArray = [
    { key: "Mənzil-Tikinti Kooperativi", value: "Port Baku" },
    { key: "Kompleks", value: "Port Baku" },
    { key: "Bina", value: "Tower B" },
    { key: "Blok", value: "B" },
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
    </>
  );

  return (
    <Box>
      <Button
        className="capitalize dark:text-text1 text-textDark2"
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
  const { role_id } = useSelector((state) => state.user);
  const { invoices } = useSelector((state) => state.invoice);
  const [selectionModel, setSelectionModel] = useState([]);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSelectedInvoices(selectionModel));
  }, [selectionModel, dispatch]);

  const columns = [
    {
      field: "service",
      headerName: t(["Service"]),
      flex: 1,
      renderCell: (params) => <Services params={params.row} />,
    },
    {
      field: "amount",
      headerName: t(["Amount"]),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography className="text-red-500 font-medium text-sm">
          {params.row.amount} AZN
        </Typography>
      ),
      flex: 1,
    },
    {
      field: "status",
      headerName: t(["Status"]),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Typography className="bg-logoColor rounded-md font-bold text-textDark4 uppercase p-1 text-[9px]">
          {t(params.row.status)}
        </Typography>
      ),
      flex: 1,
    },
    {
      field: "creationDate",
      headerName: t(["Created at"]),
      flex: 1,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "operation",
      headerName: t(["Action"]),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => <PayButton params={params}>{t("Pay")}</PayButton>,
      flex: 1,
    },
  ];
  const mobileColumns = [
    {
      key: "service",
      label: t(["Service"]),
      width: 150,
      render: (value, data) => <Services params={data} />,
    },
    {
      key: "amount",
      label: t(["Amount"]),
      width: 250,
      render: (value, data) => (
        <Typography className="text-red-500 font-medium text-sm">
          {data.amount} AZN
        </Typography>
      ),
    },
    {
      key: "status",
      label: t("Status"),
      width: 100,
      render: (value, data) => {
        if (data.status === "Not paid") {
          return (
            <Typography className="bg-logoColor rounded-xl p-1 text-sm flex justify-center capitalize w-[70px]">
              {data.status}
            </Typography>
          );
        }
      },
    },
    {
      key: "creationDate",
      label: t(["Created at"]),
      width: 220,
    },
    {
      key: "operation",
      label: t(["Action"]),
      width: 160,
      render: (value, data) => (
        <Link to="/myinvoice/payment">
          <PayButton params={value}>{t("Pay")}</PayButton>
        </Link>
      ),
    },
  ];
  return (
    <Box>
      <Header currentPage={{ title: "My Invoices", icon: ReceiptLongIcon }} />
      <Box className=" rounded-xl s drop-shadow-lg  bg-bgLight dark:bg-bgMain w-full">
        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent="space-between"
          className="pt-6 pb-2 px-6"
          spacing={2}
        >
          <Stack direction={{ sm: "row", xs: "column" }} spacing={2}>
            <HoverLogoButton
              variant="outlined"
              onClick={() => navigate("/myinvoice")}
            >
              {t(["Current invoices"])}
            </HoverLogoButton>
            <HoverLogoButton variant="outlined">
              {t(["Paid invoices"])}
            </HoverLogoButton>
          </Stack>
          <HoverLogoButton
            variant="outlined"
            onClick={() => navigate("/myinvoice/payment")}
          >
            {t(["Pay selected invoices"])}
          </HoverLogoButton>
        </Stack>
        <Box className="px-6 mt-3" style={{ width: "100%" }}>
          <CustomDataGrid
            desktopColumns={columns}
            mobileColumns={mobileColumns}
            rows={invoices}
            width={630}
            status={invoices.status}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
            checkboxSelection
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Myİnvoices;
