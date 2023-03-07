import loadable from "@loadable/component";
import LoadingComponent from "../layout/LoadingComponent";
import LinearProgress from "@mui/material/LinearProgress";

// main components
const Home = loadable(() => import("../layout/Home"));
const PrivateRoute = loadable(() => import("../layout/PrivateRoute"));
const LoginProtectedRoote = loadable(() => import("../auth/ProtectedRoote"));
const ControlPanel = loadable(() =>
  import("../pages/ControlPanel/ControlPanel")
);
const LoginPage = loadable(() => import("../auth/Login"));
const Payment = loadable(() => import("../pages/MyInvoices/Payment"));

// children components
const ComplexPanel = loadable(() =>
  import("../pages/ComplexPanel/ComplexPanel")
);
const ComplexSelect = loadable(() =>
  import("../pages/ComplexSelect/ComplexSelect")
);
const CalendarPage = loadable(() =>
  import("../pages/FullCalendar/CalendarPage")
);
const Profile = loadable(() => import("../pages/Profile/Profile"));
const Notifications = loadable(() =>
  import("../pages/Notifications/Notifications")
);
const NotFound404 = loadable(() => import("../pages/NotFound404"));
const Contacts = loadable(() => import("../pages/Contact/Contacts"));
const MyInvoices = loadable(() => import("../pages/MyInvoices/MyInvoices"));
const InfoTable = loadable(() => import("../pages/InfoTable/InfoTable"));
const PhotoEdit = loadable(() => import("../pages/InfoTable/PhotoEdit"));
const Requests = loadable(() => import("../pages/Managment/Requests/Requests"));
const RequestPanel = loadable(() =>
  import("../pages/RequestPanel/RequestPanel")
);
const CreateNewRequest = loadable(() =>
  import("../pages/Managment/Requests/CreateNewRequest")
);
const CommunalServices = loadable(() =>
  import("../pages/Managment/CommunalServices/CommunalServices")
);
const Communal = loadable(() =>
  import("../pages/Managment/CommunalServices/Communal")
);
const EntryCards = loadable(() =>
  import("../pages/Managment/EntryCard/EntryCards")
);
const RenterRegistration = loadable(() =>
  import("../pages/Managment/RenterRegistration/RenterRegistration")
);
const AdminCreateNew = loadable(() =>
  import("../pages/Managment/RenterRegistration/ComplexAdmin/AdminCreateNew")
);
const News = loadable(() => import("../pages/ComplexPanel/News"));
const Chat = loadable(() => import("../pages/Chat/Chat"));
const SavedPosts = loadable(() => import("../pages/ComplexPanel/SavedPosts"));
const Phone = loadable(() =>
  import("../pages/Managment/CommunalServices/Phone")
);
const AllRequests = loadable(() =>
  import("../pages/Managment/Requests/AllRequests")
);
const RequestComponent = loadable(() =>
  import("../pages/Managment/Requests/RequestComponent")
);
const MeetingRoom = loadable(() =>
  import("../pages/Managment/LocalClub/Main/MeetingRoom")
);
const Massage = loadable(() =>
  import("../pages/Managment/LocalClub/Main/Massage")
);
const Cinema = loadable(() =>
  import("../pages/Managment/LocalClub/Main/Cinema")
);
const NewEntryCard = loadable(() =>
  import("../pages/Managment/EntryCard/NewEntryCard")
);
const NewParkingCard = loadable(() =>
  import("../pages/Managment/EntryCard/NewParkingCard")
);
const Menu = loadable(() => import("../pages/Restaurant/Menu"));
const Card = loadable(() => import("../pages/Restaurant/Card"));
const TenantRegistration = loadable(() =>
  import("../pages/ControlPanel/TenantRegistration")
);
const Internet = loadable(() =>
  import("../pages/Managment/CommunalServices/Internet")
);
const Tv = loadable(() => import("../pages/Managment/CommunalServices/Tv"));
const RequestDetails = loadable(() =>
  import("../pages/Managment/Requests/RequestDetails")
);
const SendNotifications = loadable(() =>
  import("../pages/Notifications/complexAdmin/SendNotifications")
);
const Reports = loadable(() => import("../pages/Managment/Reports/reports"));
const AddApartment = loadable(() =>
  import("../pages/AddApartment/AddApartment")
);
const SurveyManage = loadable(() =>
  import("../pages/Notifications/complexAdmin/SurveyManage")
);
const CreateInvoice = loadable(() =>
  import("../pages/CreateInvoice/CreateInvoice")
);
const NotificationsArchive = loadable(() =>
  import("../pages/Notifications/complexAdmin/NotificationsArchive")
);
const SentNotifications = loadable(() =>
  import("../pages/Notifications/complexAdmin/SentNotifications")
);
const SurveyCreate = loadable(() =>
  import("../pages/Notifications/complexAdmin/SurveyCreate/SurveyCreate")
);
const MTKUsers = loadable(() => import("../pages/Apartment/MTKUsers"));
const Permission = loadable(() => import("../pages/Apartment/Permission"));

const Tasks = loadable(() => import("../pages/Tasks/Tasks"));
const TaskCreate = loadable(() => import("../pages/Tasks/TaskCreate"));
const Apartments = loadable(() => import("../pages/Apartment/Apartments"));
const Building = loadable(() => import("../pages/Apartment/Building"));
const Residents = loadable(() => import("../pages/Apartment/Residents"));
const ResidentsCreate = loadable(() =>
  import("../pages/Apartment/ResidentsCreate")
);
const GroupOfApartments = loadable(() =>
  import("../pages/Apartment/GroupOfApartments")
);
const GroupOfApartmentsCreate = loadable(() =>
  import("../pages/Apartment/GroupOfApartmentsCreate")
);
const Employees = loadable(() => import("../pages/Apartment/Employees"));
const EmployeesCreate = loadable(() =>
  import("../pages/Apartment/EmployeesCreate")
);
const HousingCooperative = loadable(() =>
  import("../pages/Apartment/HousingCooperative")
);
const HousingCooperativeCreate = loadable(() =>
  import("../pages/Apartment/HousingCooperativeCreate")
);
const Complex = loadable(() => import("../pages/Apartment/Complex"));
const ComplexCreate = loadable(() =>
  import("../pages/Apartment/ComplexCreate")
);
const MTKUserCreate = loadable(() =>
  import("../pages/Apartment/MTKUserCreate/MTKUserCreate")
);
const MenuCategories = loadable(() =>
  import("../pages/Restaurant/Admin/MenuCategories")
);
const MenuNewCreate = loadable(() =>
  import("../pages/Restaurant/Admin/MenuNewCreate")
);
const RestaurantMenu = loadable(() =>
  import("../pages/Restaurant/Admin/RestaurantMenu")
);
const MenuCreate = loadable(() =>
  import("../pages/Restaurant/Admin/MenuCreate")
);
const RestaurantOrders = loadable(() =>
  import("../pages/Restaurant/Admin/RestaurantOrders")
);
const InvoiceBill = loadable(() => import("../pages/MyInvoices/InvoiceBill"));

const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home fallback={<LinearProgress color="logocolor" />} />
      </PrivateRoute>
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
        element: <InfoTable fallback={<LinearProgress color="logocolor" />} />,
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
      {
        path: "massage",
        element: <Massage fallback={<LinearProgress color="logocolor" />} />,
      },
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
      {
        path: "building/create",
        element: <BuildingCreate />,
      },
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
            element: <News fallback={<LinearProgress color="logocolor" />} />,
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
      <LoginProtectedRoote>
        <LoginPage fallback={<LinearProgress color="logocolor" />} />
      </LoginProtectedRoote>
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
