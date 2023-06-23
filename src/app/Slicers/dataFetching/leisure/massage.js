import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  bookedMassage: [],
  loading: false,
  error: null,
  bookMassageStatus: "idle",
  deletedMassageStatus: "idle",
};

export const getBookedMassage = createAsyncThunk(
  "massage/getBookedMassage",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "massage", {
        headers: { token: data },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const bookMassage = createAsyncThunk(
  "massage/bookMassage",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "massage", data.data, {
        headers: { token: data.token },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMassageReservation = createAsyncThunk(
  "massage/deleteMassageReservation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(BASE_URL + "massage", {
        data: { id: data.id },
        headers: { token: data.token },
      });
      return { response: response.data, id: data.id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const massageSlice = createSlice({
  name: "massage",
  initialState,
  reducers: {
    changeBookedMassageStatus: (state, { payload }) => {
      state.bookMassageStatus = payload;
    },
    changeDeletedMassageStatus: (state, { payload }) => {
      state.deletedMassageStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedMassage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookedMassage.fulfilled, (state, { payload: { data } }) => {
        state.loading = false;
        state.bookedMassage = data;
      })
      .addCase(getBookedMassage.rejected, (state) => {
        state.loading = false;
      })
      .addCase(bookMassage.pending, (state) => {
        state.bookMassageStatus = "loading";
      })
      .addCase(bookMassage.fulfilled, (state, { payload: { data } }) => {
        state.bookMassageStatus = "succeeded";
        state.bookedMassage = [...state.bookedMassage, data];
      })
      .addCase(bookMassage.rejected, (state) => {
        state.bookMassageStatus = "failed";
      })
      .addCase(deleteMassageReservation.pending, (state) => {
        state.deletedMassageStatus = "loading";
      })
      .addCase(deleteMassageReservation.fulfilled, (state, { payload }) => {
        state.bookedMassage = state.bookedMassage.filter(
          (item) => item.id !== payload.id
        );
        state.deletedMassageStatus = "succeeded";
      })
      .addCase(deleteMassageReservation.rejected, (state) => {
        state.deletedMassageStatus = "failed";
      });
  },
});

export const { changeBookedMassageStatus, changeDeletedMassageStatus } =
  massageSlice.actions;
export default massageSlice.reducer;
