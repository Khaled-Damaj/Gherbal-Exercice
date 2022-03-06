import { Card, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import useStyles from "./style.js";

const data = [
  {
    text: "appeal_of_judgment_1",
  },
  {
    text: "appeal_of_judgment_2",
  },
  {
    text: "appeal_of_judgment_3",
  },
  {
    text: "appeal_of_judgment_4",
  },
];

const exceptions = [
  {
    text: "exceptions_1",
  },
  {
    text: "exceptions_2",
  },
  {
    text: "exceptions_3",
  },
];

const Jurisdiction = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.jurisdiction}
      >
        {t("court_of_appeal_misdemeanors")}
      </Typography>

      <Paper elevation={1} className={classes.paperException}>
        <Typography
          variant="h5"
          paragraph
          align="center"
          sx={{ color: "#1976d2" }}
        >
          {t("With_the_exception_of")}
        </Typography>
        <Grid container rowSpacing={2} columnSpacing={4}>
          {exceptions.map((exception, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.exception}>
                  <span className={classes.span}>{index + 1}</span>
                  <Typography
                    paragraph
                    sx={{ lineHeight: 1.7, fontSize: "16px" }}
                  >
                    {t(exception.text)}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.jurisdiction}
      >
        {t("court_of_appeal_violations")}
      </Typography>

      <Paper elevation={1} className={classes.paperException}>
        <Grid container rowSpacing={8} columnSpacing={8}>
          {data.map((appeal, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                <Card className={classes.card}>
                  <span className={classes.span}>{index + 1}</span>
                  <Typography
                    paragraph
                    sx={{ lineHeight: 1.7, fontSize: "17px" }}
                  >
                    {t(appeal.text)}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>

      <Paper elevation={1} className={classes.paper}>
        <PriorityHighIcon color="primary" fontSize="large" />
        <Typography paragraph sx={{ padding: "5px", marginBottom: 0 }}>
          {t("Court_of_Appeal_is_entitled")}
        </Typography>
      </Paper>
    </>
  );
};

export default Jurisdiction;
