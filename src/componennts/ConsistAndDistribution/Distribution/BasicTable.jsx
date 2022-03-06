import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";

export default function BasicTable({ data, governorate }) {
  const [rows, setRows] = React.useState(data);
  const keys = Object.keys(data[0]);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (governorate.toLowerCase() === "all") {
      setRows(data);
      return;
    }
    const filteredData = data.filter((row) => governorate === row.governorate);
    setRows(filteredData);
  }, [governorate]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {keys.map((cell, index) => {
              return (
                <TableCell key={index} align={index === 0 ? "left" : "right"}>
                  {t(cell)}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const {
              governorate,
              total_judges,
              number_chambers,
              president,
              appeal_judge,
              addition_appeal_judge,
              attorney_general,
              counsel_for_prosecution,
              first_examining_judge,
              examining_judge,
            } = row;
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {t(governorate)}
                </TableCell>
                <TableCell align="right">{t(number_chambers)}</TableCell>
                <TableCell align="right">{t(president)}</TableCell>
                <TableCell align="right">{t(appeal_judge)}</TableCell>
                <TableCell align="right">{t(addition_appeal_judge)}</TableCell>
                <TableCell align="right">{t(attorney_general)}</TableCell>
                <TableCell align="right">
                  {t(counsel_for_prosecution)}
                </TableCell>
                <TableCell align="right">{t(first_examining_judge)}</TableCell>
                <TableCell align="right">{t(examining_judge)}</TableCell>
                <TableCell align="right">{t(total_judges)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
