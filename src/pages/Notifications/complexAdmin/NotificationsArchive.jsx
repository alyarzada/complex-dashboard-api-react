import React, {useState,useEffect} from "react";
import { Box, Button, Typography, Pagination, } from "@mui/material";
import Header from "../../../components/UI/Header";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useTranslation } from "react-i18next";
import Input from '@mui/material/Input';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';

import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "Müraciət sahibi",
      width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <Link to={`/requests/details/${params.row.id}`}>{params.row.name}</Link>
    //     );
    //   },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    //   renderCell: (params) => {
    //     if (params.row.status === 1) {
    //       return (
    //         <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">
    //           Aşağı
    //         </Typography>
    //       );
    //     } else if (params.row.status === 2) {
    //       return (
    //         <Typography className="text-xs bg-red-500 text-white py-1 px-2 rounded">
    //           Yüksək
    //         </Typography>
    //       );
    //     } else {
    //       return (
    //         <Typography className="text-xs bg-green-600 text-white py-1 px-2 rounded">
    //           Normal
    //         </Typography>
    //       );
    //     }
    //   },
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
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  const filterData =[
    {
      title:"asdsda",
    },
    {
      title:"asdsda",
    },
    {
      title:"asdsda",
    },
    {
      title:"asdsda",
    },
    {
      title:"asdsda",
    },
  ]

const SurveyManage = () => {
  const { t } = useTranslation();
  const [dataTableRequests, setDataTableRequests] = useState([]);
  const [tableRows, setTableRows] = useState(10);
  const [menu, setMenu] = useState();
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  const handleChange = (e) =>{
    if(parseInt(e.target.value)<=10)
      setTableRows(parseInt(e.target.value));
    else setTableRows(10);
  }

  console.log(rows.length)
  return (
    <Box className="w-full">
        <Header
          currentPage={{
            title: t(["Informing residents"]),
            icon: NewspaperOutlinedIcon,
          }}
        />
        <Box className="my-4 py-4 px-6 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
          <Box className="flex justify-between">
            <Button
              className="capitalize flex items-center gap-1 dark:text-text1 text-white dark:bg-yellow-600 bg-yellow-400"
              variant="contained"
              title="asd"
              onClick={handleClick}
            >
              <FolderIcon/>Change Status<KeyboardArrowDownIcon/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={menu}
              open={menu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Typography className="px-5">Change status:</Typography>
              <MenuItem onClick={handleClose}><SwitchLeftIcon className="rotate-90"/><span className="text-blue-500">Pending</span>{`=>`}<span className="text-yellow-400">Stopped</span></MenuItem>
              <MenuItem onClick={handleClose}><SwitchLeftIcon className="rotate-90"/><span className="text-amber-400">Stopped</span>{`=>`}<span className="text-blue-500">Pending</span></MenuItem>
              <MenuItem onClick={handleClose}><SwitchLeftIcon className="rotate-90"/><span className="text-red-500">Error</span>{`=>`}<span className="text-blue-500">Pending</span></MenuItem>
            </Menu>
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">SMS balance: <span className=" px-1 bg-sky-500 rounded text-white dark:text-text1">{rows.length}</span></Typography>
          </Box>
            <Box className="lg:flex justify-between items-center ">
                <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
                    Sehifede
                    <Input className="w-10" defaultValue={10} onChange={handleChange}>10</Input>
                    netice goster
                </Typography>
                <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
                    Axtaris:
                    <Input className="w-50" >10</Input>
                </Typography>
            </Box>
            <Box style={{ height: `${tableRows*52+127}px`, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={tableRows}
              rowsPerPageOptions={[7]}
            //   loading={status === "loading"}
              components={{
                Pagination: CustomPagination,
              }}
              // {...data}
            />
            </Box>

        </Box>
    </Box>
  );
};

export default SurveyManage;
