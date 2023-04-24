import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    name: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
