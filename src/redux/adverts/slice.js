import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  items: [],
  page: 1,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.items.push(...action.payload);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchAdverts.pending, handlePending);
    builder.addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const { incrementPage } = advertsSlice.actions;

export default advertsSlice.reducer;
