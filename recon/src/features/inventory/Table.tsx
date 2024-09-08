import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./Data";

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            bgcolor: "#151517",
            borderBottom: "1px solid #27272A",
            borderRadius: "30px",
            padding: "5rem",
          }}
        >
          <TableRow>
            <TableCell style={{ color: "#6F6F76", fontSize: ".7rem" }}>
              HOST
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              PORT
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              IP
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              TECHNOLOGIES
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              STATUS
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              TITLE
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              CNAME
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              CONTENT LENGTH
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              FIRST SEEN
            </TableCell>
            <TableCell
              style={{ color: "#6F6F76", fontSize: ".7rem" }}
              align="right"
            >
              LAST SEEN
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: "#0E0E12" }}>
          {rows.map((row) => (
            <TableRow
              style={{ borderBottom: "1px solid #27272A" }}
              key={row.HOST.ip}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: "#8C8C94" }}
              >
                {row.HOST.ip}
                {row.HOST.date}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.PORT}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.IP}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                <img src={row.TECHNOLOGIES} style={{ width: "50%" }} alt="" />
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.STATUS}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.TITLE}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.CNAME}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.CONTENTLENGTH}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.FIRSTSEEN}
              </TableCell>
              <TableCell align="right" style={{ color: "#8C8C94" }}>
                {row.LASTSEEN}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
