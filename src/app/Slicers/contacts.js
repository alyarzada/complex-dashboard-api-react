import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  contacts: [],
  status: "idle",
  error: null,
};

export const getAllContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "information", {
        headers: { token: data.token },
      });
      return response.data.complex_employees;
    } catch (error) {
      return error.message;
    }
  }
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = contactSlice.actions;
export default contactSlice.reducer;
