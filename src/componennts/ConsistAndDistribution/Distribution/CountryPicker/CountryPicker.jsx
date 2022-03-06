import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CountryPicker = ({ data, handleGovernorateChange }) => {
  const [governorate, setGovernorate] = useState(0);
  const { t } = useTranslation();

  const keys = ["all", ...data.map((obj) => obj.governorate)];

  const handleChange = (e) => {
    setGovernorate(e.target.value);
    handleGovernorateChange(keys[e.target.value]);
  };

  return (
    <FormControl sx={{ minWidth: "200px", margin: "20px 0" }}>
      <InputLabel id="demo-simple-select-label" className="input">
        {t("governorate")}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={t("all")}
        value={governorate}
        label="Governorate"
        onChange={handleChange}
      >
        {keys.map((key, index) => {
          return (
            <MenuItem key={index} value={index}>
              {t(key)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CountryPicker;
