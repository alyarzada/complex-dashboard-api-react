import { useState } from "react";
import { Box, Button, Typography, Pagination } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import CustomSearchFilter from "../../../components/UI/CustomSearchFilter";
import Header from "../../../components/UI/Header";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "name",
    headerName: "Müraciət sahibi",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
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

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

const SurveyManage = () => {
  const { t } = useTranslation();
  const [tableRows, setTableRows] = useState(10);
  const { role_id } = useSelector((state) => state.user);
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

  const handleChange = (e) => {
    if (parseInt(e.target.value) <= 100) setTableRows(parseInt(e.target.value));
    else setTableRows(100);
  };

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: t(["Complex"]),
          icon: LocationCityIcon,
        }}
      />
      <Box className="my-4 py-4 px-6 flex flex-col gap-5 rounded drop-shadow-lg bg-bgLight dark:bg-bgMain w-full">
        {role_id == 2 ? (
          <Box className="w-full flex flex-col sm:flex-row justify-end">
            <Link to="/complex/create">
              <Button
                variant="contained"
                startIcon={<AddCircleOutlinedIcon />}
                className="capitalize bg-rose-500 text-white"
              >
                Yenisini yaradin
              </Button>
            </Link>
          </Box>
        ) : null}
        <Box className="lg:flex gap-5 ">
          <Box className="lg:w-[30%]">
            <CustomSearchFilter
              hidden1={true}
              hidden2={true}
              hidden3={true}
              flex={true}
            />
          </Box>
          <Box className="lg:w-[70%]">
            <Box className="lg:flex justify-between items-center ">
              <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
                Sehifede
                <Input
                  className="w-10"
                  defaultValue={1}
                  onChange={handleChange}
                >
                  10
                </Input>
                netice goster
              </Typography>
              <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
                {t("Search")}:<Input className="w-50">10</Input>
              </Typography>
            </Box>
            <Box style={{ height: `${tableRows * 52 + 127}px`, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={tableRows}
                rowsPerPageOptions={[7]}
                components={{
                  Pagination: CustomPagination,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SurveyManage;
