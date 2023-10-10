import { formatAddress } from "helpers";
import {
  DetailsList,
  DetailsListItem,
  Details,
  ImgWrapper,
} from "components/AdvertCard/AdvertCard.styled";
import {
  ConditionsItem,
  ConditionValue,
  ConditionsList,
  CarInfoImage,
} from "components/CarInfo/Car.info.styled";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import fallbackImageUrl from "../../public/images/fallback_sedan.jpg";

const CarInfo = ({ item }) => {
  const { city, country } = formatAddress(item.address);
  const accesoirsAndFunctionalities = [
    ...item.accessories,
    ...item.functionalities,
  ];
  const [rawAge, ...conditions] = item.rentalConditions.split("\n");
  const [label, age] = rawAge.split(": ");
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
        <p>
          {item.make}
          {item.model},{item.year}
        </p>
        <DetailsList>
          <DetailsListItem>
            <Details>{city}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>{country}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>Id: {item.id}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>Year: {item.year}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>Type: {item.type}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>Fuel consumption: {item.fuelConsumption}</Details>
          </DetailsListItem>
          <DetailsListItem>
            <Details>Engime Size: {item.engineSize}</Details>
          </DetailsListItem>
        </DetailsList>
        <p>{item.description}</p>
        <div>
          <p>Accessories and functionalities:</p>
          <DetailsList>
            {accesoirsAndFunctionalities.map((item) => (
              <DetailsListItem key={item}>
                <Details>{item}</Details>
              </DetailsListItem>
            ))}
          </DetailsList>
        </div>
        <div>
          <p>Rental conditions</p>
          <ConditionsList>
            <ConditionsItem>
              {label}: <ConditionValue>{age}</ConditionValue>
            </ConditionsItem>
            {conditions.map((item) => (
              <ConditionsItem key={item}>{item}</ConditionsItem>
            ))}
            <ConditionsItem>
              Mileage: <ConditionValue>{item.mileage}</ConditionValue>
            </ConditionsItem>
            <ConditionsItem>
              Price: <ConditionValue>{item.rentalPrice}</ConditionValue>
            </ConditionsItem>
          </ConditionsList>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3470FF",
            borderRadius: 12,
            padding: "12px 50px",
          }}
        >
          Car Rental
        </Button>
      </div>
    </Container>
  );
};

export default CarInfo;
