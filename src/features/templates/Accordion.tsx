import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { Box } from "@mui/material";
export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        sx={{
          bgcolor: "#09090B",
          color: "#707079",
          "&:hover": { bgcolor: "#202020" },
        }}
      >
        <AccordionSummary
          sx={{ fontSize: ".9rem" }}
          expandIcon={
            <KeyboardArrowRightIcon
              fontSize="small"
              sx={{ color: "#707079" }}
            />
          }
          id="panel1-header"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            <span>My templates</span>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li style={{ display: "flex", alignItems: "center",marginTop:'.5rem' }}>
              <span>
                <InsertDriveFileOutlinedIcon
                  fontSize="small"
                  sx={{ mr: 0.5 }}
                />
              </span>
              <span style={{ fontSize: ".8rem" }}>CVE-2022-27926.yaml</span>
            </li>
            <li style={{ display: "flex", alignItems: "center",marginTop:'.5rem' }}>
              <span>
                <InsertDriveFileOutlinedIcon
                  fontSize="small"
                  sx={{ mr: 0.5 }}
                />
              </span>
              <span style={{ fontSize: ".8rem" }}>CVE-2022-27926.yaml</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#09090B",
          color: "#707079",
          "&:hover": { bgcolor: "#202020" },
        }}
      >
        <AccordionSummary
          sx={{ fontSize: ".9rem" }}
          expandIcon={
            <KeyboardArrowRightIcon
              fontSize="small"
              sx={{ color: "#707079" }}
            />
          }
          id="panel2-header"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PublicOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            <span>Public templates</span>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          bgcolor: "#09090B",
          color: "#707079",
          "&:hover": { bgcolor: "#202020" },
        }}
      >
        <AccordionSummary
          sx={{ fontSize: ".9rem" }}
          expandIcon={
            <KeyboardArrowRightIcon
              fontSize="small"
              sx={{ color: "#707079" }}
            />
          }
          id="panel3-header"
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            <span>Early templates</span>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
