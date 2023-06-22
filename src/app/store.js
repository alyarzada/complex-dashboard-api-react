import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// local states
import themesReducer from "./Slicers/localStates/themes";
import dataReducer from "./Slicers/localStates/data";
import menuReducer from "./Slicers/localStates/menus";
import invoiceReducer from "./Slicers/localStates/invoices";
import entryCardsReducer from "./Slicers/localStates/entryCards";
import tenantReducer from "./Slicers/localStates/tenantRegistration";
import modalReducer from "./Slicers/localStates/modals";

// data-fetching
import notificationReducer from "./Slicers/dataFetching/notifications";
import authReducer from "./Slicers/dataFetching/auth";
import requestReducer from "./Slicers/dataFetching/requests";
import newsReducer from "./Slicers/dataFetching/news";
import contactsReducer from "./Slicers/dataFetching/contacts";
import informationReducer from "./Slicers/dataFetching/infoTable";
import meetingRoomReducer from "./Slicers/dataFetching/meetingRoom";
import massageReducer from "./Slicers/dataFetching/massage";
import cinemaReducer from "./Slicers/dataFetching/cinema";
import emojiReducer from "./Slicers/dataFetching/emoji";

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
    emojies: emojiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
