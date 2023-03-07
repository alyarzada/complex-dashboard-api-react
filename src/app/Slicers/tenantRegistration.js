import { createSlice } from "@reduxjs/toolkit";
import { tenantsData } from "../../data/apartment-owner/tenants-data";

const initialState = {
  tenants: tenantsData,
};

const tenantSlicer = createSlice({
  name: "tenants",
  initialState: initialState,
  reducer: {},
});

export const {} = tenantSlicer.actions;
export default tenantSlicer.reducer;
