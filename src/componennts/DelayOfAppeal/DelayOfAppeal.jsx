import AppealCards from "./AppealCards";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import GavelIcon from "@mui/icons-material/Gavel";
import protester from "../../images/protester.png";
import defendant from "../../images/defendant.png";
import appellate_public_prosecutor from "../../images/appellate_public_prosecutor.png";
import public_prosecution from "../../images/public_prosecution.png";
import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import useStyles from "./style";
import { useTranslation } from "react-i18next";

const data1 = [
  {
    delay: 15,
    title: "Final_Judgements_1",
    tasks: ["Final_Judgements_1_task1", "Final_Judgements_1_task2"],
    image: defendant,
  },
  {
    delay: 30,
    title: "Final_Judgements_2",
    tasks: ["Final_Judgements_2_task1"],
    image: appellate_public_prosecutor,
  },

  {
    delay: 60,
    title: "Final_Judgements_3",
    tasks: ["Final_Judgements_3_task1"],
    image: public_prosecution,
  },
];

const data2 = [
  {
    delay: 1,
    title: "With_respect_to_the_Public_Prosecution",
    tasks: ["As_of_the_date_of_issuance_of_the_decision"],
    image: public_prosecution,
  },
  {
    delay: 1,
    title: "With_respect_to_the_opponents",
    tasks: ["As_of_the_date_of_notifying_the_opponents_of_the_same"],
    image: protester,
  },
];

const data3 = [
  {
    text: "Dissolution_of_the_appealed_judgment",
    icon: <DoDisturbAltIcon color="primary" fontSize="large" />,
  },
  {
    text: "Legalization_of_the_appealed_judgment",
    icon: <GavelIcon color="primary" fontSize="large" />,
  },
];

const DelayOfAppeal = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.title}
      >
        {t("Final_Judgements")}
      </Typography>
      <Paper elevation={1} className={classes.paper}>
        <AppealCards data={data1} total_cards={3} />
      </Paper>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.title}
      >
        {t("Decision_on_revoking")}
      </Typography>
      <Paper elevation={1} className={classes.paper}>
        <AppealCards data={data2} total_cards={2} />
      </Paper>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.title}
      >
        {t("Decisions_of_the_Court_of_Appeal")}
      </Typography>
      <Paper elevation={1} className={classes.paper}>
        <Grid container spacing={2}>
          {data3.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardContent className={classes.flex_row}>
                    <Typography
                      paragraph
                      sx={{ marginBottom: 0, padding: "5px" }}
                    >
                      {t(item.text)}
                    </Typography>
                    {item.icon}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <Paper elevation={1} className={classes.alert}>
        <PriorityHighIcon color="primary" fontSize="large" />
        <Typography paragraph sx={{ marginBottom: 0, padding: "5px" }}>
          {t("Court_of_Appeal_is_entitled")}
        </Typography>
      </Paper>
    </>
  );
};

export default DelayOfAppeal;
