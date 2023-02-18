import mail from "../../assets/admin/controlPanel/mail.png";
import checklist from "../../assets/admin/controlPanel/checklist.png";
import newfile from "../../assets/admin/controlPanel/new-file (1).png";
import quote from "../../assets/admin/controlPanel/quote.png";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LightOutlinedIcon from '@mui/icons-material/LightOutlined';



export const restaurantDashboard = [
  
  
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        img: <ViewInArOutlinedIcon />,
        title: "Count of HC",
        link: "/",
        color: "#23B281"
      },
      {
        id: 2,
        img: <HomeOutlinedIcon/>,
        title: "Count of complexes",
        link: "/",
        color: "#C9B26D",
      },
      {
        id: 3,
        img: <BusinessOutlinedIcon/>,
        title: "Count of buildings",
        link: "/",
        color:"#C5AA07"
      },
      {
        id: 4,
        img: <LightOutlinedIcon/>,
        title: "Count of apartments",
        link: "/",
        color:"#3893BB"
      },
    ],
  },
  {
    id: 2,
    title: "User statistics",
    panels: [
      {
        id: 1,
        active: "Active",
        android:"Android",
        ios:"IOS",
        web:"Web",
        link: "/",
        type: 1,
      },
    ],
  },
];
