import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  status: "loading",
  notifications: [],
  error: "",
  notificationModal: { open: false, data: null },
};

export const getAllNotifications = createAsyncThunk(
  "notifications/getAllNotifications",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "notifications", {
        headers: { token: data },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteNotifications = createAsyncThunk(
  "notifications/deleteNotifications",
  async (data) => {
    try {
      const response = await axios.delete(BASE_URL + "notifications", {
        headers: { token: data },
      });
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const notificationSlicer = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    changeModalState: (state, action) => {
      state.notificationModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload;
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = "error";
      })
      .addCase(deleteNotifications.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteNotifications.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export const { changeModalState } = notificationSlicer.actions;
export default notificationSlicer.reducer;
