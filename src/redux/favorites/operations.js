import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchItemsByIdsApi } from "api/services/fetchAdvertsByIds";

export const fetchItemsByIds = createAsyncThunk(
    'favorites/fetchItemsByIds',
    async (itemIds, { rejectWithValue }) => {
      try {
        const items = await fetchItemsByIdsApi(itemIds);
        return items;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
