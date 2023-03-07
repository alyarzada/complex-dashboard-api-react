import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Box, Pagination, useMediaQuery, Stack } from "@mui/material";
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
const CustomDataGrid = ({
  mobileColumns,
  desktopColumns,
  status,
  rows,
  pageSize = 20,
  disableColumnFilter = true,
  disableColumnSelector = true,
  disableColumnMenu = true,
  ...props
}) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const handleChange = (event, value) => {
    setPaginationPage(value);
  };
  const matches = useMediaQuery("(min-width:768px)");
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
            : { width: "100%" }
        }
        className="mt-4 pb-5 md:mt-0"
      >
        {matches ? (
          <DataGrid
            rows={rows}
            columns={desktopColumns}
            pageSize={pageSize}
            rowsPerPageOptions={[7]}
            loading={status === "loading"}
            autoHeight
            disableColumnFilter={disableColumnFilter}
            disableColumnSelector={disableColumnSelector}
            disableColumnMenu={disableColumnMenu}
            components={{
              Pagination: CustomPagination,
            }}
            sx={{
              borderColor: "transparent",
              "& .MuiDataGrid-cell": {
                borderColor: "text-textDark2",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderColor: "#f0f2f566",
              },
              "& .MuiDataGrid-columnSeparator ": {
                display: "none",
              },
            }}
            {...props}
          />
        ) : (
          <Stack spacing={2}>
            <ResponsivePagination
              page={paginationPage}
              data={rows}
              columns={mobileColumns}
            />
            <Pagination
              count={parseInt(rows.length / 10)}
              page={paginationPage}
              onChange={handleChange}
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default CustomDataGrid;
