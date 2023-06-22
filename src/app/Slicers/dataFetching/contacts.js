import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  contacts: [],
  loading: false,
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
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(getAllContacts.rejected, (state) => {
        state.loading = false;
        state.error = "Error occured";
      });
  },
});

export const {} = contactSlice.actions;
export default contactSlice.reducer;
