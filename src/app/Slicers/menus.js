import { createSlice } from "@reduxjs/toolkit";
import { dashboardPanels } from "../../data/data";

export const menusSlicer = createSlice({
  name: "menus",
  initialState: {
    menus: dashboardPanels,
  },
  reducers: {
    reOrderMenus: (state, action) => {
      state.menus = action.payload;
    },
    reOrderPanels: (state, action) => {
      state.menus = state.menus.map((menu) => {
        if (action.payload.id === menu.id) {
          return { ...menu, panels: action.payload.data };
        }
        return menu;
      });
    },
  },
});

export const { reOrderMenus, reOrderPanels } = menusSlicer.actions;
export default menusSlicer.reducer;
