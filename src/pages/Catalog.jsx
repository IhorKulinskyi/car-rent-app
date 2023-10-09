import AdvertGrid from "components/AdvertsGrid/AdvertsGrid";
import { selectAdverts, selectIsLoading } from "redux/adverts/selectors";
import { fetchAdverts } from "redux/adverts/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/Spinner";

const Catalog = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return isLoading ? <Spinner /> : <AdvertGrid items={adverts} />;
};

export default Catalog;
