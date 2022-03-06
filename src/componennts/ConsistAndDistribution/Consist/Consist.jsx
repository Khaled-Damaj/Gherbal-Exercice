import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import judge from "../../../images/judge.png";
import two_consultant from "../../../images/two_consultant.png";
import useStyles from "./style";

const cards = [
  {
    image: judge,
    title: "president",
  },
  {
    image: two_consultant,
    title: "two_consultant",
  },
];

const Consist = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography
        className={classes.consist}
        variant="h4"
        align="center"
        gutterBottom
      >
        {t("The_court_of_appeal_consists")}
      </Typography>
      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4}>
          {cards.map((card, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={card.image}
                    title={t(card.title)}
                    alt={t(card.title)}
                  />
                  <CardContent>
                    <Typography variant="h4" gutterBottom align="center">
                      {t(card.title)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Consist;
