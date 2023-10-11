import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatAddress } from "helpers";
import { isAdvertFavorite } from "redux/favorites/selectors";
import { addToFavorites, removeFromFavorites } from "redux/favorites/slice";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import fallbackImageUrl from "../../public/images/fallback_sedan.jpg";
import CarInfo from "components/CarInfo";
import DetailsList from "components/DetailsList";
import {
  ImgWrapper,
  DescriptionWrapper,
  AdvertImage,
  Description,
  DescriptionItem,
  ModalContainer,
} from "./AdvertCard.styled";

const AdvertCard = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { city, country } = formatAddress(item.address);
  const isFavorite = useSelector((state) => isAdvertFavorite(state, item.id));

  const details = [
    city,
    country,
    item.rentalCompany,
    item.type,
    item.make,
    item.id,
    item.accessories[0],
  ];

  const toggleModal = () => {
    setIsModalOpen((state) => !state);
  };

  const handleCloseModal = (event, reason) => {
    if (reason === "escapeKeyDown" || reason === "backdropClick") {
      toggleModal();
    }
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <>
      <Paper elevation={0} sx={{ height: 426 }}>
        <ImgWrapper>
          <AdvertImage
            alt={`${item.make} ${item.model}`}
            src={item.img}
            onError={(e) => {
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
          <DetailsList items={details} />
        </div>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#3470FF",
            borderRadius: 12,
            padding: "12px 50px",
          }}
          onClick={toggleModal}
        >
          Learn More
        </Button>
      </Paper>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{ overflow: "scroll", height: "800px" }}
      >
        <Box
          position="absolute"
          top="2%"
          left="30.5%"
          sx={{
            backgroundColor: "#ffffff",
            padding: "25px",
            borderRadius: "34px",
          }}
        >
          <Button
            sx={{ position: "absolute", top: "0", right: "0" }}
            onClick={toggleModal}
          >
            <CloseIcon style={{ color: "#000" }} />
          </Button>
          <ModalContainer>
            <CarInfo item={item} />
          </ModalContainer>
        </Box>
      </Modal>
    </>
  );
};

AdvertCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AdvertCard;
