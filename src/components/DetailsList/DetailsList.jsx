import PropTypes from "prop-types";
import { Details, DetailsListItem, DetailsList } from "./DetailsList.styled";

const DetailsListCompnent = ({ items }) => {
  return (
    <DetailsList>
      {items.map((item) => (
        <DetailsListItem key={item}>
          <Details>{item}</Details>
        </DetailsListItem>
      ))}
    </DetailsList>
  );
};

DetailsListCompnent.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DetailsListCompnent;
