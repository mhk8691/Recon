import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createData, rows } from "./Data";
import { Checkbox } from "@mui/material";
import { colorCalculator } from "../history/Table";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IosShareIcon from "@mui/icons-material/IosShare";
function Row(props: {
  row: ReturnType<typeof createData>;
  handleOpen: (id: string) => void;
  open: string | undefined;
}) {
  const { row } = props;

  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } ,cursor:"pointer"}} onClick={() => props.handleOpen(row.id)}>
        <TableCell>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            sx={{
              color: "#808087",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
        </TableCell>
        <TableCell align="left" sx={{ color: "white" }} width={420}>
          <Typography
            variant="body2"
            component={"span"}
            sx={{
              color: colorCalculator(row.level)[1],
              bgcolor: colorCalculator(row.level)[0],
              px: 1.5,
              py: 0.2,
              borderRadius: "10px",
            }}
          >
            {row.level}
          </Typography>
          <Typography variant="body2" component={"span"} sx={{ ml: 1 }}>
            {row.title}
          </Typography>
          <Typography
            variant="body2"
            component={"span"}
            sx={{
              color: "#92929B",
              bgcolor: "#18181B",
              px: 0.5,
              py: 0.2,
              borderRadius: "40%",
              border: "1px solid #27272A",
              ml: 2,
            }}
          >
            {row.count}
          </Typography>
        </TableCell>

        <TableCell align="right" sx={{ color: "white" }}>
          <Typography
            variant="body2"
            component={"span"}
            sx={{
              bgcolor: "#191919",
              py: 0.3,
              pr: 1,
              border: "1px solid #27272A",
              borderRadius: "5px",
            }}
          >
            <span style={{ backgroundColor: "#09090B", padding: "2px" }}>
              TEMPLATE
            </span>{" "}
            <span style={{ fontSize: ".7rem" }}>{row.description}</span>
          </Typography>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => props.handleOpen(row.id)}
            sx={{ color: "white" }}
          >
            {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={props.open === row.id} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" width={10} />
                    <TableCell sx={{ color: "#828282" }} align="left">
                      <Box display={"flex"} alignItems={"center"}>
                        <WifiTetheringIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>Asset</span>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#828282" }}>
                      <Box display={"flex"} alignItems={"center"}>
                        <DataObjectIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>Found at</span>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#828282" }} align="right">
                      <Box display={"flex"} alignItems={"center"}>
                        <AccessTimeIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>First seen</span>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#828282" }} align="right">
                      <Box display={"flex"} alignItems={"center"}>
                        <AccessTimeIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>Last seen</span>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.Assets}>
                      <TableCell align="right">
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          sx={{
                            color: "#808087",
                            "&.Mui-checked": {
                              color: "white",
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "#93939C" }}
                      >
                        {historyRow.Assets}
                      </TableCell>
                      <TableCell sx={{ color: "#93939C" }}>
                        <Box display={"flex"} alignItems={"center"}>
                          {historyRow.FoundAt && (
                            <>
                              <ContentCopyIcon fontSize="small" />
                              <IosShareIcon fontSize="small" />
                              <span style={{ marginLeft: ".5rem" }}>
                                {historyRow.FoundAt}
                              </span>
                            </>
                          )}
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        {historyRow.FirstSeen}
                      </TableCell>
                      <TableCell sx={{ color: "white" }} align="left">
                        {historyRow.LastSeen}
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

export default function CollapsibleTable({ handleOpen, open } : { handleOpen: (id: string) => void, open: string | undefined }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 2, maxHeight: "400px" }}>
      <Table
        aria-label="collapsible table"
        size="small"
      >
        <TableBody sx={{ bgcolor: "#0D0D0F" }}>
          {rows.map((row) => (
            <Row
              key={row.title}
              row={row}
              handleOpen={handleOpen}
              open={open}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
