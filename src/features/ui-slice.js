import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    alertOpen: false,
  },
  reducers: {
    openAlert: (state) => {
      state.alertOpen = true;
    },
    closeAlert: (state) => {
      state.alertOpen = false;
    },
  },
});

export const { openAlert, closeAlert } = uiSlice.actions;

export default uiSlice.reducer;
