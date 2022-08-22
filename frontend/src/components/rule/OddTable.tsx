import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

const rows = [
  {
    tier: "Match 5 main numbers and 2 star numbers",
    odd: "1 in 139 838 160",
    prize: "€35 284 265",
  },
  {
    tier: "Match 5 main numbers and 1 star number",
    odd: "1 in 6 991 908",
    prize: "€575 877",
  },
  {
    tier: "Match 5 main numbers",
    odd: "1 in 3 107 515",
    prize: "€116 555",
  },
  {
    tier: "Match 4 main numbers and 2 star numbers",
    odd: "1 in 621 503",
    prize: "€4 319",
  },
  {
    tier: "Match 4 main numbers and 1 star number",
    odd: "1 in 31 075",
    prize: "€269",
  },
  {
    tier: "Match 3 main numbers and 2 star numbers",
    odd: "1 in 14 125",
    prize: "€95",
  },
  {
    tier: "Match 4 main numbers",
    odd: "1 in 13 811",
    prize: "€105",
  },
  {
    tier: "Match 2 main numbers and 2 star numbers",
    odd: "1 in 985",
    prize: "€22",
  },
  {
    tier: "Match 3 main numbers and 1 star number",
    odd: "1 in 706",
    prize: "€19",
  },
  {
    tier: "Match 3 main numbers",
    odd: "1 in 314",
    prize: "€16",
  },
  {
    tier: "Match 1 main number and 2 star numbers",
    odd: "1 in 188",
    prize: "€11",
  },
  {
    tier: "Match 2 main numbers and 1 star number",
    odd: "1 in 49",
    prize: "€9",
  },
];

const OddTable = () => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <h2>Odd of Winning Table</h2>
      <TableContainer component={Box} style={{ marginTop: "1rem" }}>
        <Table sx={{ minWidth: 650, maxWidth: 750 }} aria-label="caption table">
          <caption>Source: Euro-jackpot.net</caption>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "var(--light-purple)",
                borderBottom: "solid 1.5px #000",
              }}
            >
              <TableCell
                align="center"
                sx={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Prize Tier
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Odds of Winning
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "700", fontSize: "1.2rem" }}
              >
                Average Prize
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.tier}
                sx={{
                  ":nth-of-type(2n)": {
                    backgroundColor: "var(--light-purple)",
                  },
                }}
              >
                <TableCell
                  align="center"
                  sx={{ borderBottom: "solid 0.2px #000", fontSize: "0.8rem" }}
                >
                  {row.tier}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderBottom: "solid 0.2px #000", fontSize: "0.8rem" }}
                >
                  {row.odd}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderBottom: "solid 0.2px #000", fontSize: "0.8rem" }}
                >
                  {row.prize}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OddTable;
