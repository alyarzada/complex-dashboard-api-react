import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

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
        icon: IndeterminateCheckBoxOutlinedIcon,
        path: "/menucategories",
      },
      {
        title: "menu",
        icon: LayersOutlinedIcon,
        path: "/restaurantmenu",
      },
      {
        title: "Orders",
        icon: LocalLibraryOutlinedIcon,
        path: "/restaurantorders",
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
