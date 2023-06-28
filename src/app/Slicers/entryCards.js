import { createSlice } from "@reduxjs/toolkit";
import { entryCardsData } from "../../data/apartment-owner/entry-card-data";

const initialState = {
  entryCards: entryCardsData,
};

const entryCardsSlicer = createSlice({
  name: "entryCards",
  initialState,
  reducer: {},
});

export default entryCardsSlicer.reducer;
