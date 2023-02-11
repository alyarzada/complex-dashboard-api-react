import servicePayment from "../../assets/images/menu-panel/pbrlogo.png";
import utilities from "../../assets/images/menu-panel/utilities.svg";
import phone from "../../assets/images/menu-panel/telephone.svg";
import internet from "../../assets/images/menu-panel/internet.svg";
import cableTv from "../../assets/images/menu-panel/tv.svg";

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
