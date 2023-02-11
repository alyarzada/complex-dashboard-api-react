import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controlPanel: [],
  sidebar: [],
  status: "loading",
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getDashboardPanels: (state, action) => {
      state.controlPanel = action.payload;
    },
    getSidebarData: (state, action) => {
      state.sidebar = action.payload;
    },
    reOrderMenus: (state, action) => {
      state.controlPanel = action.payload;
    },
    reOrderPanels: (state, action) => {
      state.controlPanel = state.controlPanel.map((panel) => {
        if (action.payload.id === panel.id) {
          return { ...panel, panels: action.payload.data };
        }
        return panel;
      });
    },
  },
});

export const {
  getDashboardPanels,
  reOrderMenus,
  reOrderPanels,
  getSidebarData,
} = dataSlice.actions;
export default dataSlice.reducer;
