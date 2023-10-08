import AdvertCard from "components/AdvertCard";

const AdvertGrid = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <AdvertCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertGrid;
