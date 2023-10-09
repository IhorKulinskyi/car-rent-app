export const selectFavorites = (state) => state.favorites.items;

export const selectFavoritesIsLoading = (state) => state.favorites.isLoading;

export const isAdvertFavorite = (state, advertId) =>
  selectFavorites(state).some((item) => item.id === advertId);
