import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../../../components/UI/Header";
import ShowChartSharp from "@mui/icons-material/ShowChartSharp";
import CommentOutlined from "@mui/icons-material/CommentOutlined";
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

import Drawer from "@mui/material/Drawer";
import ReportsFilter from "./ReportsFilter";

import * as xlsx from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function createData(
  question,
  results,
  status,
  cooperative,
  complex,
  build,
  apartment
) {
  return { question, results, status, cooperative, complex, build, apartment };
}

const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let a = date.getMonth();
a = a + 1;
if (a - 2 < 0) a = 12;

const rows = [
  {
    question: 1,
    results: 2,
    status: 3,
    cooperative: 4,
    complex: 5,
    build: 6,
    apartment: 7,
  },
  {
    question: 1,
    results: 2,
    status: 3,
    cooperative: 4,
    complex: 5,
    build: 6,
    apartment: 7,
  },
  {
    question: 1,
    results: 2,
    status: 3,
    cooperative: 4,
    complex: 5,
    build: 6,
    apartment: 7,
  },
  {
    question: 1,
    results: 2,
    status: 3,
    cooperative: 4,
    complex: 5,
    build: 6,
    apartment: 7,
  },
  // createData(1, 159, 6.0, 24, 2.0, 3, 4),
];

const tableHeaders = [
  {
    id: 1,
    title: "Sual",
    name: "Sual",
    field: "question",
  },
  {
    id: 2,
    title: "Neticeler",
    name: "Nəticələr",
    field: "results",
  },
  {
    id: 3,
    title: "Status",
    name: "Status",
    field: "status",
  },
  {
    id: 4,
    title: "MTK",
    name: "Mənzil-Tikinti Kooperativi",
    field: "cooperative",
  },
  {
    id: 5,
    title: "Kompleks",
    name: "Kompleks",
    field: "complex",
  },
  {
    id: 6,
    title: "Bina",
    name: "Bina",
    field: "build",
  },
  {
    id: 7,
    title: "Mənzil",
    name: "Mənzil",
    field: "apartment",
  },
];

export default function Reports() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { t } = useTranslation();

  const downloadExcel = () => {
    const workSheet = xlsx.utils.json_to_sheet(rows);
    const workBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, "list");
    //buffer
    let buf = xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    //binary
    xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    //download
    xlsx.writeFile(workBook, "reportlist.xlsx");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("Courier-Bold");
    doc.text("Repərt List", 20, 10);
    doc.autoTable({
      columns: tableHeaders.map((col) => ({ ...col, dataKey: col.field })),
      styles: { halign: "center" },
      body: rows,
    });
    doc.save("reportlist.pdf");
  };

  return (
    <Box className="w-full">
      <Header currentPage={{ title: t(["Reports"]), icon: ShowChartSharp }} />
      <Box className="my-4 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="flex flex-col sm:flex-row justify-start gap-3">
          <Button
            className="capitalize"
            startIcon={<CommentOutlined />}
            variant="contained"
          >
            Muracietler
          </Button>
          <Button
            className="capitalize"
            startIcon={<HelpOutlineOutlined />}
            variant="contained"
          >
            Sorgular
          </Button>
        </Box>
      </Box>
      <Box
        className="flex flex-col my-4 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full"
        sx={{ justifyContent: "space-between", alignItems: "center " }}
      >
        <Box className="md:flex flex-col w-full sm:flex-row justify-between items-center">
          <Typography
            variant="h7"
            component="h1"
            sx={{ justifyContent: "space-between", alignItems: "center " }}
            className="font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1 capitalize"
          >
            Secilmis vaxt araligi ucun statistika
          </Typography>
          <Box className="sm:flex justify-around mb-2">
            <Button
              variant="contained"
              className="capitalize bg-blue-500 mr-2"
              startIcon={<FilterAltOutlinedIcon />}
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
              Axtaris filtri
            </Button>
            <Button
              variant="contained"
              className="capitalize bg-amber-500 mr-2"
              startIcon={<NoteAddOutlinedIcon />}
              onClick={() => {
                downloadExcel();
              }}
            >
              Excel-e kocur
            </Button>
            <Button
              variant="contained"
              className="capitalize bg-rose-500"
              startIcon={<PictureAsPdfOutlinedIcon />}
              onClick={() => {
                downloadPDF();
              }}
            >
              PDF-e kocur
            </Button>
          </Box>
        </Box>
        <Box
          className="sm:flex flex-col sm:flex-row  w-full h-[240px] text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
          dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white justify-around
        items-center text-text5"
        >
          <Box className="flex flex-col">
            <Typography className="flex justify-center">Aktiv</Typography>
            <Typography className=" justify-center text-textDark2 dark:text-text2 text-3xl mb-1 flex items-center before:mr-[15px] before:content-[''] before:flex before:w-[5px] before:h-[5px] before:rounded-sm before:bg-amber-500 mt-3">
              0
            </Typography>
          </Box>
          <Box>
            <Typography className="flex justify-center">
              Dayandirilib
            </Typography>
            <Typography className=" justify-center text-textDark2 dark:text-text2 text-3xl mb-1 flex items-center before:mr-[15px] before:content-[''] before:flex before:w-[5px] before:h-[5px] before:rounded-sm before:bg-rose-500 mt-3">
              0
            </Typography>
          </Box>
          <Box>
            <Typography className="flex justify-center">Umumi</Typography>
            <Typography className=" justify-center text-textDark2 dark:text-text2 text-3xl mb-1 flex items-center before:mr-[15px] before:content-[''] before:flex before:w-[5px] before:h-[5px] before:rounded-sm before:bg-green-300 mt-3">
              0
            </Typography>
          </Box>
        </Box>
        <Box className="flex w-full flex-col flex-start">
          <Typography
            variant="h7"
            component="h1"
            sx={{ justifyContent: "space-between", alignItems: "center " }}
            className="font-semibold text-textDark2 dark:text-text2 text-[16px] mb-1"
          >
            Tarix araligi {date.getDay()} {months[a - 1]} {date.getFullYear()} -{" "}
            {date.getDay()} {months[date.getMonth()]} {date.getFullYear()}
          </Typography>
          <TableContainer
            component={Paper}
            className=" rounded-none text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
            dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white
          items-center text-text5"
          >
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* mapla yazmaq, align center qoymaq */}

                  {tableHeaders.map((tableNames) => {
                    return (
                      <TableCell className="text-center" key={tableNames.id}>
                        {tableNames.name}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="text-center">
                      {row.question}
                    </TableCell>
                    <TableCell className="text-center">{row.results}</TableCell>
                    <TableCell className="text-center">{row.status}</TableCell>
                    <TableCell className="text-center">
                      {row.cooperative}
                    </TableCell>
                    <TableCell className="text-center">{row.complex}</TableCell>
                    <TableCell className="text-center">{row.build}</TableCell>
                    <TableCell className="text-center">
                      {row.apartment}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Drawer
        className="bg-blue/[0.5]"
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box className="flex  p-5 bg-blue-500 justify-between">
          <Typography className="">
            <FilterAltOutlinedIcon />
            Axtaris filtr
          </Typography>
          <Box
            className="cursor-pointer"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box
          className="h-full p-5 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
            dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary dark:text-white
          items-center text-text5"
        >
          <ReportsFilter />
        </Box>
      </Drawer>
    </Box>
  );
}
