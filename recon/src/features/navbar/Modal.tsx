import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#0D0D0F",
  border: "2px solid #27272A",
  boxShadow: 24,
  borderRadius: "1rem",
};

export default function BasicModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src="https://cloud.projectdiscovery.io/_next/image?url=%2Fapi-key.png&w=640&q=75&dpl=dpl_GFfKrc8mA6sbkKqEFonA8tUHnLfj"
            alt=""
            style={{ width: "100%" }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Your API Key
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="body2"
            component="h2"
            sx={{ textAlign: "center" }}
            color="#929299"
          >
            Rotate or copy your API key
          </Typography>
          <Box px={2} mb={2}>
            <input
              type="text"
              readOnly
              value={"8dc7903c-06aa-41b9-b23c-626340e436fa"}
              style={{
                border: "1px solid #27272A",
                padding: "1rem",
                width: "100%",
                backgroundColor: "#09090B",
                marginTop: "1rem",
              }}
            />
            <Button
              variant="contained"
              color="inherit"
              size="medium"
              fullWidth
              sx={{ mt: 2 }}
            >
              Rotate API Key
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
