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
    setDialogModal: (state, { payload }) => {
      state.dialogModal = payload;
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setNestedModal: (state, { payload }) => {
      state.nestedModal = payload;
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
