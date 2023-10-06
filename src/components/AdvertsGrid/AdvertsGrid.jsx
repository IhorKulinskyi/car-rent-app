import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdvertCard from "components/AdvertCard";
import { selectAdverts } from "redux/adverts/selectors";
import { fetchAdverts } from "redux/adverts/operations";

const AdvertGrid = () => {
  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);
  console.log(adverts);

  return (
    <div>
      <ul>
        {adverts.map((item) => (
          <li key={item.id}>
            <AdvertCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertGrid;
