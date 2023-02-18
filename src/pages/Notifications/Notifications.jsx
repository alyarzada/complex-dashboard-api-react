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
import {
  Box,
  Stack,
  IconButton,
  Pagination,
  Typography,
  Input,
} from "@mui/material";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import Header from "../../components/UI/Header";
import {
  getAllNotifications,
  deleteNotifications,
} from "../../app/Slicers/notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationType from "./NotificationType";
import NotificationSubject from "./NotificationSubject";
import CustomDataGrid from "../../components/UI/CustomDataGrid";

import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Cookies from "js-cookie";
import { format } from "date-fns";

const Notifications = () => {
  useScrollToUp();
  const { t, i18n } = useTranslation();
  const [selectionModel, setSelectionModel] = useState([]);
  const [tableRows, setTableRows] = useState(10);
  const { notifications, status } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const [active, setActive] = useState()
  const [expand, setExpand] = useState(false)

  const isOpenedMobileTable = document.querySelectorAll('.MuiAccordionSummary-root')
  // useEffect(() => {

  //   isOpenedMobileTable.forEach(item => {
  //     item.addEventListener('click',()=>{

  //     if(item.classList.contains('Mui-expanded')) {
  //       setExpand(!expand);
  //     console.log(item.classList.contains('Mui-expanded'))

  //     }
  //     })
  //   })


  //   // isOpenedMobileTable?.foreach((element, i) => {
  //   //   setActive(i)
  //   //   element?.addEventListener('click', () => {
  //   //     element.setAttribute('open',true)
  //   //     if (element.getAttribute("open")) {
  //   //       setExpand(!expand)
  //   //       console.log("asdasd")
  //   //     }
  //   //   })
  //   //   // console.log(element);
  //   //   // console.log(typeof element.getAttribute("aria-expanded"))
  //   // });

  // }, [isOpenedMobileTable])
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
      key: expand ? "subject" : 'subject',
      label: t("Subject"),
      width: 100,
      render: (value, data) => {
        return (
          <Typography>{expand ? data.subject + " " + data.created_at : data.subject}</Typography>
        )
      }
    },
    {
      key: "type",
      label: t("Type"),
      width: 100,
    },
    {
      key: "created_at",
      label: t("Created"),
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
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className="mb-4"
        >
          <Box className="md:flex justify-between items-center hidden">
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
              Sehifede
              <Input className="w-10" defaultValue={10} onChange={handleChange}>
                10
              </Input>
              netice goster
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
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
        </Stack>

        <Box>
          <CustomDataGrid
            mobileColumns={mobileColumns}
            status={status}
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
