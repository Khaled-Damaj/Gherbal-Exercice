import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useStyles from "../styles/style";

const Footer = () => {
  const date = new Date();
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography>
        Made with <FavoriteIcon color="primary" sx={{ margin: "0 1px" }} />
        By Khaled Damaj &copy; {date.getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
