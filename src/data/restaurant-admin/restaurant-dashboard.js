import mail from "../../assets/admin/controlPanel/mail.png";
import checklist from "../../assets/admin/controlPanel/checklist.png";
import newfile from "../../assets/admin/controlPanel/new-file (1).png";
import quote from "../../assets/admin/controlPanel/quote.png";

export const restaurantDashboard = [
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        img: mail,
        title: "Informing residents",
        link: "/",
      },
      {
        id: 2,
        img: checklist,
        title: "Conduct a survey",
        link: "/",
      },
      {
        id: 3,
        img: newfile,
        title: "Create New Request",
        link: "/",
      },
      {
        id: 4,
        img: quote,
        title: "Requests",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "İstifadəçi statistikası",
    panels: [
      {
        id: 1,
        img: mail,
        title: "Informing residents",
        link: "/",
      },
    ],
  },
];
