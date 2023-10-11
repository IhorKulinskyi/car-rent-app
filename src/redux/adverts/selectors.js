import { createSelector } from "@reduxjs/toolkit";
import { formatPrice } from "helpers";

export const selectAdverts = (state) => state.adverts.items;

export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectError = (state) => state.adverts.error;

export const selectPage = (state) => state.adverts.page;

export const selectFilter = (state) => state.filter;

export const selectIsFilterEmty = (state) => state.filter.isEmpty;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilter],
  (adverts, filter) => {
    return adverts.filter((adv) => {
      return (
        adv.make === filter.make &&
        formatPrice(adv.rentalPrice) <= filter.price &&
        adv.mileage > filter.fromMileage &&
        adv.mileage < filter.toMileage
      );
    });
  }
);
