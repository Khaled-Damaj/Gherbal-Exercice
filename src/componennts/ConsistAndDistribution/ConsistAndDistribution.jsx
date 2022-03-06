import { Box } from "@mui/material";
import Tabs from "../Tabs";
import Consist from "./Consist/Consist";
import Distribution from "./Distribution/Distribution";

const tabs = [
  { label: "consist", element: <Consist /> },
  { label: "distribution", element: <Distribution /> },
];

const ConsistAndDistribution = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs tabs={tabs} />
    </Box>
  );
};

export default ConsistAndDistribution;
