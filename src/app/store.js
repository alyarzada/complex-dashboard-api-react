import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themesReducer from "./Slicers/themes";
import dataReducer from "./Slicers/data";
import menuReducer from "./Slicers/restaurantMenu";
import invoiceReducer from "./Slicers/invoices";
import entryCardsReducer from "./Slicers/entryCards";
import tenantReducer from "./Slicers/tenantRegistration";

import notificationReducer from "./Slicers/notifications";
import authReducer from "./Slicers/auth";
import requestReducer from "./Slicers/requests";
import newsReducer from "./Slicers/news";
import modalReducer from "./Slicers/modals";
import contactsReducer from "./Slicers/contacts";
import informationReducer from "./Slicers/infoTable";
import meetingRoomReducer from "./Slicers/leisure/meetingRoom";
import massageReducer from "./Slicers/leisure/massage";
import cinemaReducer from "./Slicers/leisure/cinema";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    data: dataReducer,
    restaurantMenu: menuReducer,
    invoice: invoiceReducer,
    entryCards: entryCardsReducer,
    tenants: tenantReducer,

    auth: authReducer,
    notifications: notificationReducer,
    requests: requestReducer,
    news: newsReducer,
    modals: modalReducer,
    contacts: contactsReducer,
    informations: informationReducer,
    meetingRoom: meetingRoomReducer,
    massage: massageReducer,
    cinema: cinemaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
