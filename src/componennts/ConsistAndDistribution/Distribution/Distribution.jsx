import CountryPicker from "./CountryPicker/CountryPicker";
import map from "../../../images/map.png";
import { useState } from "react";
import Chart from "./Chart/Chart";
import "./distribution.css";
import { useTranslation } from "react-i18next";
import BasicTable from "./BasicTable";
import { Typography } from "@mui/material";

const data = [
  {
    governorate: "beirut_governorate",
    number_chambers: 18,
    president: 15,
    appeal_judge: 30,
    addition_appeal_judge: 2,
    attorney_general: 1,
    counsel_for_prosecution: 5,
    first_examining_judge: 1,
    examining_judge: 6,
    total_judges: 60,
  },
  {
    governorate: "mount_lebanon_governorate",
    number_chambers: 18,
    president: 18,
    appeal_judge: 36,
    addition_appeal_judge: 4,
    attorney_general: 1,
    counsel_for_prosecution: 9,
    first_examining_judge: 1,
    examining_judge: 9,
    total_judges: 78,
  },
  {
    governorate: "north_lebanon_governorate",
    number_chambers: 10,
    president: 10,
    appeal_judge: 20,
    addition_appeal_judge: 3,
    attorney_general: 1,
    counsel_for_prosecution: 8,
    first_examining_judge: 1,
    examining_judge: 8,
    total_judges: 51,
  },
  {
    governorate: "beqaa_lebanon_governorate",
    number_chambers: 8,
    president: 8,
    appeal_judge: 16,
    addition_appeal_judge: 3,
    attorney_general: 1,
    counsel_for_prosecution: 5,
    first_examining_judge: 1,
    examining_judge: 5,
    total_judges: 39,
  },
  {
    governorate: "nabatiyeh_governorate",
    number_chambers: 6,
    president: 6,
    appeal_judge: 12,
    addition_appeal_judge: 2,
    attorney_general: 1,
    counsel_for_prosecution: 4,
    first_examining_judge: 1,
    examining_judge: 4,
    total_judges: 22,
  },
  {
    governorate: "south_lebanon_governorate",
    total_judges: 30,
    number_chambers: 6,
    president: 6,
    appeal_judge: 12,
    addition_appeal_judge: 2,
    attorney_general: 1,
    counsel_for_prosecution: 4,
    first_examining_judge: 1,
    examining_judge: 4,
  },
];

const Distribution = () => {
  const [governorate, setGovernorate] = useState("All");
  const { t } = useTranslation();

  const handleGovernorateChange = (gover) => {
    setGovernorate(gover);
  };

  return (
    <>
      <div className="container">
        <img src={map} alt="Map" title="Map" />
        <p className="info">{t("court_appeal_number")}</p>
      </div>
      <CountryPicker
        handleGovernorateChange={handleGovernorateChange}
        data={data}
      />
      <BasicTable data={data} governorate={governorate} />
      <Chart data={data} governorate={governorate} />
    </>
  );
};

export default Distribution;
