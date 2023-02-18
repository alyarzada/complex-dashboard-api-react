import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  bookedCinemaRooms: [],
  status: "idle",
  error: null,
  bookCinemaStatus: "idle",
  deletedCinemaStatus: "idle",
};

export const getBookedCinemaRooms = createAsyncThunk(
  "cinema/getBookedCinemaRooms",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "cinema", {
        headers: { token: data },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const bookCinemaRoom = createAsyncThunk(
  "cinema/bookCinemaRoom",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "cinema", data.data, {
        headers: { token: data.token },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBookedCinemaRoom = createAsyncThunk(
  "cinema/deleteBookedCinemaRoom",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(BASE_URL + "cinema", {
        data: { id: data.id },
        headers: { token: data.token },
      });
      return { response: response.data, id: data.id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    changeBookedCinemaStatus: (state, { payload }) => {
      state.bookCinemaStatus = payload;
    },
    changeDeletedCinemaStatus: (state, { payload }) => {
      state.deletedCinemaStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedCinemaRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getBookedCinemaRooms.fulfilled,
        (state, { payload: { data } }) => {
          state.status = "succeeded";
          state.bookedCinemaRooms = data;
        }
      )
      .addCase(getBookedCinemaRooms.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(bookCinemaRoom.pending, (state) => {
        state.bookCinemaStatus = "loading";
      })
      .addCase(bookCinemaRoom.fulfilled, (state, { payload: { data } }) => {
        state.bookCinemaStatus = "succeeded";
        state.bookedCinemaRooms = [...state.bookedCinemaRooms, data];
      })
      .addCase(bookCinemaRoom.rejected, (state) => {
        state.bookCinemaStatus = "failed";
      })
      .addCase(deleteBookedCinemaRoom.pending, (state) => {
        state.deletedCinemaStatus = "loading";
      })
      .addCase(deleteBookedCinemaRoom.fulfilled, (state, { payload }) => {
        state.bookedCinemaRooms = state.bookedCinemaRooms.filter(
          (item) => item.id !== payload.id
        );
        state.deletedCinemaStatus = "succeeded";
      })
      .addCase(deleteBookedCinemaRoom.rejected, (state) => {
        state.deletedCinemaStatus = "failed";
      });
  },
});

export const { changeBookedCinemaStatus, changeDeletedCinemaStatus } =
  cinemaSlice.actions;
export default cinemaSlice.reducer;
