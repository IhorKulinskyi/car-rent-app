import { useSelector, useDispatch } from "react-redux";
import { formatAddress } from "helpers";
import { isAdvertFavorite } from "redux/favorites/selectors";
import { addToFavorites, removeFromFavorites } from "redux/favorites/slice";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ImgWrapper, favoriteButtonStyles } from "./AdvertCard.styled";

const AdvertCard = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => isAdvertFavorite(state, item.id));
  const { city, country } = formatAddress(item.address);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
    } else {
      dispatch(addToFavorites(item.id));
    }
  };

  return (
    <div>
      <ImgWrapper>
        <img
          alt={`${item.make} ${item.model}`}
          src={item.img}
          width={200}
          height={200}
        />
        <Button onClick={toggleFavorite} css={favoriteButtonStyles}>
          {isFavorite ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon style={{ color: "white" }} />
          )}
        </Button>
      </ImgWrapper>
      <div>
        <p>
          {item.make} {item.model},{item.year}
        </p>
        <p>{item.rentalPrice}</p>
      </div>
      <div>
        <p>
          {city} | {country} | {item.rentalCompany} | {item.type} | {item.make}{" "}
          | {item.id} | {item.accessories[0]}
        </p>
      </div>

      <Button variant="contained">Learn More</Button>
    </div>
  );
};

export default AdvertCard;
