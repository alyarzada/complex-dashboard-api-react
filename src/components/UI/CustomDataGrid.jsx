import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Pagination,
  useMediaQuery,
  Stack,
} from "@mui/material";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { getAllRequests } from "../../app/Slicers/requests";
import ResponsivePagination from "./ResponsivePagination";
import Cookies from "js-cookie";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      className="text-white"
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}
const RequestPanel = ({
  mobileColumns,
  desktopColumns,
  status,
  rows,
  width,
}) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const handleChange = (event, value) => {
    setPaginationPage(value);
  };
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
  return (
    <Box>
      <Box
        style={
          matches == false
            ? { height: "auto", width: "100%" }
            : { height: width, width: "100%" }
        }
        className="mt-4 md:mt-0"
      >
        {matches ? (
          <DataGrid
            rows={rows}
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
          <Stack spacing={2}>
            <ResponsivePagination
              page={paginationPage}
              data={rows}
              columns={mobileColumns}
            />
            <Pagination
              count={rows.length / 10}
              page={paginationPage}
              onChange={handleChange}
            />
          </Stack>
          //   <ResponsiveTable
          //     columns={mobileColumns}
          //     data={rows}
          //   />
        )}
      </Box>
    </Box>
  );
};

export default RequestPanel;
