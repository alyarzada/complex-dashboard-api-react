import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [];

const ControlPanelTasks = () => {
  return (
    <Box className="p-4 bg-gradient-to-r rounded-xl	mb-6">
      <Typography className="text-slate-400	font-bold	text-lg mb-10	">
        Son tasklar
      </Typography>
      <Box>
        {rows.length !== 0 ? (
          <TableContainer className="bg-gradient-to-r" component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="center">Calories</TableCell>
                  <TableCell align="center">Fat&nbsp;(g)</TableCell>
                  <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="center">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box className="bg-amber-200 p-4 text-center rounded-lg">
            <Typography>Melumat tapilmadi</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ControlPanelTasks;
