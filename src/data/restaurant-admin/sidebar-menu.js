import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

export const restaurantsidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: HomeOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Restourant",
    icon: NewspaperOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "Menu categories",
        path: "/",
      },
      {
        title: "menu",
        path: "/",
      },
      {
        title: "Orders",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Complex Panel",
    icon: ReceiptLongIcon,
    path: "/complexpanel",
  },
  {
    id: 4,
    title: "Requests",
    icon: NotificationsOutlinedIcon,
    path: "/requests",
  },
];
