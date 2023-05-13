import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("get/products", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/products/store`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  console.log(await response.data);
  return await response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: { value: [], loading: false, error: null },
  reducers: {
    insertProduct: (state, { payload }) => {
      console.log(payload);
      state.value.unshift(payload);
    },
    deleteProduct: (state, { payload }) => {
      state.value = state.value.filter(({ _id }) => _id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.value = payload;
      })
      .addCase(getProducts.rejected, (state, { error, payload }) => {
        state.error = error;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;

export const { insertProduct, deleteProduct } = productsSlice.actions;
