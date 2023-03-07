import housekeeping from "../../assets/svg/housekeeping.svg";
import crosswrench from "../../assets/svg/cross-wrench.svg";
import reception from "../../assets/svg/reception.svg";
import officer from "../../assets/svg/officer.svg";
import team from "../../assets/svg/team.svg";
import restaurant from "../../assets/svg/restaurant.svg";
import addfriend from "../../assets/svg/add-friend.svg";
import subscribe from "../../assets/svg/subscribe.svg";
import idcard from "../../assets/svg/id-card.svg";
import portmaniaLogo from "../../assets/menu-panel/portmania_logo.png";
import call from "../../assets/menu-panel/call.png";
import complaint from "../../assets/menu-panel/complaint.png";
import request from "../../assets/menu-panel/request.png";
import electrician from "../../assets/menu-panel/electrician.png";
import mechanic from "../../assets/menu-panel/mechanic.png";
import guest from "../../assets/menu-panel/guest.png";
import cinema from "../../assets/menu-panel/cinema.png";
import massage from "../../assets/menu-panel/massage.png";
import meeting from "../../assets/menu-panel/meeting.png";

import car from "../../assets/menu-panel/car.png";
import door from "../../assets/menu-panel/door.png";
import servicePayment from "../../assets/menu-panel/pbrlogo.png";
import money from "../../assets/svg/money.svg";
import phone from "../../assets/svg/phone.svg";
import wifisignal from "../../assets/svg/wifi-signal.svg";
import cableTv from "../../assets/menu-panel/tv.svg";

export const dashboardPanels = [
  {
    id: 1,
    title: "",
    panels: [
      {
        id: 1,
        img: servicePayment,
        title: "Building service fee",
        link: "/myinvoice",
      },
      {
        id: 2,
        img: housekeeping,
        title: "Housekeeping",
        subCategory: [
          {
            img: request,
            title: "Requests",
            requestType: 15,
            requestDepartment: 3,
          },
          {
            img: complaint,
            title: "Complaint",
            type: "form",
            createForm: true,
            requestType: 13,
            requestDepartment: 3,
          },
          {
            img: call,
            title: "Call",
            name: "",
            department: "",
          },
        ],
      },
      {
        id: 3,
        img: crosswrench,
        title: "Maintenance",
        subCategory: [
          {
            img: electrician,
            title: "An electrician",
            requestType: 15,
            requestDepartment: 6,
          },
          {
            img: mechanic,
            title: "Mechanic",
            requestType: 15,
            requestDepartment: 6,
          },
          {
            img: request,
            title: "Request",
            type: "form",
            createForm: true,
            requestType: 15,
            requestDepartment: 6,
          },
          {
            img: call,
            title: "Call",
          },
        ],
      },
      {
        id: 4,
        img: reception,
        title: "Reception",
        subCategory: [
          {
            img: request,
            title: "Request",
            requestType: 15,
            requestDepartment: 5,
            type: "form",
            createForm: true,
          },
          {
            img: guest,
            title: "Guest request",
            requestType: 15,
            requestDepartment: 5,
            type: "form",
            createForm: true,
          },
          {
            img: call,
            title: "Call",
          },
        ],
      },
      {
        id: 5,
        img: officer,
        title: "Security",
        subCategory: [
          {
            img: request,
            title: "Request",
            requestType: 15,
            requestDepartment: 4,
          },
          {
            img: complaint,
            title: "Complaint",
            type: "form",
            createForm: true,
            requestType: 15,
            requestDepartment: 4,
          },
          {
            img: call,
            title: "Call",
          },
        ],
      },
      {
        id: 6,
        img: team,
        title: "Leisure club",
        subCategory: [
          {
            img: meeting,
            title: "Meeting room",
            link: "/meetingroom",
          },
          {
            img: cinema,
            title: "Cinema",
            link: "/cinema",
          },
          {
            img: massage,
            title: "Massage",
            link: "/massage",
          },
        ],
      },
      {
        id: 7,
        img: restaurant,
        title: "Room Service",
        link: "/restaurant-menu-orders",
      },
      {
        id: 8,
        img: addfriend,
        title: "Tenant Registration",
        category: "tenant",
        type: "form",
      },
      {
        id: 9,
        img: subscribe,
        title: "Notifications",
        link: "/notifications",
      },
      {
        id: 10,
        img: idcard,
        title: "Card Request",
        subCategory: [
          {
            img: car,
            title: "Parking",
            type: "form",
            createForm: true,
            requestType: "rtype",
            requestDepartment: "Parking card",
          },
          {
            img: door,
            title: "Access",
            type: "form",
            createForm: true,
            requestType: "rtype",
            requestDepartment: "Access card",
          },
        ],
      },
      {
        id: 11,
        img: portmaniaLogo,
        title: "Portmania",
        link: "https://www.instagram.com/portmania.az/",
      },
    ],
  },
  {
    id: 2,
    title: "Communal Services payment",
    panels: [
      {
        id: 1,
        img: money,
        title: "Communal",
        link: "/communalservices/utilities",
      },
      {
        id: 2,
        img: phone,
        title: "Telephone",
        link: "/communalservices/telephone",
      },
      {
        id: 3,
        img: wifisignal,
        title: "Internet",
        link: "/communalservices/internet",
      },
      {
        id: 4,
        img: cableTv,
        title: "Cable TV",
        link: "/communalservices/tv",
      },
    ],
  },
];
