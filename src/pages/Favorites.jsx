import AdvertGrid from "components/AdvertsGrid/AdvertsGrid";
import {
  selectFavorites,
  selectFavoritesIsLoading,
} from "redux/favorites/selectors";
import { useSelector } from "react-redux";
import Spinner from "components/Spinner";

const Favorites = () => {
  const isFavoritesLoading = useSelector(selectFavoritesIsLoading);
  const favorites = useSelector(selectFavorites);

  return isFavoritesLoading ? <Spinner /> : <AdvertGrid items={favorites} />;
};

export default Favorites;
