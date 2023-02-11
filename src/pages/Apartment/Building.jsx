import React, {useState,useEffect} from "react";
import { Box, Button, Typography, Pagination, } from "@mui/material";
import Header from "../../components/UI/Header";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { useTranslation } from "react-i18next";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CustomSearchFilter from "../../components/UI/CustomSearchFilter";
import Input from '@mui/material/Input';
import { Link } from "react-router-dom";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

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
  ];

const SurveyManage = () => {
  const { t } = useTranslation();
  const [dataTableRequests, setDataTableRequests] = useState([]);
  const [tableRows, setTableRows] = useState(10);
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

  const handleChange = (e) =>{
    if(parseInt(e.target.value)<=100)
      setTableRows(parseInt(e.target.value));
    else setTableRows(100);
  }

  console.log(tableRows)
  return (
    <Box className="w-full">
        <Header
          currentPage={{
            title: t(["Survey Manage"]),
            icon: EmojiObjectsOutlinedIcon,
          }}
        />
        <Box className="my-4 py-4 px-6 lg:flex gap-5 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
          <Box className="lg:w-[30%]">
            <CustomSearchFilter
                hidden2={true}
                hidden3={true}
                flex={false}
            />

          </Box>
            <Box className="lg:w-[70%]">
              <Box className="lg:flex justify-between items-center ">
                  <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
                      Sehifede
                      <Input className="w-10" defaultValue={1} onChange={handleChange}>10</Input>
                      netice goster
                  </Typography>
                  <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
                      {t('Search')}:
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
    </Box>
  );
};

export default SurveyManage;
