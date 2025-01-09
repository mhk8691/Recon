import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./Data";
import Menu from "./Menu";
import { Box } from "@mui/material";
export default function BasicTable() {
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3, maxHeight: "600px" }}>
        <Table aria-label="simple table" size="small">
          <TableHead
            sx={{
              bgcolor: "#18181B",
              borderRadius: "30px",
            }}
          >
            <TableRow>
              <TableCell
                style={{
                  color: "#6F6F76",
                  fontSize: ".7rem",
                  backgroundColor: "#161618",
                }}
                width={"35%"}
              >
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
                align="center"
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
                align="center"
                width={"15%"}
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
                style={{ color: "#6F6F76", fontSize: ".65rem" }}
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
              <TableCell align="right" width={"5%"}>
                {" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "#0E0E12", overflowX: "auto" }}>
            {rows.map((row) => (
              <TableRow
                key={row.HOST.ip}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "#18181B",
                  },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "#8C8C94",
                    backgroundColor: "#121215",
                  }}
                >
                  <span>
                    <span
                      style={{
                        backgroundColor: "#242425",
                        padding: ".1rem .2rem",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      </svg>
                    </span>
                    <span style={{ marginLeft: ".3rem", fontSize: ".8rem" }}>
                      {row.HOST.ip}
                    </span>
                  </span>

                  <span
                    style={{
                      marginLeft: "8rem",
                      backgroundColor: "#131C1A",
                      color: "#0B613A",
                      padding: ".2rem",
                      fontSize: ".7rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.HOST.date}
                  </span>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#8C8C94",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".7rem",
                      backgroundColor: "#161619",
                      padding: ".1rem .2rem",
                      border: "1px solid #2C2C2C",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.PORT}
                  </span>
                </TableCell>
                <TableCell align="right" style={{ color: "#8C8C94" }}>
                  <Box
                    component={"span"}
                    sx={{
                      fontSize: ".7rem",
                      backgroundColor: "#161619",
                      padding: ".1rem .2rem",
                      border: "1px solid #2C2C2C",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.IP}
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ color: "#8C8C94" }}>
                  {row.TECHNOLOGIES.map((tech) => (
                    <div
                      style={{
                        backgroundColor: "#161619",
                        padding: ".1rem .2rem",
                        border: "1px solid #2C2C2C",
                        borderRadius: ".5rem",
                        width: "30%",
                        marginRight: ".5rem",
                        display: "inline-block",
                      }}
                    >
                      <img src={tech} style={{ width: "100%" }} alt="" />
                    </div>
                  ))}
                </TableCell>
                <TableCell align="right" style={{ color: "#38A260" }}>
                  <span
                    style={{
                      fontSize: ".7rem",
                      backgroundColor: "#1A3A29",
                      padding: ".1rem .2rem",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.STATUS}
                  </span>
                </TableCell>
                <TableCell align="right" style={{ color: "#8C8C94" }}>
                  <span
                    style={{
                      fontSize: ".6rem",
                      backgroundColor: "#161619",
                      padding: ".1rem .2rem",
                      border: "1px solid #2C2C2C",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.TITLE}
                  </span>
                </TableCell>
                <TableCell align="right" style={{ color: "#8C8C94" }}>
                  {row.CNAME}
                </TableCell>
                <TableCell align="right" style={{ color: "#8C8C94" }}>
                  <span
                    style={{
                      fontSize: ".7rem",
                      backgroundColor: "#161619",
                      padding: ".1rem .2rem",
                      border: "1px solid #2C2C2C",
                      borderRadius: ".5rem",
                    }}
                  >
                    {row.CONTENTLENGTH}
                  </span>
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "#8C8C94", fontSize: ".7rem" }}
                >
                  {row.FIRSTSEEN}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "#8C8C94", fontSize: ".7rem" }}
                >
                  {row.LASTSEEN}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "#8C8C94", fontSize: ".7rem" }}
                >
                  <Menu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
