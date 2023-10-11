import AdvertGrid from "components/AdvertsGrid/AdvertsGrid";
import {
  selectAdverts,
  selectFilteredAdverts,
  selectIsFilterEmty,
  selectIsLoading,
  selectPage,
} from "redux/adverts/selectors";
import { fetchAdverts } from "redux/adverts/operations";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/Spinner";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { incrementPage } from "redux/adverts/slice";
import Filter from "components/Filter";

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const isFilterEmpty = useSelector(selectIsFilterEmty);
  // const isInitialRender = useRef(true);
  const storedPage = localStorage.getItem("page");
  const visitedPage = storedPage ? parseInt(storedPage) : 1;
  const hasSearchResults = !!filteredAdverts.length;

  useEffect(() => {
    // if (isInitialRender.current) {
    //   isInitialRender.current = false;
    //   return;
    // }
    if (adverts.length !== 0 && page === visitedPage) {
      return;
    }
    dispatch(fetchAdverts(page));
    localStorage.setItem("page", page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Filter />
      {isFilterEmpty ? (
        <>
          <AdvertGrid items={adverts} />
          <Box sx={{ textAlign: "center", padding: "25px 0" }}>
            <Button variant="contained" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        </>
      ) : hasSearchResults ? (
        <AdvertGrid items={filteredAdverts} />
      ) : (
        <div>no search results</div>
      )}
    </>
  );
};

export default Catalog;
