import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getStore = createAsyncThunk("get/store", async () => {
  const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/stores`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  return resp.data.items;
});

const storeSlice = createSlice({
  name: "store",
  initialState: {
    loading: false,
    store: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStore.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.store = payload;
      })
      .addCase(getStore.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
});

// export const {} = storeSlice.actions;

export default storeSlice.reducer;
