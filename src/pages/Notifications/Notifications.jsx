import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridToolbar,
} from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Box, Stack, IconButton, Pagination } from "@mui/material";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import Header from "../../components/UI/Header";
import {
  getAllNotifications,
  deleteNotifications,
} from "../../app/Slicers/notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationType from "./NotificationType";
import NotificationSubject from "./NotificationSubject";

import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Cookies from "js-cookie";
import { format } from "date-fns";

const Notifications = () => {
  useScrollToUp();
  const { t, i18n } = useTranslation();
  const [selectionModel, setSelectionModel] = useState([]);
  const { notifications, status } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const columns = [
    {
      field: "type",
      headerName: t("Type"),
      width: 200,
      renderCell: (params) => <NotificationType {...params} />,
    },
    {
      field: "subject",
      headerName: t("Title"),
      width: 700,
      renderCell: (params) => <NotificationSubject {...params} />,
    },
    {
      field: "created_at",
      headerName: t("Created"),
      width: 200,
    },
  ];

  useEffect(() => {
    dispatch(getAllNotifications(Cookies.get("token")));
  }, []);

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(e, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  useEffect(() => {
    const a = document.querySelector(
      ".css-1wc5kcf-MuiButtonBase-root-MuiButton-root"
    );
    if (a !== null) {
      if (i18n.language === "az") {
        a.textContent = "ela";
      } else if (i18n.language === "en") {
        a.textContent = "good";
      } else {
        a.textContent = "rus perfecto";
      }
    }
  }, [i18n.language]);

  return (
    <div className="w-full">
      <Header
        currentPage={{
          title: "Notifications",
          icon: NotificationsOutlinedIcon,
        }}
      />
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Stack
          justifyContent="end"
          direction="row"
          spacing={2}
          className="mb-4"
        >
          <IconButton variant="contained" className="bg-slate-300 text-black">
            <DraftsOutlinedIcon />
          </IconButton>
          <IconButton variant="contained" className="bg-slate-300 text-black">
            <MarkunreadOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(deleteNotifications(selectionModel))}
            variant="contained"
            className="bg-rose-500"
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </Stack>
        <Box>
          <DataGrid
            rows={notifications
              ?.map((item) => {
                return {
                  ...item,
                  created_at: new Date(item.created_at.replace(" ", "T")),
                };
              })
              ?.sort((a, b) => b.created_at - a.created_at)
              ?.map((item) => {
                return {
                  ...item,
                  created_at: format(item?.created_at, "dd MMMM yyyy, HH:mm"),
                };
              })}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            autoHeight
            loading={status === "loading"}
            components={{
              Pagination: CustomPagination,
              // Toolbar: GridToolbar,
            }}
            onSelectionModelChange={(newSelectionModel) =>
              setSelectionModel(newSelectionModel)
            }
            selectionModel={selectionModel}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Notifications;
