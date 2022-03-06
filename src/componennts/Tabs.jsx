import { Tab, Tabs, Box, Paper } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import useStyles from "../styles/style";

const AppleTabs = ({ tabs, centered }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (e, val) => {
    setValue(val);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={3} className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          variant="fullWidth"
        >
          {tabs.map((tab, index) => {
            return (
              <Tab key={index} value={index} label={t(tab.label)} wrapped />
            );
          })}
        </Tabs>
      </Paper>
      {tabs.map((tab, index) => {
        return (
          <TabPanel key={index} value={value} index={index} wrapped>
            {tab.element}
          </TabPanel>
        );
      })}
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <> {children}</>}</>;
}

export default AppleTabs;
