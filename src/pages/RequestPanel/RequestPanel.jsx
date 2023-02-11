import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  MenuItem,
  Select,
  Button,
  FormControl,
  Box,
  Typography,
  InputLabel,
  Pagination,
  useMediaQuery,
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
import CustomDataGrid from "../../components/UI/CustomDataGrid"
import SearchFilter from "./SearchFilter";
import Header from "../../components/UI/Header";
import Buttons from "./Buttons";
import Cookies from "js-cookie";
import ResponsiveTable from "material-ui-next-responsive-table";

import { mobileColumns, desktopColumns } from "./data";

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

      <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-white drop-shadow-lg p-1">
        <Box className="flex justify-between">
          <Typography className="text-white">Hamısı</Typography>
          <Box>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="bg-slate-500"
            >
              <InputLabel id="demo-simple-select-autowidth-label">
                <Folder /> Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              size="small"
              className="bg-slate-500"
            >
              <InputLabel id="demo-select-small">
                <Folder /> Şöbə
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <CustomDataGrid 
          mobileColumns={mobileColumns} 
          status={status} 
          rows={dataTableRequests} 
          desktopColumns={desktopColumns}
          width={1151}
        />
      </Box>
    </Box>
  );
};

export default RequestPanel;
