import {
    Box,
    Typography,
    Button
  } from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Input from '@mui/material/Input';
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
// import CustomDataGrid from "../../components/UI/CustomDataGrid"
import Header from "../../components/UI/Header"
import AssignmentIcon from '@mui/icons-material/Assignment';

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
  const desktopColumns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "Müraciət sahibi",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/requests/details/${params.row.id}`}>{params.row.name}</Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        if (params.row.status === 1) {
          return (
            <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">
              Aşağı
            </Typography>
          );
        } else if (params.row.status === 2) {
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
      field: "requestDepartments",
      headerName: "Şöbə",
      width: 150,
    },
    {
      field: "message",
      headerName: "Müraciət",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    { field: "startTime", headerName: "Başlama tarixi", width: 160 },
    { field: "endTime", headerName: "Bitmə tarixi", width: 160 },
  ];

const dataTableRequests=[
    {
        id:0,

    },
    {
        id:0,

    },
    {
        id:0,

    },
    {
        id:0,

    },
    {
        id:0,

    },
]

const Tasks = () => {
    const { t } = useTranslation();

    const [tableRows, setTableRows] = useState(10);
    

    const handleChange = (e) =>{
        if(parseInt(e.target.value)<=100)
        setTableRows(parseInt(e.target.value));
        else setTableRows(100);
    }

    return (
        <Box>
            <Header
            currentPage={{
                title: "Tasks",
                icon: AssignmentIcon,
            }}
            />
            <Box className="flex gap-3 justify-end">
                <Button className="capitalize bg-[#ffbc00]" variant="contained">Excele kocur</Button>
                <Button className="capitalize bg-[#0acf97]" variant="contained">pdfe kocur</Button>
                <Button className="capitalize bg-[#c9b26d]" variant="contained">arxiv</Button>
            </Box>
            <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
                <Box className="w-full flex flex-col sm:flex-row justify-end">
                <Link to="/tasks/create">
                    <Button
                        variant="contained"
                        startIcon={<AddCircleOutlinedIcon/>}
                        className="capitalize bg-rose-500 text-white"
                    >
                        Yenisini yaradin
                    </Button>
                </Link>
                </Box>
                <Box className="lg:flex justify-between items-center ">
                    <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
                        Sehifede
                        <Input className="w-10" defaultValue={10} onChange={handleChange}>10</Input>
                        netice goster
                    </Typography>
                    <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
                        {t('Search')}:
                        <Input className="w-50" >10</Input>
                    </Typography>
                </Box>
                {/* <CustomDataGrid width={500} mobileColumns={mobileColumns} rows={dataTableRequests} desktopColumns={desktopColumns}/> */}
            </Box>
        </Box>
    );
}

export default Tasks;
