import { Container } from "@mui/material";
import Header from "./Header";
import AppleTabs from "./Tabs";
import Title from "./Title";
import DelayOfAppeal from "./DelayOfAppeal/DelayOfAppeal";
import Jurisdiction from "./Jurisdiction/Jurisdiction";
import ConsistAndDistribution from "./ConsistAndDistribution/ConsistAndDistribution";
import Footer from "./Footer";

const tabs = [
  { label: "consist_distribution", element: <ConsistAndDistribution /> },
  { label: "jurisdiction", element: <Jurisdiction /> },
  { label: "delay_of_appeal", element: <DelayOfAppeal /> },
];

const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Title />
        <AppleTabs tabs={tabs} centered={true} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
