import { createSlice } from "@reduxjs/toolkit/";

const mediaQuery = window.matchMedia("(max-width: 768px)");

export const themes = createSlice({
  name: "themes",
  initialState: {
    openedSidebar: mediaQuery.matches ? false : true,
    openedSettingBar: false,
    light: false,
    boxed: false,
    leftLight: "dark",
    scrollable: false,
    disableTransform: false,
    isDraggable: false,
    showCardIcon: false,
  },
  reducers: {
    setOpenedSidebar: (state) => {
      state.openedSidebar = !state.openedSidebar;
    },
    setLight: (state, action) => {
      state.light = action.payload;
    },
    setBoxed: (state, action) => {
      state.boxed = action.payload;
    },
    setLeftLight: (state, action) => {
      state.leftLight = action.payload;
    },
    setScrollable: (state, action) => {
      state.scrollable = action.payload;
    },
    setTransform: (state, action) => {
      state.disableTransform = action.payload;
    },
    setOpenedSettingBar: (state, action) => {
      state.openedSettingBar = action.payload;
    },
    setDraggable: (state, action) => {
      state.isDraggable = action.payload;
    },
    setShowCardIcon: (state, action) => {
      state.showCardIcon = action.payload;
    },
  },
});

export const {
  setOpenedSidebar,
  setLight,
  setBoxed,
  setLeftLight,
  setScrollable,
  setTransform,
  setOpenedSettingBar,
  setDraggable,
  setShowCardIcon,
} = themes.actions;
export default themes.reducer;
