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
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          cursor: "pointer",
          border: "none",
          bgcolor: "#0D0D0F",
          "&:hover": { backgroundColor: "#18181B" },
        }}
        onClick={() => props.handleOpen(row.id)}
      >
        <TableCell sx={{ border: "none" }}>
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
          align="left"
          sx={{ color: "white", border: "none" }}
          width={420}
        >
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
          <Typography
            variant="body2"
            component={"span"}
            sx={{ ml: 1, fontSize: "13px" }}
          >
            {row.title}
          </Typography>
          <Typography
            variant="body2"
            component={"span"}
            sx={{
              color: "#92929B",
              bgcolor: "#18181B",
              px: 0.5,
              borderRadius: "50%",
              border: "1px solid #27272A",
              ml: 2,
            }}
          >
            {row.count}
          </Typography>
        </TableCell>

        <TableCell align="right" sx={{ color: "white", border: "none" }}>
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
            <span
              style={{
                backgroundColor: "#09090B",
                padding: "2px",
                fontSize: "12px",
              }}
            >
              TEMPLATE
            </span>{" "}
            <span style={{ fontSize: ".7rem" }}>{row.description}</span>
          </Typography>
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => props.handleOpen(row.id)}
            sx={{ color: "white" }}
          >
            {props.open === row.id ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, padding: 0 }}
          colSpan={6}
        >
          <Collapse in={props.open === row.id} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#19191A" }}>
                    <TableCell
                      align="left"
                      width={10}
                      sx={{ border: "none" }}
                    />
                    <TableCell
                      sx={{ color: "#828282", border: "none" }}
                      align="left"
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <WifiTetheringIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>Asset</span>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ color: "#828282", border: "none" }}
                      align="center"
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <DataObjectIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>Found at</span>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ color: "#828282", border: "none" }}
                      align="right"
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <AccessTimeIcon fontSize="small" sx={{}} />
                        <span style={{ marginLeft: ".5rem" }}>First seen</span>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{ color: "#828282", border: "none" }}
                      align="right"
                    >
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
                      <TableCell align="left">
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
                              <ContentCopyIcon
                                fontSize="small"
                                sx={{ fontSize: ".9rem",cursor:'pointer' }}
                                onClick={()=>{
                                  navigator.clipboard.writeText(historyRow.FoundAt+'')
                                }}
                              />
                              <IosShareIcon
                                fontSize="small"
                                sx={{ fontSize: ".9rem" }}
                              />
                              <span
                                style={{
                                  marginLeft: ".5rem",
                                  fontSize: ".75rem",
                                }}
                              >
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

export default function CollapsibleTable({
  handleOpen,
  open,
}: {
  handleOpen: (id: string) => void;
  open: string | undefined;
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, maxHeight: "400px", border: "none" }}
    >
      <Table aria-label="collapsible table" size="small">
        <TableBody sx={{ bgcolor: "#0D0D0F"}}>
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
