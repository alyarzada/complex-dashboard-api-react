import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role_id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.user = action.payload;
      state.role_id = action.payload.has_role.role_id;
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
