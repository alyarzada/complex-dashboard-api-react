import loadable from "@loadable/component";
import LinearProgress from "@mui/material/LinearProgress";

// main components
const Main = loadable(() => import("../layout/main/Main"));
const PrivateMainRoute = loadable(() => import("../auth/PrivateMainRoute"));
const PrivateLoginRoute = loadable(() => import("../auth/PrivateLoginRoute"));
const LoginPage = loadable(() => import("../auth/Login"));
const Payment = loadable(() => import("../pages/Invoices/Payment"));

// children components
const ComplexPanel = loadable(() => import("../pages/ComplexPanel"));

const Profile = loadable(() => import("../pages/Profile"));
const Notifications = loadable(() => import("../pages/Notifications"));
const NotFound404 = loadable(() => import("../pages/NotFound404"));
const Contacts = loadable(() => import("../pages/Contact"));
const MyInvoices = loadable(() => import("../pages/Invoices"));

const Requests = loadable(() => import("../pages/Requests"));

const CreateNewRequest = loadable(() =>
  import("../pages/Requests/CreateNewRequest")
);
const CommunalServices = loadable(() => import("../pages/CommunalServices"));
const Communal = loadable(() => import("../pages/CommunalServices/Communal"));
const EntryCards = loadable(() => import("../pages/EntryCard/EntryCards"));
const RenterRegistration = loadable(() =>
  import("../pages/RenterRegistration/RenterRegistration")
);
const AdminCreateNew = loadable(() =>
  import("../pages/RenterRegistration/ComplexAdmin/AdminCreateNew")
);
const Posts = loadable(() => import("../pages/ComplexPanel/Posts"));
const Chat = loadable(() => import("../pages/Chat"));
const SavedPosts = loadable(() => import("../pages/ComplexPanel/SavedPosts"));
const Phone = loadable(() => import("../pages/CommunalServices/Phone"));
const AllRequests = loadable(() => import("../pages/Requests/AllRequests"));
const RequestComponent = loadable(() =>
  import("../pages/Requests/RequestComponent")
);
const MeetingRoom = loadable(() =>
  import("../pages/LocalClub/Main/MeetingRoom")
);
// const Massage = loadable(() => import("../pages/LocalClub/Main/Massage"));
const Cinema = loadable(() => import("../pages/LocalClub/Main/Cinema"));
const NewEntryCard = loadable(() => import("../pages/EntryCard/NewEntryCard"));
const NewParkingCard = loadable(() =>
  import("../pages/EntryCard/NewParkingCard")
);
const Internet = loadable(() => import("../pages/CommunalServices/Internet"));
const Tv = loadable(() => import("../pages/CommunalServices/Tv"));
const RequestDetails = loadable(() =>
  import("../pages/Requests/RequestDetails")
);
const SendNotifications = loadable(() =>
  import("../pages/Notifications/complexAdmin/SendNotifications")
);
const InvoiceBill = loadable(() => import("../pages/Invoices/InvoiceBill"));

const SurveyManage = loadable(() =>
  import("../pages/Notifications/complexAdmin/SurveyManage")
);
const CreateInvoice = loadable(() => import("../pages/Invoices/CreateInvoice"));
const NotificationsArchive = loadable(() =>
  import("../pages/Notifications/complexAdmin/NotificationsArchive")
);
const SentNotifications = loadable(() =>
  import("../pages/Notifications/complexAdmin/SentNotifications")
);
const SurveyCreate = loadable(() =>
  import("../pages/Notifications/complexAdmin/SurveyCreate/SurveyCreate")
);

// otherPages
const TenantRegistration = loadable(() =>
  import("../pages/otherPages/ControlPanel/TenantRegistration")
);
const RequestPanel = loadable(() => import("../pages/otherPages/RequestPanel"));
const ControlPanel = loadable(() => import("../pages/otherPages/ControlPanel"));
const AboutComplex = loadable(() => import("../pages/AboutComplex"));
const PhotoEdit = loadable(() => import("../pages/AboutComplex/PhotoEdit"));
const CalendarPage = loadable(() =>
  import("../pages/otherPages/FullCalendar/CalendarPage")
);

