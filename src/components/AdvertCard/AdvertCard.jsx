import { useSelector, useDispatch } from "react-redux";
import { formatAddress } from "helpers";
import { isAdvertFavorite } from "redux/favorites/selectors";
import { addToFavorites, removeFromFavorites } from "redux/favorites/slice";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import fallbackImageUrl from "../../public/images/fallback_sedan.jpg";
import {
  ImgWrapper,
  DescriptionWrapper,
  AdvertImage,
  Details,
  DetailsList,
  DetailsListItem,
  Description,
  DescriptionItem,
} from "./AdvertCard.styled";

const AdvertCard = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => isAdvertFavorite(state, item.id));
  const { city, country } = formatAddress(item.address);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <Paper elevation={0} sx={{ height: 426 }}>
      <ImgWrapper>
        <AdvertImage
          alt={`${item.make} ${item.model}`}
          src={item.img}
          onError={(e) => {
            console.log(e);
            e.target.src = fallbackImageUrl;
          }}
        />
        <Button
          onClick={toggleFavorite}
          sx={{ position: "absolute", top: 0, right: -5 }}
        >
          {isFavorite ? (
            <FavoriteIcon style={{ color: "#3470FF" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "white" }} />
          )}
        </Button>
      </ImgWrapper>
      <DescriptionWrapper>
        <Description>
          <DescriptionItem>{item.make}</DescriptionItem>{" "}
          <DescriptionItem isModel style={{ color: "#3470FF" }}>
            {item.model},
          </DescriptionItem>
          <DescriptionItem> {item.year}</DescriptionItem>
        </Description>
        <DescriptionItem style={{ marginLeft: 5 }}>
          {item.rentalPrice}
        </DescriptionItem>
      </DescriptionWrapper>
      <div>
        <DetailsList>
          <DetailsListItem>
            <Details>{city}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{country}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{item.rentalCompany}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{item.type}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{item.make}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{item.id}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{item.accessories[0]}</Details>
          </DetailsListItem>
        </DetailsList>
      </div>
      <Button
        variant="contained"
        sx={{ width: "100%", backgroundColor: "#3470FF", borderRadius: 12 }}
      >
        Learn More
      </Button>
    </Paper>
  );
};

export default AdvertCard;
