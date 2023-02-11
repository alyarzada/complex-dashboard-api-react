import clean from "../../assets/images/menu-panel/housekeeping.png";
import maintenance from "../../assets/images/menu-panel/maintenance.png";
import reception from "../../assets/images/menu-panel/reception.png";
import security from "../../assets/images/menu-panel/security.png";
import leisureClub from "../../assets/images/menu-panel/leisure-club.png";
import roomService from "../../assets/images/menu-panel/room-service.png";
import tenantRegistration from "../../assets/images/menu-panel/tenant-registration.png";
import notifications from "../../assets/images/menu-panel/notifications.png";
import cardRequest from "../../assets/images/menu-panel/card-request.png";
import portmaniaLogo from "../../assets/images/menu-panel/portmania_logo.png";
import call from "../../assets/images/menu-panel/call.png";
import complaint from "../../assets/images/menu-panel/complaint.png";
import request from "../../assets/images/menu-panel/request.png";
import electrician from "../../assets/images/menu-panel/electrician.png";
import mechanic from "../../assets/images/menu-panel/mechanic.png";
import guest from "../../assets/images/menu-panel/guest.png";
import cinema from "../../assets/images/menu-panel/cinema.png";
import massage from "../../assets/images/menu-panel/massage.png";
import meeting from "../../assets/images/menu-panel/meeting.png";

import car from "../../assets/images/menu-panel/car.png";
import door from "../../assets/images/menu-panel/door.png";
import servicePayment from "../../assets/images/menu-panel/pbrlogo.png";
import utilities from "../../assets/images/menu-panel/utilities.svg";
import phone from "../../assets/images/menu-panel/telephone.svg";
import internet from "../../assets/images/menu-panel/internet.svg";
import cableTv from "../../assets/images/menu-panel/tv.svg";

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
        img: clean,
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
        img: maintenance,
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
        img: security,
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
        img: leisureClub,
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
        img: roomService,
        title: "Room Service",
        link: "/restaurant-menu-orders",
      },
      {
        id: 8,
        img: tenantRegistration,
        title: "Tenant Registration",
        category: "tenant",
        type: "form",
      },
      {
        id: 9,
        img: notifications,
        title: "Notifications",
        link: "/notifications",
      },
      {
        id: 10,
        img: cardRequest,
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
        img: utilities,
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
        img: internet,
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