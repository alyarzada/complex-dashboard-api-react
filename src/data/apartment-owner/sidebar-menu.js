import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ViewComfyAltOutlinedIcon from "@mui/icons-material/ViewComfyAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const sidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: HomeOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Complex Wall",
    icon: NewspaperOutlinedIcon,
    path: "/complexpanel",
  },
  {
    id: 3,
    title: "My Invoices",
    icon: ReceiptLongIcon,
    path: "/myinvoice",
  },
  {
    id: 4,
    title: "Notifications",
    icon: NotificationsOutlinedIcon,
    path: "/notifications",
  },
  {
    id: 5,
    title: "Requests",
    icon: CommentOutlinedIcon,
    path: "/requests",
  },
  {
    id: 6,
    title: "Communal Services",
    icon: ViewComfyAltOutlinedIcon,
    path: "/communalservices",
  },
  {
    id: 7,
    title: "Leisure club",
    icon: PoolOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "Meeting room",
        path: "/meetingroom",
      },
      {
        title: "Cinema",
        path: "/cinema",
      },
      {
        title: "Massage",
        path: "/massage",
      },
    ],
  },
  {
    id: 8,
    title: "Card Request",
    icon: CreditCardOutlinedIcon,
    path: "/user-card-request",
  },
  {
    id: 9,
    title: "Tenant Registration",
    icon: PersonAddAltOutlinedIcon,
    path: "/user-tenant-registration",
  },
  { id: 10, title: "Contact", icon: LocalPhoneOutlinedIcon, path: "/contact" },
  {
    id: 11,
    title: "Information desk",
    icon: InfoOutlinedIcon,
    path: "/information",
  },
  {
    id: 12,
    title: "User",
    icon: AccountCircleOutlinedIcon,
    path: "",
    sublist: [
      {
        id: 1,
        title: "Profile",
        icon: PersonOutlineOutlinedIcon,
        path: "/profile",
      },
      {
        id: 2,
        title: "Chat",
        icon: TelegramIcon,
        path: "/chat",
      },
    ],
  },
];
