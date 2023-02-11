import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ViewComfyAltOutlinedIcon from "@mui/icons-material/ViewComfyAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export const adminSidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    icon: AdminPanelSettingsOutlinedIcon,
    path: "/",
  },
  {
    id: 2,
    title: "Informing and Surveys",
    icon: NotificationsOutlinedIcon,
    sublist: [
      {
        id: 1,
        title: "Informing residents",
        icon: ForwardToInboxIcon,
        path: "/send-notification",
      },
      {
        id: 2,
        title: "Archive of Informing",
        icon: Inventory2OutlinedIcon,
        path: "/notifications-archive",
      },
      {
        id: 3,
        title: "Conduct a survey",
        icon: EmojiObjectsOutlinedIcon,
        path: "/surveymanage",
      },
      {
        id: 4,
        title: "Outgoing SMS",
        icon: TextsmsOutlinedIcon,
        path: "/sent-notifications",
      },
    ],
  },
  {
    id: 3,
    title: "Complex Wall",
    icon: NewspaperOutlinedIcon,
    path: "/complexpanel",
  },
  {
    id: 4,
    title: "Requests Board",
    icon: CommentOutlinedIcon,
    path: "/",
  },
  {
    id: 5,
    title: "Tasks",
    icon: AssignmentOutlinedIcon,
    path: "/",
  },
  {
    id: 6,
    title: "My Invoices",
    icon: ReceiptLongIcon,
    path: "/myinvoice",
  },
  {
    id: 7,
    title: "Management",
    icon: BusinessCenterOutlinedIcon,
    path: "",
    sublist: [
      {
        id: 1,
        title: "Reporting",
        icon: InsertChartOutlinedIcon,
        path: "/",
      },
      {
        id: 2,
        title: "Notifications",
        icon: NotificationsOutlinedIcon,
        path: "/",
      }, 
      {
        id: 3,
        title: "Requests",
        icon: CommentOutlinedIcon,
        path: "/requests",
      },
      {
        id: 4,
        title: "Communal Services",
        icon: ViewComfyAltOutlinedIcon,
        path: "/communalservices",
      },
      {
        id: 5,
        title: "Leisure club",
        icon: PoolOutlinedIcon,
        path: "",
        managmentSublist: [
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
        id: 6,
        title: "Card Request",
        icon: CreditCardOutlinedIcon,
        path: "/user-card-request",
      },
      {
        id: 7,
        title: "Tenant Registration",
        icon: PersonAddAltOutlinedIcon,
        path: "/user-tenant-registration",
      },
    ],
  },

  {
    id: 7,
    title: "Building",
    icon: DomainOutlinedIcon,
    sublist: [
      {
        id: 1,
        title: "HC Users",
        icon: PeopleAltOutlinedIcon,
        path: "/",
      },
      {
        id: 2,
        title: "Housing cooperative",
        icon: ViewInArOutlinedIcon,
        path: "/",
      },
      {
        id: 3,
        title: "Complex",
        icon: OtherHousesOutlinedIcon,
        path: "/",
      },
      {
        id: 4,
        title: "Building",
        icon: MapsHomeWorkOutlinedIcon,
        path: "/",
      },
      {
        id: 5,
        title: "Apartments",
        icon: DoorFrontOutlinedIcon,
        path: "/",
      },
      {
        id: 6,
        title: "Residents",
        icon: PeopleAltOutlinedIcon,
        path: "/",
      },
      {
        id: 7,
        title: "Employees",
        icon: PeopleAltOutlinedIcon,
        path: "/",
      },
      {
        id: 8,
        title: "Apartments Group",
        icon: HolidayVillageOutlinedIcon,
        path: "/",
      },
    ],
  },
  {
    id: 8,
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
