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

export const getStoresProducts = createAsyncThunk(
  "get/categories",
  async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/categories`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    return resp.data;
  }
);

export const getCategories = createAsyncThunk(
  "get/store/products",
  async () => {
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/categories`
    );
    console.log(resp.data);
    return resp.data;
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState: {
    loading: false,
    store: {},
    products: [],
    categories: [],
  },
  reducers: {
    updateStore: (state, { payload }) => {
      state.store = payload;
    },
  },
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
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      })
      .addCase(getCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
});

export const { updateStore } = storeSlice.actions;

export default storeSlice.reducer;
