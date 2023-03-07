import { createSlice } from "@reduxjs/toolkit";
import { entryCardsData } from "../../data/apartment-owner/entry-card-data";

const initialState = {
  entryCards: entryCardsData,
};

const entryCardsSlicer = createSlice({
  name: "entryCards",
  initialState: initialState,
  reducer: {},
});

export const {} = entryCardsSlicer.actions;
export default entryCardsSlicer.reducer;
