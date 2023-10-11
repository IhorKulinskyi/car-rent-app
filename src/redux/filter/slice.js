import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: null,
  price: 30,
  fromMileage: 0,
  toMileage: 0,
  isEmpty: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.make = payload.make;
      state.price = payload.price;
      state.fromMileage = payload.fromMileage;
      state.toMileage = payload.toMileage;
    },
    resetFilter: (state) => {
      state.make = null;
      state.price = 30;
      state.fromMileage = 0;
      state.toMileage = 0;
    },
    setIsEmpty: (state,{payload}) => {
      state.isEmpty = payload;
    },
  },
});

export const { setFilter, resetFilter, setIsEmpty } = filterSlice.actions;

export default filterSlice.reducer;
