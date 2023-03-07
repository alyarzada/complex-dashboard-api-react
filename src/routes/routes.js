import loadable from "@loadable/component";
import LoadingComponent from "../layout/LoadingComponent";

// main components
const Home = loadable(
  () => import(/* webpackChunkName: "Home" */ "../layout/Home"),
  {
    fallback: <LoadingComponent />,
  }
);
const PrivateRoute = loadable(
  () => import(/* webpackChunkName: "PrivateRoute" */ "../layout/PrivateRoute"),
  {
    fallback: <LoadingComponent />,
  }
);
const LoginProtectedRoote = loadable(
  () =>
    import(
      /* webpackChunkName: "LoginProtectedRoote" */ "../auth/ProtectedRoote"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const ControlPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "ControlPanel" */ "../pages/ControlPanel/ControlPanel"
    ),
  { fallback: <LoadingComponent /> }
);
const LoginPage = loadable(
  () => import(/* webpackChunkName: "LoginPage" */ "../auth/Login"),
  {
    fallback: <LoadingComponent />,
  }
);
const Payment = loadable(
  () => import(/* webpackChunkName: "Payment" */ "../pages/MyInvoices/Payment"),
  {
    fallback: <LoadingComponent />,
  }
);

// children components
const ComplexPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexPanel" */ "../pages/ComplexPanel/ComplexPanel"
    ),
  { fallback: <LoadingComponent /> }
);
const ComplexSelect = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexSelect" */ "../pages/ComplexSelect/ComplexSelect"
    ),
  { fallback: <LoadingComponent /> }
);
const CalendarPage = loadable(
  () =>
    import(
      /* webpackChunkName: "CalendarPage" */ "../pages/FullCalendar/CalendarPage"
    ),
  { fallback: <LoadingComponent /> }
);
const Profile = loadable(
  () => import(/* webpackChunkName: "Profile" */ "../pages/Profile/Profile"),
  {
    fallback: <LoadingComponent />,
  }
);
const Notifications = loadable(
  () =>
    import(
      /* webpackChunkName: "Notifications" */ "../pages/Notifications/Notifications"
    ),
  { fallback: <LoadingComponent /> }
);
const NotFound404 = loadable(
  () => import(/* webpackChunkName: "NotFound404" */ "../pages/NotFound404"),
  {
    fallback: <LoadingComponent />,
  }
);
const Contacts = loadable(
  () => import(/* webpackChunkName: "Contacts" */ "../pages/Contact/Contacts"),
  {
    fallback: <LoadingComponent />,
  }
);
const MyInvoices = loadable(
  () =>
    import(
      /* webpackChunkName: "MyInvoices" */ "../pages/MyInvoices/MyInvoices"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const InfoTable = loadable(
  () =>
    import(/* webpackChunkName: "InfoTable" */ "../pages/InfoTable/InfoTable"),
  {
    fallback: <LoadingComponent />,
  }
);
const PhotoEdit = loadable(
  () =>
    import(/* webpackChunkName: "PhotoEdit" */ "../pages/InfoTable/PhotoEdit"),
  {
    fallback: <LoadingComponent />,
  }
);
const Requests = loadable(
  () =>
    import(
      /* webpackChunkName: "Requests" */ "../pages/Managment/Requests/Requests"
    ),
  { fallback: <LoadingComponent /> }
);
const RequestPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestPanel" */ "../pages/RequestPanel/RequestPanel"
    ),
  { fallback: <LoadingComponent /> }
);
const CreateNewRequest = loadable(
  () =>
    import(
      /* webpackChunkName: "CreateNewRequest" */ "../pages/Managment/Requests/CreateNewRequest"
    ),
  { fallback: <LoadingComponent /> }
);
const CommunalServices = loadable(
  () =>
    import(
      /* webpackChunkName: "CommunalServices" */ "../pages/Managment/CommunalServices/CommunalServices"
    ),
  { fallback: <LoadingComponent /> }
);
const Communal = loadable(
  () =>
    import(
      /* webpackChunkName: "Communal" */ "../pages/Managment/CommunalServices/Communal"
    ),
  { fallback: <LoadingComponent /> }
);
const EntryCards = loadable(
  () =>
    import(
      /* webpackChunkName: "EntryCards" */ "../pages/Managment/EntryCard/EntryCards"
    ),
  { fallback: <LoadingComponent /> }
);
const RenterRegistration = loadable(
  () =>
    import(
      /* webpackChunkName: "RenterRegistration" */ "../pages/Managment/RenterRegistration/RenterRegistration"
    ),
  { fallback: <LoadingComponent /> }
);
const AdminCreateNew = loadable(
  () =>
    import("../pages/Managment/RenterRegistration/ComplexAdmin/AdminCreateNew"),
  { fallback: <LoadingComponent /> }
);
const News = loadable(
  () => import(/* webpackChunkName: "News" */ "../pages/ComplexPanel/News"),
  {
    fallback: <LoadingComponent />,
  }
);
const Chat = loadable(
  () => import(/* webpackChunkName: "Chat" */ "../pages/Chat/Chat"),
  {
    fallback: <LoadingComponent />,
  }
);
const SavedPosts = loadable(
  () =>
    import(
      /* webpackChunkName: "SavedPosts" */ "../pages/ComplexPanel/SavedPosts"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const Phone = loadable(
  () =>
    import(
      /* webpackChunkName: "Phone" */ "../pages/Managment/CommunalServices/Phone"
    ),
  { fallback: <LoadingComponent /> }
);
const AllRequests = loadable(
  () =>
    import(
      /* webpackChunkName: "AllRequests" */ "../pages/Managment/Requests/AllRequests"
    ),
  { fallback: <LoadingComponent /> }
);
const RequestComponent = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestComponent" */ "../pages/Managment/Requests/RequestComponent"
    ),
  { fallback: <LoadingComponent /> }
);
const MeetingRoom = loadable(
  () =>
    import(
      /* webpackChunkName: "MeetingRoom" */ "../pages/Managment/LocalClub/Main/MeetingRoom"
    ),
  { fallback: <LoadingComponent /> }
);
const Massage = loadable(
  () =>
    import(
      /* webpackChunkName: "Massage" */ "../pages/Managment/LocalClub/Main/Massage"
    ),
  { fallback: <LoadingComponent /> }
);
const Cinema = loadable(
  () =>
    import(
      /* webpackChunkName: "Cinema" */ "../pages/Managment/LocalClub/Main/Cinema"
    ),
  { fallback: <LoadingComponent /> }
);
const NewEntryCard = loadable(
  () =>
    import(
      /* webpackChunkName: "NewEntryCard" */ "../pages/Managment/EntryCard/NewEntryCard"
    ),
  { fallback: <LoadingComponent /> }
);
const NewParkingCard = loadable(
  () =>
    import(
      /* webpackChunkName: "NewParkingCard" */ "../pages/Managment/EntryCard/NewParkingCard"
    ),
  { fallback: <LoadingComponent /> }
);
const Menu = loadable(
  () => import(/* webpackChunkName: "Menu" */ "../pages/Restaurant/Menu"),
  {
    fallback: <LoadingComponent />,
  }
);
const Card = loadable(
  () => import(/* webpackChunkName: "Card" */ "../pages/Restaurant/Card"),
  {
    fallback: <LoadingComponent />,
  }
);
const TenantRegistration = loadable(
  () =>
    import(
      /* webpackChunkName: "TenantRegistration" */ "../pages/ControlPanel/TenantRegistration"
    ),
  { fallback: <LoadingComponent /> }
);
const Internet = loadable(
  () =>
    import(
      /* webpackChunkName: "Internet" */ "../pages/Managment/CommunalServices/Internet"
    ),
  { fallback: <LoadingComponent /> }
);
const Tv = loadable(
  () =>
    import(
      /* webpackChunkName: "Tv" */ "../pages/Managment/CommunalServices/Tv"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const RequestDetails = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestDetails" */ "../pages/Managment/Requests/RequestDetails"
    ),
  { fallback: <LoadingComponent /> }
);
const SendNotifications = loadable(
  () =>
    import(
      /* webpackChunkName: "SendNotifications" */ "../pages/Notifications/complexAdmin/SendNotifications"
    ),
  { fallback: <LoadingComponent /> }
);
const Reports = loadable(
  () =>
    import(
      /* webpackChunkName: "Reports" */ "../pages/Managment/Reports/reports"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const AddApartment = loadable(
  () =>
    import(
      /* webpackChunkName: "AddApartment" */ "../pages/AddApartment/AddApartment"
    ),
  { fallback: <LoadingComponent /> }
);
const SurveyManage = loadable(
  () =>
    import(
      /* webpackChunkName: "SurveyManage" */ "../pages/Notifications/complexAdmin/SurveyManage"
    ),
  { fallback: <LoadingComponent /> }
);
const CreateInvoice = loadable(
  () =>
    import(
      /* webpackChunkName: "CreateInvoice" */ "../pages/CreateInvoice/CreateInvoice"
    ),
  { fallback: <LoadingComponent /> }
);
const NotificationsArchive = loadable(
  () =>
    import(
      /* webpackChunkName: "NotificationsArchive" */ "../pages/Notifications/complexAdmin/NotificationsArchive"
    ),
  { fallback: <LoadingComponent /> }
);
const SentNotifications = loadable(
  () =>
    import(
      /* webpackChunkName: "SentNotifications" */ "../pages/Notifications/complexAdmin/SentNotifications"
    ),
  { fallback: <LoadingComponent /> }
);
const SurveyCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "SurveyCreate" */ "../pages/Notifications/complexAdmin/SurveyCreate/SurveyCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const MTKUsers = loadable(
  () =>
    import(/* webpackChunkName: "MTKUsers" */ "../pages/Apartment/MTKUsers"),
  {
    fallback: <LoadingComponent />,
  }
);
const Permission = loadable(
  () =>
    import(
      /* webpackChunkName: "Permission" */ "../pages/Apartment/Permission"
    ),
  {
    fallback: <LoadingComponent />,
  }
);

const Tasks = loadable(
  () => import(/* webpackChunkName: "Tasks" */ "../pages/Tasks/Tasks"),
  {
    fallback: <LoadingComponent />,
  }
);
const TaskCreate = loadable(
  () =>
    import(/* webpackChunkName: "TaskCreate" */ "../pages/Tasks/TaskCreate"),
  {
    fallback: <LoadingComponent />,
  }
);
const Apartments = loadable(
  () =>
    import(
      /* webpackChunkName: "Apartments" */ "../pages/Apartment/Apartments"
    ),
  {
    fallback: <LoadingComponent />,
  }
);
const Building = loadable(
  () =>
    import(/* webpackChunkName: "Building" */ "../pages/Apartment/Building"),
  {
    fallback: <LoadingComponent />,
  }
);
const Residents = loadable(
  () =>
    import(/* webpackChunkName: "Residents" */ "../pages/Apartment/Residents"),
  {
    fallback: <LoadingComponent />,
  }
);
const ResidentsCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "ResidentsCreate" */ "../pages/Apartment/ResidentsCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const GroupOfApartments = loadable(
  () =>
    import(
      /* webpackChunkName: "GroupOfApartments" */ "../pages/Apartment/GroupOfApartments"
    ),
  { fallback: <LoadingComponent /> }
);
const GroupOfApartmentsCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "GroupOfApartmentsCreate" */ "../pages/Apartment/GroupOfApartmentsCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const Employees = loadable(
  () =>
    import(/* webpackChunkName: "Employees" */ "../pages/Apartment/Employees"),
  {
    fallback: <LoadingComponent />,
  }
);
const EmployeesCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "EmployeesCreate" */ "../pages/Apartment/EmployeesCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const HousingCooperative = loadable(
  () =>
    import(
      /* webpackChunkName: "HousingCooperative" */ "../pages/Apartment/HousingCooperative"
    ),
  { fallback: <LoadingComponent /> }
);
const HousingCooperativeCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "HousingCooperativeCreate" */ "../pages/Apartment/HousingCooperativeCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const Complex = loadable(
  () => import(/* webpackChunkName: "Complex" */ "../pages/Apartment/Complex"),
  {
    fallback: <LoadingComponent />,
  }
);
const ComplexCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexCreate" */ "../pages/Apartment/ComplexCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const MTKUserCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MTKUserCreate" */ "../pages/Apartment/MTKUserCreate/MTKUserCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const MenuCategories = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuCategories" */ "../pages/Restaurant/Admin/MenuCategories"
    ),
  { fallback: <LoadingComponent /> }
);
const MenuNewCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuNewCreate" */ "../pages/Restaurant/Admin/MenuNewCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const RestaurantMenu = loadable(
  () =>
    import(
      /* webpackChunkName: "RestaurantMenu" */ "../pages/Restaurant/Admin/RestaurantMenu"
    ),
  { fallback: <LoadingComponent /> }
);
const MenuCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuCreate" */ "../pages/Restaurant/Admin/MenuCreate"
    ),
  { fallback: <LoadingComponent /> }
);
const RestaurantOrders = loadable(
  () =>
    import(
      /* webpackChunkName: "RestaurantOrders" */ "../pages/Restaurant/Admin/RestaurantOrders"
    ),
  { fallback: <LoadingComponent /> }
);
const InvoiceBill = loadable(
  () =>
    import(
      /* webpackChunkName: "InvoiceBill" */ "../pages/MyInvoices/InvoiceBill"
    ),
  {
    fallback: <LoadingComponent />,
  }
);

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
        path: "information/photoedit",
        element: <PhotoEdit />,
      },
      {
        path: "create-invoice",
        element: <CreateInvoice />,
      },
      {
        path: "/invoice-bill",
        element: <InvoiceBill />,
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
        path: "restaurantorders",
        element: <RestaurantOrders />,
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
        path: "permission",
        element: <Permission />,
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
        path: "hc-users",
        element: <MTKUsers />,
      },
      {
        path: "menucategories",
        element: <MenuCategories />,
      },
      {
        path: "menunewcreate",
        element: <MenuNewCreate />,
      },
      {
        path: "menucreate",
        element: <MenuCreate />,
      },
      {
        path: "restaurantmenu",
        element: <RestaurantMenu />,
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
        path: "complex/create",
        element: <ComplexCreate />,
      },
      {
        path: "housing-cooperative",
        element: <HousingCooperative />,
      },
      {
        path: "housing-cooperative/create",
        element: <HousingCooperativeCreate />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "employees/create",
        element: <EmployeesCreate />,
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
        path: "group-of-apartments/create",
        element: <GroupOfApartmentsCreate />,
      },
      {
        path: "residents",
        element: <Residents />,
      },
      {
        path: "residents/create",
        element: <ResidentsCreate />,
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
      {
        path: "/complex-select",
        element: <ComplexSelect />,
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
