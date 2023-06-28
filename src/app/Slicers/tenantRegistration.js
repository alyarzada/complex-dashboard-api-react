import { createSlice } from "@reduxjs/toolkit";
import { tenantsData } from "../../data/apartment-owner/tenants-data";

const initialState = {
  tenants: tenantsData,
};

const tenantSlicer = createSlice({
  name: "tenants",
  initialState,
  reducer: {},
});

export default tenantSlicer.reducer;
