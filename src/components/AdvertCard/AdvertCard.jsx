// import {PropTypes} from "prop-types";
import { formatAddress } from "helpers";

const AdvertCard = ({ item }) => {
  const { city, country } = formatAddress(item.address);
  return (
      <div>
        <div>
          <img alt={`${item.make} ${item.model}`} src={item.img} width={200} height={200}/>
        </div>
        <div>
          <p>
            {item.make} {item.model},{item.year}
          </p>
          <p>{item.price}</p>
        </div>
        <div>
          <p>
            {city} | {country} | {item.rentalCompany} | {item.type} |{" "}
            {item.make} | {item.id} | {item.accessories[0]}
          </p>
        </div>
      </div>
  );
};

export default AdvertCard;


