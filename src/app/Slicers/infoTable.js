import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  informations: [],
  status: "idle",
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
        state.status = "loading";
      })
      .addCase(getInformations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.informations = action.payload;
      })
      .addCase(getInformations.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = informationSlice.actions;
export default informationSlice.reducer;
