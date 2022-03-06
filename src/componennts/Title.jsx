import { Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import useStyles from "../styles/style";

const Title = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper
      variant="outlined"
      className={classes.tabs}
      sx={{
        padding: "20px",
      }}
    >
      <Typography
        sx={{ marginTop: "80px" }}
        variant="h2"
        align="center"
        gutterBottom
        color="textPrimary"
      >
        {t("Criminal_Court_of_Appeal")}
      </Typography>
      <Typography align="center" paragraph color="textPrimary">
        {t("Criminal_Court_of_Appeal_definition")}
      </Typography>
    </Paper>
  );
};

export default Title;
