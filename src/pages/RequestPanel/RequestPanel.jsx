import { useEffect, useState } from "react";
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
import { getAllRequests } from "../../app/Slicers/dataFetching/requests";
import { Folder, NewspaperOutlined } from "@mui/icons-material";
import CustomDataGrid from "../../components/UI/CustomDataGrid";
import SearchFilter from "./SearchFilter";
import Header from "../../components/UI/Header";
import Buttons from "./Buttons";
import Cookies from "js-cookie";
import { mobileColumns, desktopColumns } from "./data";
import { useScrollToUp } from "../../hooks/useScrollToUp";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  {
  }
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
  const { allRequests, loading } = useSelector((state) => state.requests);
  const [dataTableRequests, setDataTableRequests] = useState([]);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  useScrollToUp();

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
  }, [loading]);

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
      <Buttons dataTableRequests={dataTableRequests} />
      <SearchFilter />
      <Box className="bg-bgLight p-6 rounded-xl dark:bg-bgMain drop-shadow-lg p-1">
        <Box className="flex justify-between">
          <Typography className="text-white">Hamısı</Typography>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-autowidth-label">
                <Folder /> Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth-label"
                label=".......Status"
              >
                <MenuItem value="x`">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">
                <Folder /> Şöbə
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label=".......Şöbə"
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
          status={loading}
          rows={dataTableRequests}
          desktopColumns={desktopColumns}
          width={1151}
        />
      </Box>
    </Box>
  );
};

export default RequestPanel;
