import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Stack,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { pushToSelectedInvoices } from "../../app/Slicers/invoices";
import { Services } from "../MyInvoices/MyInvoices";

const ControlPanelInvoice = () => {
  const { invoices } = useSelector((state) => state.invoice);
  const { light } = useSelector((state) => state.themes);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const payInvoiceHandle = (invoice) => {
    pushToSelectedInvoices(invoice);
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
      <Box className="flex-1 bg-gradient-to-r from-bgMain to-bgSecond p-2 bg-white rounded">
          <Box className="mb-4 mt-2">
            <Typography className="dark:text-logoColor text-logoColor capitalize font-medium">
              {t(["Current invoices (debts)"])}
            </Typography>
          </Box>
          <TableContainer
            className="bg-transparent h-[234px] overflow-auto custom-table-class"
            component={Paper}
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
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        className="bg-rose-500 p-1 capitalize text-bgLight"
                        onClick={() => payInvoiceHandle(invoice)}
                      >
                        {t("Pay")}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box className="flex-1 bg-gradient-to-r from-bgMain to-bgSecond p-2 bg-white rounded">
          <Box className="mb-3 flex justify-between items-center">
            <Typography className="dark:text-logoColor text-logoColor capitalize font-medium">
              {t(["Paid invoices"])}
            </Typography>
            <Link to="/myinvoice" >
            <Button className="capitalize" variant="outlined">
              {t(["All payments"])}
            </Button>
            </Link>
          </Box>
          <TableContainer
            className="bg-transparent h-[234px] overflow-auto custom-table-class"
            component={Paper}
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
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        className="bg-rose-500 p-1 capitalize text-bgLight"
                        onClick={() => payInvoiceHandle(invoice)}
                      >
                        {t("Pay")}
                      </Button>
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
