import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import {
  Box,
  Stack,
  Select,
  IconButton,
  Pagination,
  Typography,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import { getAllNotifications } from "../../services/notificationsReqs";
import Header from "../../components/UI/Header";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationType from "./NotificationType";
import NotificationSubject from "./NotificationSubject";
import CustomDataGrid from "../../components/UI/CustomDataGrid";

import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomMenu from "../../components/UI/Modals/CustomMenu";

const Notifications = () => {
  useScrollToUp();
  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: getAllNotifications,
  });
  const [tableRows, setTableRows] = useState(10);
  const [openMenu, setOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const btnRef = useRef(null);

  const columns = [
    {
      field: "type",
      headerName: t("Type"),
      flex: 1,
      renderCell: (params) => <NotificationType {...params} />,
    },
    {
      field: "subject",
      headerName: t("Title"),
      flex: 2,
      renderCell: (params) => <NotificationSubject {...params} />,
    },
    {
      field: "created_at",
      headerName: t("Date"),
      flex: 1,
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
        onChange={(e, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  const handleChange = (e) => {
    if (parseInt(e.target.value) <= 100) setTableRows(parseInt(e.target.value));
    else setTableRows(100);
  };

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

  const mobileColumns = [
    {
      key: "subject",
      label: t("Subject"),
      width: 100,
      render: (value, data) => {
        return (
          <Typography>
            {5 > 0 ? data.subject + " " + data.created_at : data.subject}
          </Typography>
        );
      },
    },
    {
      key: "type",
      label: t("Type"),
      width: 100,
    },
    {
      key: "created_at",
      label: t("Date"),
      width: 150,
    },
  ];
  return (
    <div className="w-full">
      <Header
        currentPage={{
          title: "Notifications",
          icon: NotificationsOutlinedIcon,
        }}
      />
      <Box className="py-6 px-6 rounded-xl bg-bgLight dark:bg-bgMain  drop-shadow-lg w-full">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className="mb-4"
        >
          <Box className="md:flex justify-between items-center hidden">
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
              {t("On the page")}
              <FormControl variant="filled">
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={tableRows}
                  onChange={handleChange}
                  className="h-[30px] pb-3"
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={100}>100</MenuItem>
                  <MenuItem value={250}>250</MenuItem>
                  <MenuItem value={500}>500</MenuItem>
                </Select>
              </FormControl>
              {t("show results")}
            </Typography>
          </Box>

          <Box>
            <IconButton
              ref={btnRef}
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <MoreHorizIcon />
            </IconButton>

            {openMenu ? (
              <CustomMenu
                className="top-20 right-4 width-40 text-text1"
                ref={btnRef}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              >
                <MenuItem
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="dark:text-text1 text-textDark2"
                >
                  <MarkAsUnreadOutlinedIcon className="mr-2 text-[19px]" />
                  {t("Mark as read")}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="dark:text-text1 text-textDark2"
                >
                  <MarkEmailReadOutlinedIcon className="mr-2 text-[19px]" />
                  {t("Mark as unread")}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="dark:text-text1 text-textDark2"
                >
                  <DraftsOutlinedIcon className="mr-2 text-[19px]" />

                  {t("See what's been read")}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="dark:text-text1 text-textDark2"
                >
                  <MarkunreadOutlinedIcon className="mr-2 text-[19px]" />
                  {t("See unread")}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="dark:text-text1 text-textDark2"
                >
                  <DeleteForeverOutlinedIcon className="mr-2 text-[19px]" />
                  {t("Delete selected")}
                </MenuItem>
              </CustomMenu>
            ) : null}
          </Box>
        </Stack>

        <Box>
          <CustomDataGrid
            mobileColumns={mobileColumns}
            status={isLoading}
            pageSize={tableRows}
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
            desktopColumns={columns}
            width={1170}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Notifications;
