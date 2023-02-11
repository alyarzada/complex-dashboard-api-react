import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export const requestPanels = [
  {
    id: 1,
    title: "All applications",
    type: "",
    icon: DraftsOutlinedIcon,
    path: "/requests",
  },
  {
    id: 2,
    title: "Question",
    type: 11,
    icon: HelpOutlineOutlinedIcon,
    path: "/requests",
  },
  {
    id: 3,
    title: "Offer",
    type: 12,
    icon: AssistantOutlinedIcon,
    path: "/requests",
  },
  {
    id: 4,
    title: "Complaint",
    type: 13,
    icon: ReportProblemOutlinedIcon,
    path: "/requests",
  },
  {
    id: 5,
    title: "Info",
    type: 14,
    icon: InfoOutlinedIcon,
    path: "/requests",
  },
  {
    id: 6,
    title: "Calling",
    type: 15,
    icon: ReportProblemOutlinedIcon,
    path: "/requests",
  },
  {
    id: 7,
    title: "Archive",
    type: "archive",
    icon: Inventory2OutlinedIcon,
    path: "/requests",
  },
];
