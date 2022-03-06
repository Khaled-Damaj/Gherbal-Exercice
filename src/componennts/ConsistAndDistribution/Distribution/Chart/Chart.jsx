import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import useStyles from "./style.js";

const Chart = ({ data, governorate }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [dataBar, setDataBar] = useState([]);
  const [labelX, setLabelX] = useState("governorate");
  const [labelY, setLabelY] = useState("total_judges");
  const keys = data.map((obj) => obj.governorate);

  useEffect(() => {
    if (governorate.toLowerCase() === "all") {
      const labels = data.map((obj) => {
        return {
          ...obj,
          governorate: t(obj.governorate),
        };
      });
      setDataBar(labels);
      setLabelX("governorate");
      setLabelY("total_judges");
      return;
    }
    let obj = data.find((obj) => governorate === obj.governorate);
    let newData = [];
    for (const property in obj) {
      newData.push({ name: t(property), value: obj[property] });
    }
    setDataBar(newData.slice(1));
    setLabelX("name");
    setLabelY("value");
  }, [governorate]);

  return (
    <div className={classes.chart_container}>
      <ResponsiveContainer width="100%" height={400} margin={{}}>
        <BarChart data={dataBar}>
          <Bar dataKey={labelY} fill="green" />
          <Tooltip />
          <XAxis dataKey={labelX} tick={{ fontSize: 14 }} />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
