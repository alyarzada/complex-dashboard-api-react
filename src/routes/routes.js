import loadable from "@loadable/component";

// main components
const Home = loadable(
  () => import(/* webpackChunkName: "Home" */ "../layout/Home"),
  {
    fallback: <div>loading...</div>,
  }
);
const PrivateRoute = loadable(
  () => import(/* webpackChunkName: "PrivateRoute" */ "../layout/PrivateRoute"),
  {
    fallback: <div>loading...</div>,
  }
);
const LoginProtectedRoote = loadable(
  () =>
    import(
      /* webpackChunkName: "LoginProtectedRoote" */ "../auth/ProtectedRoote"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const ControlPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "ControlPanel" */ "../pages/ControlPanel/ControlPanel"
    ),
  { fallback: <div>loading...</div> }
);
const LoginPage = loadable(
  () => import(/* webpackChunkName: "LoginPage" */ "../auth/Login"),
  {
    fallback: <div>loading...</div>,
  }
);
const Payment = loadable(
  () => import(/* webpackChunkName: "Payment" */ "../pages/MyInvoices/Payment"),
  {
    fallback: <div>loading...</div>,
  }
);

// children components
const ComplexPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexPanel" */ "../pages/ComplexPanel/ComplexPanel"
    ),
  { fallback: <div>loading...</div> }
);
const ComplexSelect = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexSelect" */ "../pages/ComplexSelect/ComplexSelect"
    ),
  { fallback: <div>loading...</div> }
);
const CalendarPage = loadable(
  () =>
    import(
      /* webpackChunkName: "CalendarPage" */ "../pages/FullCalendar/CalendarPage"
    ),
  { fallback: <div>loading...</div> }
);
const Profile = loadable(
  () => import(/* webpackChunkName: "Profile" */ "../pages/Profile/Profile"),
  {
    fallback: <div>loading...</div>,
  }
);
const Notifications = loadable(
  () =>
    import(
      /* webpackChunkName: "Notifications" */ "../pages/Notifications/Notifications"
    ),
  { fallback: <div>loading...</div> }
);
const NotFound404 = loadable(
  () => import(/* webpackChunkName: "NotFound404" */ "../pages/NotFound404"),
  {
    fallback: <div>loading...</div>,
  }
);
const Contacts = loadable(
  () => import(/* webpackChunkName: "Contacts" */ "../pages/Contact/Contacts"),
  {
    fallback: <div>loading...</div>,
  }
);
const MyInvoices = loadable(
  () =>
    import(
      /* webpackChunkName: "MyInvoices" */ "../pages/MyInvoices/MyInvoices"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const InfoTable = loadable(
  () =>
    import(/* webpackChunkName: "InfoTable" */ "../pages/InfoTable/InfoTable"),
  {
    fallback: <div>loading...</div>,
  }
);
const PhotoEdit = loadable(
  () =>
    import(/* webpackChunkName: "PhotoEdit" */ "../pages/InfoTable/PhotoEdit"),
  {
    fallback: <div>loading...</div>,
  }
);
const Requests = loadable(
  () =>
    import(
      /* webpackChunkName: "Requests" */ "../pages/Managment/Requests/Requests"
    ),
  { fallback: <div>loading...</div> }
);
const RequestPanel = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestPanel" */ "../pages/RequestPanel/RequestPanel"
    ),
  { fallback: <div>loading...</div> }
);
const CreateNewRequest = loadable(
  () =>
    import(
      /* webpackChunkName: "CreateNewRequest" */ "../pages/Managment/Requests/CreateNewRequest"
    ),
  { fallback: <div>loading...</div> }
);
const CommunalServices = loadable(
  () =>
    import(
      /* webpackChunkName: "CommunalServices" */ "../pages/Managment/CommunalServices/CommunalServices"
    ),
  { fallback: <div>loading...</div> }
);
const Communal = loadable(
  () =>
    import(
      /* webpackChunkName: "Communal" */ "../pages/Managment/CommunalServices/Communal"
    ),
  { fallback: <div>loading...</div> }
);
const EntryCards = loadable(
  () =>
    import(
      /* webpackChunkName: "EntryCards" */ "../pages/Managment/EntryCard/EntryCards"
    ),
  { fallback: <div>loading...</div> }
);
const RenterRegistration = loadable(
  () =>
    import(
      /* webpackChunkName: "RenterRegistration" */ "../pages/Managment/RenterRegistration/RenterRegistration"
    ),
  { fallback: <div>loading...</div> }
);
const AdminCreateNew = loadable(
  () =>
    import("../pages/Managment/RenterRegistration/ComplexAdmin/AdminCreateNew"),
  { fallback: <div>loading...</div> }
);
const News = loadable(
  () => import(/* webpackChunkName: "News" */ "../pages/ComplexPanel/News"),
  {
    fallback: <div>loading...</div>,
  }
);
const Chat = loadable(
  () => import(/* webpackChunkName: "Chat" */ "../pages/Chat/Chat"),
  {
    fallback: <div>loading...</div>,
  }
);
const SavedPosts = loadable(
  () =>
    import(
      /* webpackChunkName: "SavedPosts" */ "../pages/ComplexPanel/SavedPosts"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const Phone = loadable(
  () =>
    import(
      /* webpackChunkName: "Phone" */ "../pages/Managment/CommunalServices/Phone"
    ),
  { fallback: <div>loading...</div> }
);
const AllRequests = loadable(
  () =>
    import(
      /* webpackChunkName: "AllRequests" */ "../pages/Managment/Requests/AllRequests"
    ),
  { fallback: <div>loading...</div> }
);
const RequestComponent = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestComponent" */ "../pages/Managment/Requests/RequestComponent"
    ),
  { fallback: <div>loading...</div> }
);
const MeetingRoom = loadable(
  () =>
    import(
      /* webpackChunkName: "MeetingRoom" */ "../pages/Managment/LocalClub/Main/MeetingRoom"
    ),
  { fallback: <div>loading...</div> }
);
const Massage = loadable(
  () =>
    import(
      /* webpackChunkName: "Massage" */ "../pages/Managment/LocalClub/Main/Massage"
    ),
  { fallback: <div>loading...</div> }
);
const Cinema = loadable(
  () =>
    import(
      /* webpackChunkName: "Cinema" */ "../pages/Managment/LocalClub/Main/Cinema"
    ),
  { fallback: <div>loading...</div> }
);
const NewEntryCard = loadable(
  () =>
    import(
      /* webpackChunkName: "NewEntryCard" */ "../pages/Managment/EntryCard/NewEntryCard"
    ),
  { fallback: <div>loading...</div> }
);
const NewParkingCard = loadable(
  () =>
    import(
      /* webpackChunkName: "NewParkingCard" */ "../pages/Managment/EntryCard/NewParkingCard"
    ),
  { fallback: <div>loading...</div> }
);
const Menu = loadable(
  () => import(/* webpackChunkName: "Menu" */ "../pages/Restaurant/Menu"),
  {
    fallback: <div>loading...</div>,
  }
);
const Card = loadable(
  () => import(/* webpackChunkName: "Card" */ "../pages/Restaurant/Card"),
  {
    fallback: <div>loading...</div>,
  }
);
const TenantRegistration = loadable(
  () =>
    import(
      /* webpackChunkName: "TenantRegistration" */ "../pages/ControlPanel/TenantRegistration"
    ),
  { fallback: <div>loading...</div> }
);
const Internet = loadable(
  () =>
    import(
      /* webpackChunkName: "Internet" */ "../pages/Managment/CommunalServices/Internet"
    ),
  { fallback: <div>loading...</div> }
);
const Tv = loadable(
  () =>
    import(
      /* webpackChunkName: "Tv" */ "../pages/Managment/CommunalServices/Tv"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const RequestDetails = loadable(
  () =>
    import(
      /* webpackChunkName: "RequestDetails" */ "../pages/Managment/Requests/RequestDetails"
    ),
  { fallback: <div>loading...</div> }
);
const SendNotifications = loadable(
  () =>
    import(
      /* webpackChunkName: "SendNotifications" */ "../pages/Notifications/complexAdmin/SendNotifications"
    ),
  { fallback: <div>loading...</div> }
);
const Reports = loadable(
  () =>
    import(
      /* webpackChunkName: "Reports" */ "../pages/Managment/Reports/reports"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const AddApartment = loadable(
  () =>
    import(
      /* webpackChunkName: "AddApartment" */ "../pages/AddApartment/AddApartment"
    ),
  { fallback: <div>loading...</div> }
);
const SurveyManage = loadable(
  () =>
    import(
      /* webpackChunkName: "SurveyManage" */ "../pages/Notifications/complexAdmin/SurveyManage"
    ),
  { fallback: <div>loading...</div> }
);
const CreateInvoice = loadable(
  () =>
    import(
      /* webpackChunkName: "CreateInvoice" */ "../pages/CreateInvoice/CreateInvoice"
    ),
  { fallback: <div>loading...</div> }
);
const NotificationsArchive = loadable(
  () =>
    import(
      /* webpackChunkName: "NotificationsArchive" */ "../pages/Notifications/complexAdmin/NotificationsArchive"
    ),
  { fallback: <div>loading...</div> }
);
const SentNotifications = loadable(
  () =>
    import(
      /* webpackChunkName: "SentNotifications" */ "../pages/Notifications/complexAdmin/SentNotifications"
    ),
  { fallback: <div>loading...</div> }
);
const SurveyCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "SurveyCreate" */ "../pages/Notifications/complexAdmin/SurveyCreate/SurveyCreate"
    ),
  { fallback: <div>loading...</div> }
);
const MTKUsers = loadable(
  () =>
    import(/* webpackChunkName: "MTKUsers" */ "../pages/Apartment/MTKUsers"),
  {
    fallback: <div>loading...</div>,
  }
);
const Permission = loadable(
  () =>
    import(
      /* webpackChunkName: "Permission" */ "../pages/Apartment/Permission"
    ),
  {
    fallback: <div>loading...</div>,
  }
);

const Tasks = loadable(
  () => import(/* webpackChunkName: "Tasks" */ "../pages/Tasks/Tasks"),
  {
    fallback: <div>loading...</div>,
  }
);
const TaskCreate = loadable(
  () =>
    import(/* webpackChunkName: "TaskCreate" */ "../pages/Tasks/TaskCreate"),
  {
    fallback: <div>loading...</div>,
  }
);
const Apartments = loadable(
  () =>
    import(
      /* webpackChunkName: "Apartments" */ "../pages/Apartment/Apartments"
    ),
  {
    fallback: <div>loading...</div>,
  }
);
const Building = loadable(
  () =>
    import(/* webpackChunkName: "Building" */ "../pages/Apartment/Building"),
  {
    fallback: <div>loading...</div>,
  }
);
const Residents = loadable(
  () =>
    import(/* webpackChunkName: "Residents" */ "../pages/Apartment/Residents"),
  {
    fallback: <div>loading...</div>,
  }
);
const ResidentsCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "ResidentsCreate" */ "../pages/Apartment/ResidentsCreate"
    ),
  { fallback: <div>loading...</div> }
);
const GroupOfApartments = loadable(
  () =>
    import(
      /* webpackChunkName: "GroupOfApartments" */ "../pages/Apartment/GroupOfApartments"
    ),
  { fallback: <div>loading...</div> }
);
const GroupOfApartmentsCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "GroupOfApartmentsCreate" */ "../pages/Apartment/GroupOfApartmentsCreate"
    ),
  { fallback: <div>loading...</div> }
);
const Employees = loadable(
  () =>
    import(/* webpackChunkName: "Employees" */ "../pages/Apartment/Employees"),
  {
    fallback: <div>loading...</div>,
  }
);
const EmployeesCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "EmployeesCreate" */ "../pages/Apartment/EmployeesCreate"
    ),
  { fallback: <div>loading...</div> }
);
const HousingCooperative = loadable(
  () =>
    import(
      /* webpackChunkName: "HousingCooperative" */ "../pages/Apartment/HousingCooperative"
    ),
  { fallback: <div>loading...</div> }
);
const HousingCooperativeCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "HousingCooperativeCreate" */ "../pages/Apartment/HousingCooperativeCreate"
    ),
  { fallback: <div>loading...</div> }
);
const Complex = loadable(
  () => import(/* webpackChunkName: "Complex" */ "../pages/Apartment/Complex"),
  {
    fallback: <div>loading...</div>,
  }
);
const ComplexCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "ComplexCreate" */ "../pages/Apartment/ComplexCreate"
    ),
  { fallback: <div>loading...</div> }
);
const MTKUserCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MTKUserCreate" */ "../pages/Apartment/MTKUserCreate/MTKUserCreate"
    ),
  { fallback: <div>loading...</div> }
);
const MenuCategories = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuCategories" */ "../pages/Restaurant/Admin/MenuCategories"
    ),
  { fallback: <div>loading...</div> }
);
const MenuNewCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuNewCreate" */ "../pages/Restaurant/Admin/MenuNewCreate"
    ),
  { fallback: <div>loading...</div> }
);
const RestaurantMenu = loadable(
  () =>
    import(
      /* webpackChunkName: "RestaurantMenu" */ "../pages/Restaurant/Admin/RestaurantMenu"
    ),
  { fallback: <div>loading...</div> }
);
const MenuCreate = loadable(
  () =>
    import(
      /* webpackChunkName: "MenuCreate" */ "../pages/Restaurant/Admin/MenuCreate"
    ),
  { fallback: <div>loading...</div> }
);
const RestaurantOrders = loadable(
  () =>
    import(
      /* webpackChunkName: "RestaurantOrders" */ "../pages/Restaurant/Admin/RestaurantOrders"
    ),
  { fallback: <div>loading...</div> }
);
const InvoiceBill = loadable(
  () =>
    import(
      /* webpackChunkName: "InvoiceBill" */ "../pages/MyInvoices/InvoiceBill"
    ),
  {
    fallback: <div>loading...</div>,
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
