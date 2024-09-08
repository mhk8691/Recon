import { Box, TextField } from "@mui/material";
const searchStyle = {
  backgroundColor: "#1A1A1C",
  border: "1px solid #27272A ",
  borderRadius: "10px",
  "& .MuiFormLabel-root": {
    color: "#606060",
    fontSize: ".9rem",
  },
  "& .css-bq3os6-MuiInputBase-input-MuiFilledInput-input": {
    color: "white",
  },
  ":hover": {
    border: "1px solid #4d4d4d",
  },
};
export default function Search() {
  return (
    <Box>
      <TextField
        id="filled-basic"
        label="Search your assets"
        size="small"
        fullWidth
        variant="filled"
        sx={searchStyle}
      />
    </Box>
  );
}
