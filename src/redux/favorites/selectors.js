export const selectFavoritesIds = (state) => state.favorites.itemIds;

export const selectFavorites = state => state.favorites.items;

export const selectFavoritesIsLoading = state => state.favorites.isLoading;

export const isAdvertFavorite = (state, advertId) =>
  selectFavoritesIds(state).includes(advertId);
