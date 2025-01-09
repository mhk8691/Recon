import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createData, rows } from "./Data";
import RadarIcon from "@mui/icons-material/Radar";
import DownloadIcon from "@mui/icons-material/Download";
import Menu from "../inventory/Menu";

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" }, backgroundColor: "#0D0D0F" }}
      >
        <TableCell
          component="th"
          scope="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundColor: "#121212",
            border: "none",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <img
              src={row.technology.icon}
              alt={row.technology.name}
              style={{
                backgroundColor: "#292929",
                width: "20px",
                height: "20px",
                borderRadius: "5px",
                padding: "2px",
              }}
            />
            <Typography
              variant="body2"
              color="white"
              sx={{ marginLeft: ".5rem" }}
            >
              {row.technology.name}
            </Typography>
          </Box>
          <Typography variant="body2" color="white" style={{ display: "flex" }}>
            <span
              style={{
                color: "white",
                backgroundColor: "#232323",
                borderRadius: "5px",
                fontSize: ".7rem",
                padding: ".1rem .3rem",
                display: "flex",
                alignItems: "center",
                border: "1px solid #313131",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                style={{ marginRight: ".2rem" }}
              >
                <path
                  d="M12.25 5.16667C12.2498 4.96208 12.1958 4.76114 12.0934 4.58401C11.991 4.40688 11.8438 4.25979 11.6667 4.1575L7.58333 1.82417C7.40598 1.72177 7.20479 1.66786 7 1.66786C6.79521 1.66786 6.59402 1.72177 6.41667 1.82417L2.33333 4.1575C2.15615 4.25979 2.00899 4.40688 1.9066 4.58401C1.80422 4.76114 1.75021 4.96208 1.75 5.16667V9.83333C1.75021 10.0379 1.80422 10.2389 1.9066 10.416C2.00899 10.5931 2.15615 10.7402 2.33333 10.8425L6.41667 13.1758C6.59402 13.2782 6.79521 13.3321 7 13.3321C7.20479 13.3321 7.40598 13.2782 7.58333 13.1758L11.6667 10.8425C11.8438 10.7402 11.991 10.5931 12.0934 10.416C12.1958 10.2389 12.2498 10.0379 12.25 9.83333V5.16667Z"
                  stroke="#6366F1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1.92499 4.58333L6.99999 7.5L12.075 4.58333"
                  stroke="#6366F1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 13.3333V7.5"
                  stroke="#6366F1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              {row.technology.description}
            </span>
            <span
              style={{
                color: "white",
                backgroundColor: "#232323",
                borderRadius: "5px",
                fontSize: ".7rem",
                padding: ".1rem .3rem",
                border: "1px solid #313131",
                marginLeft: ".5rem",
              }}
            >
              {row.technology.count} Assets
            </span>
          </Typography>
        </TableCell>
        <TableCell align="center" sx={{ border: "none" }}>
          <Typography variant="body2" color="#7A7A7B" sx={{fontSize:'.8rem'}}>
            {row.description}
          </Typography>
        </TableCell>

        <TableCell sx={{ border: "none" }}>
          <TableCell sx={{ border: "none" }}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                fontSize: ".7rem",
                padding: "0",
                color: "white",
                borderColor: "#333333",
                bgcolor: "#171717",
                py: ".2rem",
                px: ".3rem",
                margin: "0",
                borderRadius: "7px",
                "&:hover": {
                  backgroundColor: "#6366F1",
                  color: "white",
                  borderColor: "#6366F1",
                  boxShadow: "none",
                },
              }}
              color="primary"
              startIcon={<RadarIcon />}
            >
              scan
            </Button>
          </TableCell>
          <TableCell sx={{ border: "none" }}>
            <Box
              sx={{
                color: "white",
                border: "1px solid #333333",
                bgcolor: "#171717",
                borderRadius: "7px",
                py: ".17rem",
                cursor: "pointer",
                px: ".5rem",
                "&:hover": {
                  transition: ".5s ease",
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DownloadIcon fontSize="small" />
            </Box>
          </TableCell>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: "white" }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, padding: "0" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table
                size="small"
                aria-label="purchases"
                sx={{ borderTop: "1px solid white" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#7A7A7B",
                        fontSize: ".7rem",
                        bgcolor: "#121212",
                      }}
                      width="20%"
                    >
                      HOST
                    </TableCell>
                    <TableCell sx={{ color: "#7A7A7B", fontSize: ".7rem" }}>
                      PORT
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      IP
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      TECHNOLOGIES
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      STATUS
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      TITLE
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      CNAME
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      CONTENT LENGTH
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      FIRST SEEN
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    >
                      LAST SEEN
                    </TableCell>
                    <TableCell
                      sx={{ color: "#7A7A7B", fontSize: ".7rem" }}
                      align="right"
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.HOST.ip}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          color: "white",
                          fontSize: ".7rem",
                          backgroundColor: "#121212",
                        }}
                      >
                        <span>{historyRow.HOST.ip}</span>
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: ".7rem" }}>
                        <span
                          style={{
                            backgroundColor: "#171719",
                            padding: ".1rem .3rem",
                            borderRadius: ".4rem",
                            border: "1px solid #4B4B4B",
                          }}
                        >
                          {historyRow.PORT}
                        </span>
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        <span
                          style={{
                            backgroundColor: "#171719",
                            padding: ".1rem .3rem",
                            borderRadius: ".4rem",
                            border: "1px solid #4B4B4B",
                          }}
                        >
                          {historyRow.IP}
                        </span>
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        <img
                          src={historyRow.TECHNOLOGIES[0]}
                          alt={historyRow.TECHNOLOGIES[0]}
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "5px",
                            padding: "3px",
                            backgroundColor: "#171719",
                          }}
                        />
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        <span
                          style={{
                            backgroundColor: "#1A3A29",
                            padding: ".1rem .3rem",
                            borderRadius: ".4rem",
                            color: "#43C673",
                          }}
                        >
                          {historyRow.STATUS}
                        </span>
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        {historyRow.TITLE}
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        {historyRow.CNAME}
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        {historyRow.CONTENTLENGTH}
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        {historyRow.FIRSTSEEN}
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        {historyRow.LASTSEEN}
                      </TableCell>
                      <TableCell
                        style={{ color: "white", fontSize: ".7rem" }}
                        align="right"
                      >
                        <Menu />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table
        aria-label="collapsible table"
        sx={{
          bgcolor: "#0D0D0F",
          border: "2px solid #52525B",
        }}
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: "#7A7A7B", bgcolor: "#19191A" }}
              width="35%"
            >
              TECHNOLOGY
            </TableCell>
            <TableCell
              sx={{ color: "#7A7A7B", bgcolor: "#141414" }}
              align="left"
            >
              DESCRIPTION
            </TableCell>
            <TableCell sx={{ bgcolor: "#141414" }} />
            <TableCell sx={{ bgcolor: "#141414" }} />
            <TableCell sx={{ bgcolor: "#141414" }} />
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <Row key={row.technology.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
