import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts } from "api/services/getAdverts";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (credentials, thunkAPI) => {
    try {
      const data = await getAdverts(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
