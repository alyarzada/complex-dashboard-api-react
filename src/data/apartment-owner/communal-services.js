import servicePayment from "../../assets/menu-panel/pbrlogo.png";
import utilities from "../../assets/menu-panel/utilities.svg";
import phone from "../../assets/menu-panel/telephone.svg";
import internet from "../../assets/menu-panel/internet.svg";
import cableTv from "../../assets/menu-panel/tv.svg";

export const mockData = [
  {
    id: 1,
    img: servicePayment,
    title: "Building service fee",
    path: "/myinvoice",
  },
  {
    id: 2,
    img: utilities,
    title: "Communal",
    path: "/communalservices/utilities",
  },
  {
    id: 3,
    img: phone,
    title: "Phone",
    path: "/communalservices/telephone",
  },
  {
    id: 4,
    img: internet,
    title: "Internet",
    path: "/communalservices/internet",
  },
  {
    id: 5,
    img: cableTv,
    title: "Cable TV",
    path: "/communalservices/tv",
  },
];
