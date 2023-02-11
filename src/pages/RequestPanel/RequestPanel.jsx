import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  MenuItem,
  Select,
  Stack,
  FormControl,
  Box,
  InputLabel,
  Pagination,
  useMediaQuery,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { getAllRequests } from "../../app/Slicers/requests";
import { Folder, NewspaperOutlined } from "@mui/icons-material";
import CustomDataGrid from "../../components/UI/CustomDataGrid";
import SearchFilter from "./SearchFilter";
import Header from "../../components/UI/Header";
import Buttons from "./Buttons";
import Cookies from "js-cookie";
import ResponsiveTable from "material-ui-next-responsive-table";

import { mobileColumns, desktopColumns } from "./data";

const statusOptions = [
  {
    label: "Yeni",
    value: "new",
  },
  {
    label: "Aktiv",
    value: "active",
  },
  {
    label: "Bağlı",
    value: "closed",
  },
];

const departmentOptions = [
  {
    label: "Təmizlik",
    value: "housekeeping",
  },
  {
    label: "Mühafizə",
    value: "security",
  },
  {
    label: "Reception",
    value: "reception",
  },
  {
    label: "Texniki heyət",
    value: "techniques",
  },
  {
    label: "Logistika",
    value: "logistik",
  },
  {
    label: "İnspector",
    value: "inspector",
  },
  {
    label: "LC",
    value: "lc",
  },
  {
    label: "HSE",
    value: "hse",
  },
];

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

const RequestPanel = () => {
  const { allRequests, status } = useSelector((state) => state.requests);
  const [dataTableRequests, setDataTableRequests] = useState([]);
  const matches = useMediaQuery("(min-width:768px)");

  const [statusValue, setStatusValue] = useState("");
  const [department, setDepartment] = useState("");

  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRequests(Cookies.get("token")));
  }, []);

  useEffect(() => {
    if (allRequests?.length > 0) {
      setDataTableRequests(
        allRequests?.map((request) => {
          return {
            id: request?.id,
            name: request?.userData?.name,
            status: request?.status,
            requestDepartments: request?.request_departments[0],
            message: request?.message,
            startTime: "sehv format",
            endTime: request?.last_message_date,
          };
        })
      );
    }
  }, [status]);

  return (
    <Box>
      <Box className="mb-4">
        <Header
          currentPage={{
            title: t(["Request"]),
            icon: NewspaperOutlined,
          }}
        />
      </Box>

      {/* buttons */}
      <Buttons dataTableRequests={dataTableRequests} />

      {/* search filter */}
      <SearchFilter />

      <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg p-3">
        <Stack
          className="my-6"
          direction="row"
          justifyContent="space-between"
          alignaItems="center"
        >
          <Typography className="text-text1 font-semibold">Hamısı</Typography>
          <Stack direction="row" justifyContent="end" spacing={2}>
            <FormControl className="w-[150px]">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={statusValue}
                label="Status"
                onChange={(e) => setStatusValue(e.target.value)}
              >
                {statusOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className="w-[150px]">
              <InputLabel id="demo-simple-select-label">Şöbə</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="Şöbə"
                onChange={(e) => setDepartment(e.target.value)}
              >
                {departmentOptions.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Stack>

        <Box>
          <Box style={{ height: 1151, width: "100%" }} className="mt-4 md:mt-0">
            <DataGrid
              rows={dataTableRequests}
              columns={desktopColumns}
              pageSize={20}
              rowsPerPageOptions={[7]}
              checkboxSelection
              loading={status === "loading"}
              components={{
                Pagination: CustomPagination,
              }}
            />
            {/* {matches ? (
              <DataGrid
                rows={dataTableRequests}
                columns={desktopColumns}
                pageSize={20}
                rowsPerPageOptions={[7]}
                checkboxSelection
                loading={status === "loading"}
                components={{
                  Pagination: CustomPagination,
                }}
              />
            ) : status === "loading" ? (
              <Typography className="text-text1">Loading...</Typography>
            ) : (
              <ResponsiveTable
                columns={mobileColumns}
                data={dataTableRequests}
              />
            )} */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestPanel;
