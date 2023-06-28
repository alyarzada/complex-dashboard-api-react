import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// local states
import themesReducer from "./Slicers/themes";
import dataReducer from "./Slicers/data";
import menuReducer from "./Slicers/menus";
import invoiceReducer from "./Slicers/invoices";
import entryCardsReducer from "./Slicers/entryCards";
import tenantReducer from "./Slicers/tenantRegistration";
import modalReducer from "./Slicers/modals";
import userReducer from "./Slicers/user";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    data: dataReducer,
    restaurantMenu: menuReducer,
    invoice: invoiceReducer,
    entryCards: entryCardsReducer,
    tenants: tenantReducer,
    user: userReducer,
    modals: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
