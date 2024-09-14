import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { rows } from "./Data";
import { Typography } from "@mui/material";

export function colorCalculator(severity: string): Array<string> {
  let color: string = "#F5A623";
  let backgroundColor: string = "#F5A623";
  if (severity === "LOW" || severity === "Low") {
    color = "#717BDB";
    backgroundColor = "#1B1B39";
  } else if (severity === "MEDIUM" || severity === "Medium") {
    color = "#FBBF24";
    backgroundColor = "#38270B";
  } else if (severity === "HIGH" || severity === "High") {
    color = "#E68537";
    backgroundColor = "#391E0D";
  } else if (severity === "CRITICAL"  || severity === "Critical") {
    color = "#C25758";
    backgroundColor = "#371517";
  } else if (severity === "INFO") {
    color = "#1FA351";
    backgroundColor = "#173425";
  } else if (severity === "UNKNOWN" || severity === "Unknown") {
    color = "#D5D5D6";
    backgroundColor = "#27272A";
  }
  return [backgroundColor, color];
}

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, maxHeight: "400px", border: "none" }}
    >
      <Table
        sx={{ minWidth: 650, border: "1px solid #27272A"}}
        aria-label="simple table"
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
              Title
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Host
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Severity
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Last Found
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Matches
            </TableCell>
            <TableCell
              sx={{
                color: "#94949C",
                fontSize: ".8rem",
                borderBottom: "1px solid #27272A",
              }}
              align="left"
            >
              Retest
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
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#FEFEFE",
                  fontSize: ".8rem",
                }}
              >
                {row.title}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#FEFEFE",
                  fontSize: ".8rem",
                }}
                align="left"
              >
                {row.host}
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",

                  fontSize: ".8rem",
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
                    bgcolor: colorCalculator(row.severity)[0],
                    color: colorCalculator(row.severity)[1],
                    py: 0.3,
                    px: 1,
                    borderRadius: "12px",
                    fontSize: ".8rem",
                  }}
                >
                  {row.severity}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #27272A",
                  color: "#94949D",
                  fontSize: ".8rem",
                }}
                align="left"
              >
                {row.lastFound}
              </TableCell>
              <TableCell
                sx={{ borderBottom: "1px solid #27272A" }}
                align="left"
              >
                {row.matches ? (
                  <DoneIcon fontSize="small" sx={{ color: "green" }} />
                ) : (
                  <CloseIcon fontSize="small" sx={{ color: "red" }} />
                )}
              </TableCell>
              <TableCell
                sx={{ borderBottom: "1px solid #27272A", color: "#94949D" }}
                align="left"
              >
                {row.retest}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
