import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const navs = [
  {
    id: 1,
    icon: <HomeIcon />,
    path: "/",
  },
  {
    id: 2,
    icon: <DashboardIcon />,
    path: "/complexpanel",
  },
  {
    id: 3,
    icon: <ReceiptIcon />,
    path: "/myinvoice",
  },
  {
    id: 4,
    icon: <MessageIcon />,
    path: "/requests",
  },
  {
    id: 5,
    icon: <MonetizationOnIcon />,
    path: "/communalservices",
  },
];

const MobileNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-logoColor rounded-t-lg fixed left-0 bottom-0 md:hidden px-1 py-2 w-full">
      <div className="flex w-full justify-between items-center">
        {navs.map((nav) => (
          <IconButton
            className="text-[#23272c]"
            key={nav.id}
            onClick={() => navigate(nav.path)}
          >
            {nav.icon}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
