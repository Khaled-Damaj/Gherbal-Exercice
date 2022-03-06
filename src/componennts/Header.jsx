import { Typography, AppBar, Toolbar, Select, MenuItem } from "@mui/material";
import i18next from "i18next";
import { useEffect, useState } from "react";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const languages = [
  {
    path: "/",
    code: "en",
    name: "English",
  },
  {
    path: "/ar",
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
];

const Header = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentlanguage = languages.find((l) => l.code === currentLanguageCode);
  const [language, setLanguage] = useState(currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.querySelector("html").dir = currentlanguage.dir || "ltr";
    document.body.dir = currentlanguage.dir || "ltr";
    document.title = t("app_title");
    setLanguage(currentlanguage.code);
  }, [currentlanguage, t]);

  const updateLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const changeLanguage = (code) => {
    document.querySelector("html").lang = code;
    i18next.changeLanguage(code);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t("app_title")}
        </Typography>
        <Select value={language} onChange={updateLanguage}>
          <MenuItem key={0} value="" disabled>
            Select Languages
          </MenuItem>
          {languages.map(({ path, code, name }, index) => {
            return (
              <MenuItem
                value={code}
                key={index + 1}
                onClick={() => {
                  changeLanguage(code);
                }}
              >
                <Link to={path}>{name}</Link>
              </MenuItem>
            );
          })}
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
