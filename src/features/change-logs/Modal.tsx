import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  borderRadius: 5,
  overflow: "auto",
  bgcolor: "#0A0A0D",
  border: "2px solid #27272A",
  outline: "none",
  p: 4,
  maxHeight: "90vh",
};

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <div >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="body2"
            component="h2"
            color="#808081"
            sx={{ textTransform: "uppercase" }}
          >
            Change Logs
          </Typography>
          <Typography
            id="modal-modal-description"
            color="#4BD3FD"
            variant="h6"
            sx={{ mt: 2 }}
          >
            Enhanced Vulnerability Management, AWS Integration, and Real-time
            Template Feed
          </Typography>
          <Chip
            label="v0.9.0"
            variant="filled"
            size="small"
            sx={{
              bgcolor: "#39270B",
              color: "#C27D0B",
              px: 1,
              fontSize: ".9rem",
              mt: 2,
            }}
          />
          <Typography variant="body2" color="#8C8C8E" sx={{ mt: 4 }}>
            In this release, we've significantly improved our vulnerability
            management capabilities, introduced new AWS integration features,
            enhanced overall user experience, and added real-time feed of Nuclei
            templates. We're focusing on providing more comprehensive
            vulnerability tracking, streamlining cloud integrations and
            improving scan and asset management.
          </Typography>
          <Typography
            variant="body2"
            color="white"
            component={Link}
            to={"/"}
            sx={{ display: "block", mt: 1 }}
          >
            Sign up for Enterprise
          </Typography>
          <hr style={{ border: "1px solid #27272A",marginTop:'.5rem' }} />
        
          <Box>
            <Typography variant="body2" color="white" sx={{ mt: 3 }}>
              Vulnerability Management Enhancements
            </Typography>
            <Typography variant="body2" color="#8C8C8E" sx={{ mt: 1 }}>
              We've introduced several new features to make vulnerability
              management more effective and <br /> insightful:
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Real-time Nuclei Templates Vulnerability Feed: Integrated a
              real-time feed of Nuclei templates for up-to-date vulnerability
              detection.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              <span style={{ color: "white" }}>New Vulnerability Statuses</span>
              : Added{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.5,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                In-Progress
              </Box>{" "}
              and{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.5,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                Accepted Risk
              </Box>{" "}
              statuses to better track and manage vulnerabilities.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Technology-Specific Vulnerability Scans: New option to run
              vulnerability scans for specific technologies.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              <span style={{ color: "white" }}>
                Vulnerability Result Insights
              </span>
              : Added{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.5,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                First Seen
              </Box>{" "}
              and{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.5,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                Last Seen
              </Box>{" "}
              columns to vulnerability result data lists for better tracking.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              <span style={{ color: "white" }}>
                Vulnerability Results export
              </span>
              : Added Added filter based vulnerability export in all results
              section.
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="white">
              Cloud Integration Improvements
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              AWS Assume Role Support: Enhanced AWS Cloud Integration with
              Assume Role capability for more flexible and secure access
              management.
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="white">
              Scan / Asset Management
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Technology-Specific Asset Export: Added option to export assets
              for given technologies.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Asset Insights:Introduced{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.8,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                First Seen
              </Box>{" "}
              and{" "}
              <Box
                component={"span"}
                sx={{
                  bgcolor: "#252427",
                  border: "1px solid #4E4E4F",
                  px: 0.5,
                  py: 0.1,
                  borderRadius: "5px",
                }}
              >
                Last Seen
              </Box>{" "}
              columns to asset data lists for improved tracking.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              pdcp x httpx Integration: Implemented integration with httpx asset
              data management visualization.
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="white">
              UI/UX Improvements
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Revamped Dashboard - Redesigned with more actionable and
              data-driven insights for a better home experience.
            </Typography>

            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Added support for bulk deletion from scans and asset enumeration
              list.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Added tooltips to display exact timestamps for dates in lists.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Moved rename and schedule options under the update menu in scan
              and asset lists.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 2, ml: 2 }}
            >
              Jira Integration Enhancements:
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 3, ml: 5 }}
            >
              Interactive project, issue type, and status selection for easier
              setup.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 5 }}
            >
              Support for issue types IDs instead of names.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 5 }}
            >
              Option to remove existing linked Jira tickets from
              vulnerabilities.
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="white">
              Bug Fixes
            </Typography>
            <Typography variant="body2" color="#8C8C8E" sx={{ mt: 1.5 }}>
              We've addressed several issues to improve platform stability and
              user experience:
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Fixed pagination filter reset issues.
            </Typography>

            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Corrected the display of trial remaining days in the account
              switcher.
            </Typography>
            <Typography
              variant="body2"
              component={"li"}
              color="#8C8C8E"
              sx={{ mt: 1, ml: 2 }}
            >
              Resolved issues with dynamic max team member count display.
            </Typography>
            <Typography variant="body2" color="#8C8C8E" sx={{ mt: 2 }}>
              We're continuously improving our platform with new features and
              integrations. The addition of the real-time Nuclei template
              vulnerability feed significantly enhances our vulnerability
              scanning capabilities.{" "}
              <span style={{ color: "white" }}>What's next?</span> Automatic
              vulnerability scan upon new template release. We welcome your
              feedback and feature suggestions to help shape our product's
              future. Thank you for your continued support.
            </Typography>
            <Typography variant="body2" color="#8C8C8E" sx={{ mt: 2 }}>
              <span style={{ color: "white" }}>What's next?</span> What’s next?
              Automatically run a vulnerability scan whenever a new template is
              added to the feed. Interested in learning more? Reach out to us.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
