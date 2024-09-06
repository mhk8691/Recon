import { Box, Chip, Typography, Button, Modal } from "@mui/material";
import RadarIcon from "@mui/icons-material/Radar";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Vulnerabilites.module.css";
import { vulnerabilitiesList } from "./Vulnerabilites.list";
import Search from "./Search";
import { Vulnerability } from "./Vulnerabilites.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#0d0d0f",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

function colorCalculator(level: string): Array<string> {
  let color: string = "#F5A623";
  let backgroundColor: string = "#F5A623";
  if (level === "low") {
    color = "#5F62E6";
    backgroundColor = "rgb(38, 38, 74)";
  } else if (level === "medium") {
    color = "#DEAA08";
    backgroundColor = "rgb(46, 37, 14)";
  } else if (level === "high") {
    color = "#BB480C";
    backgroundColor = "rgb(45, 23, 14)";
  } else if (level === "critical") {
    color = "#A31A38";
    backgroundColor = "rgb(45, 22, 28)";
  }
  return [color, backgroundColor];
}

export default function Vulnerabilites() {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] =
    useState<Array<Vulnerability>>(vulnerabilitiesList);
  const [oneVulnerability, setOneVulnerability] = useState<Vulnerability>();
  const [open, setOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQueryResult(
      vulnerabilitiesList.filter((vulnerability) =>
        vulnerability.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }
  function handleOpen(id: number) {
    setOpen(true);
    setOneVulnerability(
      vulnerabilitiesList.find((vulnerability) => vulnerability.id === id)
    );
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <div style={{ marginTop: "2rem", padding: "1.5rem" }}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
      />
      {queryResult && (
        <main className={styles.main}>
          {queryResult?.map((vulnerability, index) => (
            <Box
              borderBottom={1}
              borderColor={"#3F484A"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={index}
              p={2}
              sx={{ cursor: "pointer" }}
              onClick={() => handleOpen(vulnerability.id)}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Chip
                  label={vulnerability.level}
                  variant="outlined"
                  sx={{
                    bgcolor: colorCalculator(vulnerability.level)[1],
                    color: colorCalculator(vulnerability.level)[0],
                    borderColor: colorCalculator(vulnerability.level)[1],
                  }}
                />
                <Chip
                  label={vulnerability.name}
                  variant="outlined"
                  sx={{
                    ml: 1,
                    color: "#A6A6A6",
                    paddingY: ".8rem",
                    borderColor: "#252527",
                  }}
                  size="small"
                />
                <Typography variant="body1" color="initial" sx={{ ml: 1 }}>
                  {vulnerability.title}
                </Typography>
                <Chip
                  label={vulnerability.status}
                  variant="outlined"
                  sx={{ ml: 1, color: "#A6A6A6", borderColor: "#252527" }}
                />
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body2" color="#A6A6A6">
                  Added on {vulnerability.date}
                  <Typography
                    variant="body2"
                    component="span"
                    color="#A6A6A6"
                    sx={{ ml: 0.5 }}
                  >
                    by {vulnerability.author}
                  </Typography>
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<RadarIcon />}
                  size="small"
                  sx={{ ml: 2.5 }}
                  component={Link}
                  to="/vulnerabilities/scan"
                >
                  scan
                </Button>
              </Box>
            </Box>
          ))}
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {oneVulnerability?.name}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 0.5 }}
                color="#9f9fa1"
                variant="body2"
              >
                {oneVulnerability?.description}
              </Typography>
              <Box mt={2} display={"flex"} alignItems={"center"}>
                <Chip
                  label={oneVulnerability?.level}
                  variant="outlined"
                  sx={{
                    bgcolor: colorCalculator(oneVulnerability?.level + "")[1],
                    color: colorCalculator(oneVulnerability?.level + "")[0],
                    borderColor: colorCalculator(
                      oneVulnerability?.level + ""
                    )[1],
                  }}
                />
                <Chip
                  label={oneVulnerability?.name}
                  variant="outlined"
                  sx={{
                    ml: 1,
                    color: "#A6A6A6",
                    paddingY: ".8rem",
                    borderColor: "#252527",
                  }}
                  size="small"
                />
                <Chip
                  label={oneVulnerability?.status}
                  variant="outlined"
                  sx={{ ml: 1, color: "#A6A6A6", borderColor: "#252527" }}
                />
                <Button
                  variant="contained"
                  startIcon={<RadarIcon />}
                  size="small"
                  sx={{ ml: 2.5 }}
                  component={Link}
                  to="/vulnerabilities/scan"
                >
                  scan
                </Button>
              </Box>
              <code style={{ whiteSpace: "pre-wrap",marginTop:"3rem" }}>
                <pre>{oneVulnerability?.code}</pre>
              </code>
            </Box>
          </Modal>
        </main>
      )}
    </div>
  );
}
