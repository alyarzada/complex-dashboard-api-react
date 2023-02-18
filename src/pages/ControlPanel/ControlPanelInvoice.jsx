import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { pushToSelectedInvoices } from "../../app/Slicers/invoices";
import { Services } from "../MyInvoices/MyInvoices";
import BackButton from "../../components/UI/Buttons/BackButton";
import DefaultButton from "../../components/UI/Buttons/DefaultButton";
import PreviewIcon from "@mui/icons-material/Preview";

const ControlPanelInvoice = () => {
  const { invoices } = useSelector((state) => state.invoice);
  const { light } = useSelector((state) => state.themes);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const payInvoiceHandle = (invoice) => {
    dispatch(pushToSelectedInvoices(invoice));
    navigate("/myinvoice/payment");
  };

  useEffect(() => {
    const scroll = document.querySelectorAll(".scroll-table");
    if (light) {
      scroll.forEach((elementScroll) => {
        elementScroll.classList.remove("custom-table-class");
        elementScroll.classList.add("custom-table-class-light");
      });
    } else {
      scroll.forEach((elementScroll) => {
        elementScroll.classList.remove("custom-table-class-light");
        elementScroll.classList.add("custom-table-class");
      });
    }
  }, [light]);

  return (
    <Box className="mb-6">
      <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
        {/* Current invoices */}
        <Box className="flex-1 bg-gradient-to-r from-bgMain to-bgSecond p-2 bg-white rounded">
          <Box className="mb-3 flex justify-between items-center">
            <Typography className="dark:text-logoColor text-logoColor capitalize font-medium">
              {t(["Current invoices (debts)"])}
            </Typography>
            <DefaultButton
              className="capitalize"
              variant="outlined"
              onClick={() => navigate("/myinvoice")}
            >
              {t(["All payments"])}
            </DefaultButton>
          </Box>
          <TableContainer
            className="bg-transparent h-[240px] overflow-auto"
            component={Paper}
            sx={{
              "&::-webkit-scrollbar": {
                width: 3.5
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: 2
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray",
                borderRadius: 2
              }
            }}
          >
            <Table size="small" aria-label="a dense table" >
              <TableHead>
                <TableRow>
                  <TableCell className=" dark:text-text1 text-textDark2">
                    {t(["Service type"])}
                  </TableCell>
                  <TableCell
                    className=" dark:text-text1 text-textDark2"
                    align="center"
                  >
                    {t(["Amount to pay"])}
                  </TableCell>
                  <TableCell
                    className=" dark:text-text1 text-textDark2"
                    align="center"
                  >
                    {t(["Action"])}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Services params={invoice} />
                    </TableCell>
                    <TableCell
                      className=" dark:text-text1 text-textDark2"
                      align="center"
                    >
                      {invoice.amount} AZN
                    </TableCell>
                    <TableCell align="center">
                      <BackButton
                        variant="outlined"
                        onClick={() => payInvoiceHandle(invoice)}
                      >
                        {t("Pay")}
                      </BackButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* Paid invoices */}
        <Box className="flex-1 bg-gradient-to-r p-2 from-bgMain to-bgSecond bg-white rounded">
          <Box className="mb-3 flex justify-between items-center">
            <Typography className="dark:text-logoColor text-logoColor capitalize font-medium">
              {t(["Paid invoices"])}
            </Typography>
            <DefaultButton
              className="capitalize"
              variant="outlined"
              onClick={() => navigate("/myinvoice")}
            >
              {t(["All payments"])}
            </DefaultButton>
          </Box>
          <TableContainer
            className="bg-transparent h-[240px] overflow-auto"
            component={Paper}
            sx={{
              "&::-webkit-scrollbar": {
                width: 3.5,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
                borderRadius: 2
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray",
                borderRadius: 2
              }
            }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className=" dark:text-text1 text-textDark2">
                    {t(["Service type"])}
                  </TableCell>
                  <TableCell
                    className=" dark:text-text1 text-textDark2"
                    align="center"
                  >
                    {t(["Amount to pay"])}
                  </TableCell>
                  <TableCell
                    className=" dark:text-text1 text-textDark2"
                    align="center"
                  >
                    {t(["Action"])}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Services params={invoice} />
                    </TableCell>
                    <TableCell
                      className=" dark:text-text1 text-textDark2"
                      align="center"
                    >
                      {invoice.amount} AZN
                    </TableCell>
                    <TableCell
                      className=" dark:text-text1 text-textDark2"
                      align="center"
                    >
                      <Tooltip title="Çekə bax">
                        <IconButton onClick={() => console.log("print")}>
                          <PreviewIcon className="text-logoColor text-[22px]" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};

export default ControlPanelInvoice;
