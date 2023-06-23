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
import requestReducer from "./Slicers/dataFetching/requests";
import newsReducer from "./Slicers/dataFetching/news";
import emojiReducer from "./Slicers/dataFetching/emoji";
import informationReducer from "./Slicers/dataFetching/infoTable";
import meetingRoomReducer from "./Slicers/dataFetching/leisure/meetingRoom";
import massageReducer from "./Slicers/dataFetching/leisure/massage";
import cinemaReducer from "./Slicers/dataFetching/leisure/cinema";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    data: dataReducer,
    restaurantMenu: menuReducer,
    invoice: invoiceReducer,
    entryCards: entryCardsReducer,
    tenants: tenantReducer,

    notifications: notificationReducer,
    requests: requestReducer,
    news: newsReducer,
    modals: modalReducer,
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
