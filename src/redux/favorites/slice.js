import { createSlice } from "@reduxjs/toolkit";
import { fetchItemsByIds } from "./operations";

const initialState = {
  itemIds: [],
  items: [],
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

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.itemIds.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.itemIds = state.itemIds.filter((id) => id !== action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsByIds.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchItemsByIds.pending, handlePending)
      .addCase(fetchItemsByIds.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
