import { useTranslation } from "react-i18next";
import {
  MenuItem,
  Select,
  FormControl,
  Box,
  Typography,
  InputLabel,
} from "@mui/material";
import { Folder, NewspaperOutlined } from "@mui/icons-material";
import { mobileColumns, desktopColumns } from "./data";
import { useQuery } from "@tanstack/react-query";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import { getAllRequests } from "../../../services/requestsReqs";

import CustomDataGrid from "../../../components/UI/CustomDataGrid";
import Header from "../../../components/UI/Header";
import SearchFilter from "./SearchFilter";
import Buttons from "./Buttons";

// function CustomPagination() {
//   const apiRef = useGridApiContext();
//   const page = useGridSelector(apiRef, gridPageSelector);
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   return (
//     <Pagination
//       color="primary"
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, value) => apiRef.current.setPage(value - 1)}
//     />
//   );
// }

const RequestPanel = () => {
  useScrollToUp();

  const { data: allRequests, isLoading: loading } = useQuery({
    queryKey: ["requests"],
    queryFn: getAllRequests,
    select: (payload) => {
      console.log(payload);
      return payload.map((request) => {
        return {
          id: request?.id,
          name: request?.userData?.name,
          status: request?.status,
          requestDepartments: request?.request_departments[0],
          message: request?.message,
          startTime: "sehv format",
          endTime: request?.last_message_date,
        };
      });
    },
  });
  const { t } = useTranslation();

  console.log("hello world");

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
      <Buttons dataTableRequests={allRequests} />
      <SearchFilter />
      <Box className="bg-bgLight p-6 rounded-xl dark:bg-bgMain drop-shadow-lg">
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
          rows={allRequests}
          desktopColumns={desktopColumns}
          width={1151}
        />
      </Box>
    </Box>
  );
};

export default RequestPanel;
