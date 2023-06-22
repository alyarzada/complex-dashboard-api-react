import mail from "../../assets/admin/controlPanel/mail.png";
import checklist from "../../assets/admin/controlPanel/checklist.png";
import newfile from "../../assets/admin/controlPanel/new-file (1).png";
import quote from "../../assets/admin/controlPanel/quote.png";
import home from "../../assets/admin/controlPanel/home.png";
import invoice from "../../assets/admin/controlPanel/invoice.png";
import inferentialstatistics from "../../assets/admin/controlPanel/inferential-statistics.png";
import smartphones from "../../assets/admin/controlPanel/smartphones.png";

export const adminDashboardPanels = [
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        img: mail,
        title: "Informing residents",
        link: "/send-notification",
      },
      {
        id: 2,
        img: checklist,
        title: "Conduct a survey",
        link: "/surveymanage",
      },
      {
        id: 3,
        img: newfile,
        title: "Create New Request",
        link: "/requests/createnewrequest",
        // link: "/reporting/surveys",
      },
      {
        id: 4,
        img: quote,
        title: "Requests",
        link: "/request-panel",
      },
      {
        id: 5,
        img: home,
        title: "Add Apartment",
        link: "/apartments/create",
      },
      {
        id: 6,
        img: invoice,
        title: "Create invoice",
        link: "/create-invoice",
      },
      {
        id: 7,
        img: inferentialstatistics,
        title: "Reporting",
        link: "/reports",
      },
      {
        id: 8,
        img: smartphones,
        title: "Chat",
        link: "/chat",
      },
    ],
  },
];
