import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./Data";
import { Box, Typography } from "@mui/material";

// function colorCalculator(severity: string): Array<string> {
//   let color: string = "#F5A623";
//   let backgroundColor: string = "#F5A623";
//   if (severity === "LOW") {
//     color = "#717BDB";
//     backgroundColor = "#1B1B39";
//   } else if (severity === "MEDIUM") {
//     color = "#FBBF24";
//     backgroundColor = "#38270B";
//   } else if (severity === "HIGH") {
//     color = "#E68537";
//     backgroundColor = "#391E0D";
//   } else if (severity === "CRITICAL") {
//     color = "#C25758";
//     backgroundColor = "#371517";
//   } else if (severity === "INFO") {
//     color = "#1FA351";
//     backgroundColor = "#173425";
//   } else if (severity === "UNKNOWN") {
//     color = "#D5D5D6";
//     backgroundColor = "#27272A";
//   }
//   return [backgroundColor, color];
// }

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, maxHeight: "400px", border: "none" }}
    >
      <Table
        sx={{ minWidth: 650, border: "1px solid #27272A" }}
        aria-label="simple table"
        size="small"
      >
        <TableHead style={{ backgroundColor: "#18181B" }}>
          <TableRow>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
            >
              #
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              width={"55%"}
            >
              Contributor
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Top Category
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Total Templates
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Total Points
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            bgcolor: "#09090B",
          }}
        >
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  bgcolor: "#18181B",
                },

                cursor: "pointer",
                background:
                  (row.rating == 1 &&
                    "linear-gradient(90deg,  #20180A 0%,#0A0A0B 100%)") ||
                  (row.rating == 2 &&
                    "linear-gradient(90deg,  #1D1D20 0%,#0A0A0B 100%)") ||
                  (row.rating == 3 &&
                    "linear-gradient(90deg,  #211417 0%,#0A0A0B 100%)") ||
                  "",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#FEFEFE",
                  fontSize: ".8rem",
                  py: 1,
                }}
              >
                {row.rating}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#FEFEFE",
                  fontSize: ".8rem",
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.title}
                <Box component={"span"}>
                  {row.icons.map((icon, index) => (
                    <Box component={"span"} sx={{ml:1.5}} key={index}>
                      {icon}
                    </Box>
                  ))}
                </Box>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#FEFEFE",
                  fontSize: ".8rem",
                  py: 1,
                }}
                align="left"
              >
                <Typography
                  variant="body2"
                  component={"span"}
                  color="#B83837"
                  sx={{
                    bgcolor: "#281814",
                    borderRadius: "10px",
                    px: 1,
                    py: 0.1,
                  }}
                >
                  {row.topCategory}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",

                  fontSize: ".8rem",
                  py: 1,
                }}
                component={"span"}
                align="left"
              >
                <Typography
                  variant="body2"
                  color="initial"
                  component={"span"}
                  sx={{
                    ml: 1,
                    // bgcolor: colorCalculator(row.severity)[0],
                    // color: colorCalculator(row.severity)[1],
                    py: 1,
                    px: 1,
                    borderRadius: "12px",
                    fontSize: ".8rem",
                  }}
                >
                  {row.totalTemplate}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#94949D",
                  fontSize: ".8rem",
                  py: 1,
                }}
                align="left"
              >
                {row.totalPoint}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
