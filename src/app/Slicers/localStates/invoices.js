import { createSlice } from "@reduxjs/toolkit";
import { invoiceData } from "../../../data/apartment-owner/invoice-data";

const initialState = {
  invoices: invoiceData,
  selectedInvoices: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getSelectedInvoices: (state, action) => {
      state.selectedInvoices = action.payload.map((item) => {
        return state.invoices.find((invoice) => invoice.id === item);
      });
    },
    pushToSelectedInvoices: (state, action) => {
      state.selectedInvoices = [action.payload];
    },
  },
});

export const { getSelectedInvoices, pushToSelectedInvoices } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