// adminPages
const ComplexSelect = loadable(() =>
  import("../pages/adminPages/ComplexSelect")
);
const Reports = loadable(() => import("../pages/adminPages/Reports/reports"));
const MTKUsers = loadable(() =>
  import("../pages/adminPages/Apartment/MTKUsers")
);
const Permission = loadable(() =>
  import("../pages/adminPages/Apartment/Permission")
);
const ApartmentsCreate = loadable(() =>
  import("../pages/adminPages/Apartment/ApartmentsCreate")
);
const Tasks = loadable(() => import("../pages/adminPages/Tasks"));
const TaskCreate = loadable(() =>
  import("../pages/adminPages/Tasks/TaskCreate")
);
const Apartments = loadable(() => import("../pages/adminPages/Apartment"));
const Building = loadable(() =>
  import("../pages/adminPages/Apartment/Building")
);
const Residents = loadable(() =>
  import("../pages/adminPages/Apartment/Residents")
);
const ResidentsCreate = loadable(() =>
  import("../pages/adminPages/Apartment/ResidentsCreate")
);
const GroupOfApartments = loadable(() =>
  import("../pages/adminPages/Apartment/GroupOfApartments")
);
const GroupOfApartmentsCreate = loadable(() =>
  import("../pages/adminPages/Apartment/GroupOfApartmentsCreate")
);
const Employees = loadable(() =>
  import("../pages/adminPages/Apartment/Employees")
);
const EmployeesCreate = loadable(() =>
  import("../pages/adminPages/Apartment/EmployeesCreate")
);
const HousingCooperative = loadable(() =>
  import("../pages/adminPages/Apartment/HousingCooperative")
);
const HousingCooperativeCreate = loadable(() =>
  import("../pages/adminPages/Apartment/HousingCooperativeCreate")
);
const Complex = loadable(() => import("../pages/adminPages/Apartment/Complex"));
const ComplexCreate = loadable(() =>
  import("../pages/adminPages/Apartment/ComplexCreate")
);
const MTKUserCreate = loadable(() =>
  import("../pages/adminPages/Apartment/MTKUserCreate/MTKUserCreate")
);

// restaurantPages
const Menu = loadable(() => import("../pages/restaurantPages/Restaurant/Menu"));
const Card = loadable(() => import("../pages/restaurantPages/Restaurant/Card"));
const MenuCategories = loadable(() =>
  import("../pages/restaurantPages/Restaurant/Admin/MenuCategories")
);
const MenuNewCreate = loadable(() =>
  import("../pages/restaurantPages/Restaurant/Admin/MenuNewCreate")
);
const RestaurantMenu = loadable(() =>
  import("../pages/restaurantPages/Restaurant/Admin/RestaurantMenu")
);
const MenuCreate = loadable(() =>
  import("../pages/restaurantPages/Restaurant/Admin/MenuCreate")
);
const RestaurantOrders = loadable(() =>
  import("../pages/restaurantPages/Restaurant/Admin/RestaurantOrders")
);

