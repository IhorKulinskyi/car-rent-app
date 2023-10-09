import AdvertCard from "components/AdvertCard";
import Grid from "@mui/material/Grid";

const AdvertGrid = ({ items }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={3} key={item.id}>
            <AdvertCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AdvertGrid;
