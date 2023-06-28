import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [],
  modal: {
    isOpen: false,
  },
  dialogModal: {
    isOpen: false,
    data: null,
  },
  nestedModal: {
    isOpen: false,
    data: null,
  },
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    appendModal: (state, action) => {
      state.modals = [...state.modals, action.payload];
    },
    destroyModal: (state) => {
      const data = [...state.modals];
      data.pop();
      state.modals = data;
    },
    destroyAllModals: (state) => {
      state.modals = [];
    },
    setDialogModal: (state, action) => {
      state.dialogModal = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setNestedModal: (state, action) => {
      state.nestedModal = action.payload;
    },
  },
});

export const {
  appendModal,
  destroyModal,
  destroyAllModals,
  setDialogModal,
  setModal,
  setNestedModal,
} = modalSlice.actions;
export default modalSlice.reducer;
