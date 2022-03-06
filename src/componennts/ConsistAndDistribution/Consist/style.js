import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  consist: {
    margin: "50px 0 30px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    objectFit: "cover",
    height: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));
