import AdvertGrid from "components/AdvertsGrid/AdvertsGrid";
import {
  selectFavoritesIds,
  selectFavorites,
  selectFavoritesIsLoading,
} from "redux/favorites/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchItemsByIds } from "redux/favorites/operations";
import Spinner from "components/Spinner";

const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesIds = useSelector(selectFavoritesIds);
  const isFavoritesLoading = useSelector(selectFavoritesIsLoading);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    if (favoritesIds.length > 0) {
      dispatch(fetchItemsByIds(favoritesIds));
    }
  }, [dispatch, favoritesIds]);

  return isFavoritesLoading ? (
    <Spinner />
  ) : (
    <>
      <div>Favorites</div>
      <AdvertGrid items={favorites} />
    </>
  );
};

export default Favorites;
