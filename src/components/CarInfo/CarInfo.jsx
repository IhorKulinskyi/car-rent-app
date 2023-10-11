import PropTypes from "prop-types";
import { formatAddress, formatNumberWithCommas } from "helpers";
import DetailsList from "components/DetailsList";
import {
  ImgWrapper,
  DescriptionItem,
  Description,
} from "components/AdvertCard/AdvertCard.styled";
import {
  ConditionsItem,
  ConditionValue,
  ConditionsList,
  CarInfoImage,
} from "components/CarInfo/Car.info.styled";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import fallbackImageUrl from "../../public/images/fallback_sedan.jpg";

const CarInfo = ({ item }) => {
  const { city, country } = formatAddress(item.address);
  const mileage = formatNumberWithCommas(item.mileage);
  const phoneNumber = "+380730000000";

  const accesoirsAndFunctionalities = [
    ...item.accessories,
    ...item.functionalities,
  ];
  const details = [
    city,
    country,
    `Id: ${item.id}`,
    `Year: ${item.year}`,
    `Type: ${item.type}`,
    `Fuel consumption: ${item.fuelConsumption}`,
    `Engime Size: ${item.engineSize}`,
  ];
  const [rawAge, ...conditions] = item.rentalConditions.split("\n");
  const [label, age] = rawAge.split(": ");

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <Container>
      <div>
        <ImgWrapper>
          <CarInfoImage
            src={item.img}
            alt={`${item.made},${item.model}`}
            onError={(e) => {
              console.log(e);
              e.target.src = fallbackImageUrl;
            }}
          />
        </ImgWrapper>
        <Description style={{ display: "inline-flex", marginBottom: "10px" }}>
          <DescriptionItem>{item.make}</DescriptionItem>{" "}
          <DescriptionItem isModel style={{ color: "#3470FF" }}>
            {item.model},
          </DescriptionItem>
          <DescriptionItem> {item.year}</DescriptionItem>
        </Description>
        <DetailsList items={details} />
        <DescriptionItem style={{ marginBottom: "15px" }}>
          {item.description}
        </DescriptionItem>
        <div>
          <DescriptionItem style={{ marginBottom: "15px" }}>
            Accessories and functionalities:
          </DescriptionItem>
          <DetailsList items={accesoirsAndFunctionalities} />
        </div>
        <div>
          <DescriptionItem style={{ marginBottom: "10px" }}>
            Rental conditions
          </DescriptionItem>
          <ConditionsList>
            <ConditionsItem>
              {label}: <ConditionValue>{age}</ConditionValue>
            </ConditionsItem>
            {conditions.map((item) => (
              <ConditionsItem key={item}>{item}</ConditionsItem>
            ))}
            <ConditionsItem>
              Mileage: <ConditionValue>{mileage}</ConditionValue>
            </ConditionsItem>
            <ConditionsItem>
              Price: <ConditionValue>{item.rentalPrice}</ConditionValue>
            </ConditionsItem>
          </ConditionsList>
        </div>
        <Button
          component={Link}
          onClick={handlePhoneCall}
          variant="contained"
          sx={{
            backgroundColor: "#3470FF",
            borderRadius: 12,
            padding: "12px 50px",
          }}
        >
          Rental Car
        </Button>
      </div>
    </Container>
  );
};

CarInfo.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CarInfo;