const routes = [
  {
    path: "/",
    element: (
      <PrivateMainRoute>
        <Main fallback={<LinearProgress color="logocolor" />} />
      </PrivateMainRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ControlPanel fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "contact",
        element: <Contacts fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "myinvoice",
        element: <MyInvoices fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "request-panel",
        element: (
          <RequestPanel fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "apartments/create",
        element: <ApartmentsCreate />,
      },
      {
        path: "myinvoice/payment",
        element: <Payment fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "information",
        element: (
          <AboutComplex fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "information/photoedit",
        element: <PhotoEdit fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "create-invoice",
        element: (
          <CreateInvoice fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "/invoice-bill",
        element: (
          <InvoiceBill fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "calendar",
        element: (
          <CalendarPage fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "profile",
        element: <Profile fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "notifications",
        element: (
          <Notifications fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "send-notification",
        element: (
          <SendNotifications fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "sent-notifications",
        element: (
          <SentNotifications fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "tasks",
        element: <Tasks fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "tasks/create",
        element: <TaskCreate fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "notifications-archive",
        element: (
          <NotificationsArchive
            fallback={<LinearProgress color="logocolor" />}
          />
        ),
      },
      {
        path: "surveymanage",
        element: (
          <SurveyManage fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "surveymanage/create",
        element: (
          <SurveyCreate fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "restaurant-menu-orders",
        element: <Menu fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "restaurant-menu-orders/card",
        element: <Card fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "restaurantorders",
        element: (
          <RestaurantOrders fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "communalservices",
        element: (
          <CommunalServices fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "communalservices/telephone",
        element: <Phone fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "communalservices/utilities",
        element: <Communal fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "/communalservices/internet",
        element: <Internet fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "communalservices/tv",
        element: <Tv fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "requests",
        element: <Requests fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "requests/details/:id",
        element: (
          <RequestDetails fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "user-card-request",
        element: <EntryCards fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "meetingroom",
        element: (
          <MeetingRoom fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      // {
      //   path: "massage",
      //   element: <Massage fallback={<LinearProgress color="logocolor" />} />,
      // },
      {
        path: "cinema",
        element: <Cinema fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "user-tenant-registration",
        element: (
          <RenterRegistration fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "user-tenant-registration/create-new",
        element: (
          <AdminCreateNew fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "tenant-registration",
        element: (
          <TenantRegistration fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "permission",
        element: <Permission fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "permission",
        element: <Permission />,
      },
      {
        path: "user-card-request/access/create",
        element: (
          <NewEntryCard fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "user-card-request/parking/create",
        element: (
          <NewParkingCard fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "reports",
        element: <Reports fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "hc-users",
        element: <MTKUsers fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "menucategories",
        element: (
          <MenuCategories fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "menunewcreate",
        element: (
          <MenuNewCreate fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "menucreate",
        element: <MenuCreate fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "restaurantmenu",
        element: (
          <RestaurantMenu fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "apartments",
        element: <Apartments fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "complex",
        element: <Complex fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "complex/create",
        element: (
          <ComplexCreate fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "housing-cooperative",
        element: (
          <HousingCooperative fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "housing-cooperative/create",
        element: (
          <HousingCooperativeCreate
            fallback={<LinearProgress color="logocolor" />}
          />
        ),
      },
      {
        path: "employees",
        element: <Employees fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "employees/create",
        element: (
          <EmployeesCreate fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "building",
        element: <Building fallback={<LinearProgress color="logocolor" />} />,
      },
      // {
      //   path: "building/create",
      //   element: <BuildingCreate />,
      // },
      {
        path: "group-of-apartments",
        element: (
          <GroupOfApartments fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "group-of-apartments/create",
        element: (
          <GroupOfApartmentsCreate
            fallback={<LinearProgress color="logocolor" />}
          />
        ),
      },
      {
        path: "residents",
        element: <Residents fallback={<LinearProgress color="logocolor" />} />,
      },
      {
        path: "residents/create",
        element: (
          <ResidentsCreate fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "residents/create",
        element: <ResidentsCreate />,
      },
      {
        path: "hc-users/create",
        element: <MTKUserCreate />,
      },
      {
        path: "/requests",
        element: <Requests fallback={<LinearProgress color="logocolor" />} />,
        children: [
          {
            index: true,
            element: (
              <AllRequests fallback={<LinearProgress color="logocolor" />} />
            ),
          },
          {
            path: "createnewrequest",
            element: (
              <CreateNewRequest
                fallback={<LinearProgress color="logocolor" />}
              />
            ),
          },
          {
            path: ":type",
            element: (
              <RequestComponent
                fallback={<LinearProgress color="logocolor" />}
              />
            ),
          },
        ],
      },
      {
        path: "complexpanel",
        element: (
          <ComplexPanel fallback={<LinearProgress color="logocolor" />} />
        ),
        children: [
          {
            index: true,
            element: <Posts fallback={<LinearProgress color="logocolor" />} />,
          },
          {
            path: "savedposts",
            element: (
              <SavedPosts fallback={<LinearProgress color="logocolor" />} />
            ),
          },
        ],
      },
      {
        path: "/informing-residents",
        element: (
          <SendNotifications fallback={<LinearProgress color="logocolor" />} />
        ),
      },
      {
        path: "/complex-select",
        element: (
          <ComplexSelect fallback={<LinearProgress color="logocolor" />} />
        ),
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
      <PrivateLoginRoute>
        <LoginPage fallback={<LinearProgress color="logocolor" />} />
      </PrivateLoginRoute>
    ),
  },
  {
    path: "/chat",
    element: <Chat fallback={<LinearProgress color="logocolor" />} />,
  },
  {
    path: "*",
    element: <NotFound404 fallback={<LinearProgress color="logocolor" />} />,
  },
];

export default routes;
