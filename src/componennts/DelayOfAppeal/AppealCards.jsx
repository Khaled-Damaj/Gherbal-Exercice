import { Grid } from "@mui/material";
import AppealCard from "./AppealCard";

const AppealCards = ({ data, total_cards }) => {
  return (
    <>
      <Grid container spacing={3}>
        {data.map((card, index) => {
          return (
            <AppealCard key={index} data={card} total_cards={total_cards} />
          );
        })}
      </Grid>
    </>
  );
};

export default AppealCards;
