import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  flex_row: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    margin: "30px 0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "30px 0",
    padding: "20px 15px",
    height: "calc(100% - 60px)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    borderBottom: "1px solid #ccc",
  },
  cardMedia: {
    display: "block",
    height: "100px",
    width: "100px",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    borderBottom: "1px solid #ccc",
    padding: "25px",
  },
  divImage: {
    display: "flex",
    justifyContent: "center",
  },
  cardFooter: {
    display: "flex",
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  paper: {
    backgroundColor: "#fafafa",
    padding: "20px",
    marginBottom: "30px",
    margin: "30px 0",
  },
  div_footer: {
    marginTop: "20px",
  },
  alert: {
    display: "flex",
    alignContent: "center",
    backgroundColor: "rgb(102, 150, 255)",
    color: "#f6f6f6",
    padding: "15px 10px 10px 15px",
    marginBottom: "30px",
  },
}));
