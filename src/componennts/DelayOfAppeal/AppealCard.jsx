import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckIcon from "@mui/icons-material/Check";
import useStyles from "./style.js";
import delay_image from "../../images/delay.png";

const AppealCard = ({ data, total_cards }) => {
  const { delay, title, tasks, image } = data;
  console.log(data.image, typeof image);
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={12 / (total_cards - 1)}
        lg={12 / total_cards}
      >
        <Card className={classes.card}>
          <div className={classes.cardHeader}>
            <CardContent className={classes.cardContentHeader}>
              <Typography gutterBottom paragraph>
                {t("Delay_Days")}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {delay}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={delay_image}
              title={""}
              alt={""}
            />
          </div>
          <CardContent className={classes.cardBody}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ marginBottom: "20px" }}
            >
              {t(title)}
            </Typography>
            <div className={classes.divImage}>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={`${image}`}
                title={""}
                alt={""}
              />
            </div>
          </CardContent>
          <Grid container className={classes.div_footer}>
            {tasks.map((task, index) => {
              return (
                <Grid key={index} item xs={12} sm={12} md={12}>
                  <CardContent className={classes.cardFooter}>
                    <CheckIcon sx={{ margin: "0 7px" }} color="primary" />
                    <Typography paragraph>{t(task)}</Typography>
                  </CardContent>
                </Grid>
              );
            })}
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default AppealCard;
