import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  stock: [],
  isDataLoaded: false,
};

export const getProducts = createAsyncThunk("product/get", async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeFromStock: (state, action) => {
      state.stock = state.stock.filter((item) => item.sku !== action.payload);
    },
    addToStock: (state, action) => {
      state.stock.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
        state.stock = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { fetchProducts, removeFromStock ,addToStock} = productsSlice.actions;
export default productsSlice.reducer;