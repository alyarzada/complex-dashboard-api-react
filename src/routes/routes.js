import { lazy } from "react";

// main components
import Home from "../layout/Home";
import PrivateRoute from "../layout/PrivateRoute";
import LoginProtectedRoote from "../auth/ProtectedRoote";
import ControlPanel from "../pages/ControlPanel/ControlPanel";
import LoginPage from "../auth/Login";
import Payment from "../pages/MyInvoices/Payment";

// childeren components
import ComplexPanel from "../pages/ComplexPanel/ComplexPanel";
import CalendarPage from "../pages/FullCalendar/CalendarPage";
import Profile from "../pages/Profile/Profile";
import Notifications from "../pages/Notifications/Notifications";
import NotFound404 from "../pages/NotFound404";
import Contacts from "../pages/Contact/Contacts";
import MyInvoices from "../pages/MyInvoices/MyInvoices";
import InfoTable from "../pages/InfoTable/InfoTable";
import Requests from "../pages/Managment/Requests/Requests";
import RequestPanel from "../pages/RequestPanel/RequestPanel";
import CreateNewRequest from "../pages/Managment/Requests/CreateNewRequest";
import CommunalServices from "../pages/Managment/CommunalServices/CommunalServices";
import Communal from "../pages/Managment/CommunalServices/Communal";
import EntryCards from "../pages/Managment/EntryCard/EntryCards";
import RenterRegistration from "../pages/Managment/RenterRegistration/RenterRegistration";
import AdminCreateNew from "../pages/Managment/RenterRegistration/ComplexAdmin/AdminCreateNew";
import News from "../pages/ComplexPanel/News";
import Chat from "../pages/Chat/Chat";
import SavedPosts from "../pages/ComplexPanel/SavedPosts";
import Phone from "../pages/Managment/CommunalServices/Phone";
import AllRequests from "../pages/Managment/Requests/AllRequests";
import RequestComponent from "../pages/Managment/Requests/RequestComponent";
import MeetingRoom from "../pages/Managment/LocalClub/Main/MeetingRoom";
import Massage from "../pages/Managment/LocalClub/Main/Massage";
import Cinema from "../pages/Managment/LocalClub/Main/Cinema";
import NewEntryCard from "../pages/Managment/EntryCard/NewEntryCard";
import NewParkingCard from "../pages/Managment/EntryCard/NewParkingCard";
import Menu from "../pages/Restaurant/Menu";
import Card from "../pages/Restaurant/Card";
import TenantRegistration from "../pages/ControlPanel/TenantRegistration";
import Internet from "../pages/Managment/CommunalServices/Internet";
import Tv from "../pages/Managment/CommunalServices/Tv";
import RequestDetails from "../pages/Managment/Requests/RequestDetails";
import SendNotifications from "../pages/Notifications/complexAdmin/SendNotifications";
import Reports from "../pages/Managment/Reports/reports";
import AddApartment from "../pages/AddApartment/AddApartment";
import SurveyManage from "../pages/Notifications/complexAdmin/SurveyManage";
import CreateInvoice from "../pages/CreateInvoice/CreateInvoice";
import NotificationsArchive from "../pages/Notifications/complexAdmin/NotificationsArchive";
import SentNotifications from "../pages/Notifications/complexAdmin/SentNotifications";
import SurveyCreate from "../pages/Notifications/complexAdmin/SurveyCreate/SurveyCreate";
import MTKUsers from "../pages/Apartment/MTKUsers";
import Tasks from "../pages/Tasks/Tasks";
import TaskCreate from "../pages/Tasks/TaskCreate";
import Apartments from "../pages/Apartment/Apartments";
import Building from "../pages/Apartment/Building";
import Residents from "../pages/Apartment/Residents";
import GroupOfApartments from "../pages/Apartment/GroupOfApartments";
import Employees from "../pages/Apartment/Employees";
import HousingCooperative from "../pages/Apartment/HousingCooperative";
import Complex from "../pages/Apartment/Complex";
import MTKUserCreate from "../pages/Apartment/MTKUserCreate/MTKUserCreate";

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <ControlPanel />,
      },
      {
        path: "contact",
        element: <Contacts />,
      },
      {
        path: "myinvoice",
        element: <MyInvoices />,
      },
      {
        path: "request-panel",
        element: <RequestPanel />,
      },
      {
        path: "add-apartment",
        element: <AddApartment />,
      },
      {
        path: "myinvoice/payment",
        element: <Payment />,
      },
      {
        path: "information",
        element: <InfoTable />,
      },
      {
        path: "create-invoice",
        element: <CreateInvoice />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "send-notification",
        element: <SendNotifications />,
      },
      {
        path: "sent-notifications",
        element: <SentNotifications />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "tasks/create",
        element: <TaskCreate />,
      },
      {
        path: "notifications-archive",
        element: <NotificationsArchive />,
      },
      {
        path: "surveymanage",
        element: <SurveyManage />,
      },
      {
        path: "surveymanage/create",
        element: <SurveyCreate />,
      },
      {
        path: "restaurant-menu-orders",
        element: <Menu />,
      },
      {
        path: "restaurant-menu-orders/card",
        element: <Card />,
      },
      {
        path: "communalservices",
        element: <CommunalServices />,
      },
      {
        path: "communalservices/telephone",
        element: <Phone />,
      },
      {
        path: "communalservices/utilities",
        element: <Communal />,
      },
      {
        path: "/communalservices/internet",
        element: <Internet />,
      },
      {
        path: "communalservices/tv",
        element: <Tv />,
      },
      {
        path: "requests",
        element: <Requests />,
      },
      {
        path: "requests/details/:id",
        element: <RequestDetails />,
      },
      {
        path: "user-card-request",
        element: <EntryCards />,
      },
      {
        path: "meetingroom",
        element: <MeetingRoom />,
      },
      {
        path: "massage",
        element: <Massage />,
      },
      {
        path: "cinema",
        element: <Cinema />,
      },
      {
        path: "user-tenant-registration",
        element: <RenterRegistration />,
      },
      {
        path: "user-tenant-registration/create-new",
        element: <AdminCreateNew />,
      },
      {
        path: "tenant-registration",
        element: <TenantRegistration />,
      },
      {
        path: "user-card-request/access/create",
        element: <NewEntryCard />,
      },
      {
        path: "user-card-request/parking/create",
        element: <NewParkingCard />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "add-apartment",
        element: <AddApartment />,
      },
      {
        path: "mtk-users",
        element: <MTKUsers />,
      },
      {
        path: "apartments",
        element: <Apartments />,
      },
      {
        path: "complex",
        element: <Complex />,
      },
      {
        path: "housing-cooperative",
        element: <HousingCooperative />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "building",
        element: <Building />,
      },
      {
        path: "group-of-apartments",
        element: <GroupOfApartments />,
      },
      {
        path: "residents",
        element: <Residents />,
      },
      {
        path: "mtk-users/create",
        element: <MTKUserCreate />,
      },
      {
        path: "/requests",
        element: <Requests />,
        children: [
          {
            index: true,
            element: <AllRequests />,
          },
          {
            path: "createnewrequest",
            element: <CreateNewRequest />,
          },
          {
            path: ":type",
            element: <RequestComponent />,
          },
        ],
      },
      {
        path: "complexpanel",
        element: <ComplexPanel />,
        children: [
          {
            index: true,
            element: <News />,
          },
          {
            path: "savedposts",
            element: <SavedPosts />,
          },
        ],
      },
      {
        path: "/informing-residents",
        element: <SendNotifications />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <LoginProtectedRoote>
        <LoginPage />
      </LoginProtectedRoote>
    ),
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

export default routes;
