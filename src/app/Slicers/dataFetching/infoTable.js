import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  informations: [],
  loading: false,
  error: null,
};

export const getInformations = createAsyncThunk(
  "informations/getInformations",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "information", {
        headers: { token: data.token },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const informationSlice = createSlice({
  name: "informations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInformations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInformations.fulfilled, (state, action) => {
        state.loading = false;
        state.informations = action.payload;
      })
      .addCase(getInformations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = informationSlice.actions;
export default informationSlice.reducer;
