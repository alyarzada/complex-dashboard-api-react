import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookedRooms: [],
  loading: false,
  bookRoomStatus: "idle",
  deleteBookedRoomStatus: "idle",
  error: null,
};

export const getBookedRooms = createAsyncThunk(
  "meetingRoom/getBookedRooms",
  async (data) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "meeting",
        {
          headers: { token: data },
        }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const bookRoom = createAsyncThunk(
  "meetingRoom/bookRoom",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "meeting",
        data.data,
        {
          headers: { token: data.token },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBookedRoom = createAsyncThunk(
  "meetingRoom/deleteBookedRoom",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_API_URL + "meeting",
        {
          data: { id: data.id },
          headers: { token: data.token },
        }
      );
      return { response: response.data, id: data.id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const meetingRoomSlice = createSlice({
  name: "meetingRoom",
  initialState,
  reducers: {
    changeBookRoomStatus: (state, { payload }) => {
      state.bookRoomStatus = payload;
    },
    changeDeleteBookedRoomStatus: (state, { payload }) => {
      state.deleteBookedRoomStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookedRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookedRooms.fulfilled, (state, { payload: { data } }) => {
        state.loading = false;
        state.bookedRooms = data;
      })
      .addCase(getBookedRooms.rejected, (state) => {
        state.loading = false;
      })
      .addCase(bookRoom.pending, (state) => {
        state.bookRoomStatus = "loading";
      })
      .addCase(bookRoom.fulfilled, (state, { payload: { data } }) => {
        state.bookRoomStatus = "succeeded";
        state.bookedRooms = [...state.bookedRooms, data];
      })
      .addCase(bookRoom.rejected, (state) => {
        state.bookRoomStatus = "failed";
      })
      .addCase(deleteBookedRoom.pending, (state) => {
        state.deleteBookedRoomStatus = "loading";
      })
      .addCase(deleteBookedRoom.fulfilled, (state, { payload }) => {
        state.bookedRooms = state.bookedRooms.filter(
          (item) => item.id !== payload.id
        );
        state.deleteBookedRoomStatus = "succeeded";
      })
      .addCase(deleteBookedRoom.rejected, (state) => {
        state.deleteBookedRoomStatus = "failed";
      });
  },
});

export const { changeBookRoomStatus, changeDeleteBookedRoomStatus } =
  meetingRoomSlice.actions;
export default meetingRoomSlice.reducer;
