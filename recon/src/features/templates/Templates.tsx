import { Box, Grid2 as Grid } from "@mui/material";
import Editor from "./Editor";
import Sidebar from "./Sidebar";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import Header from "./Header";
export default function Templates() {
  const [hover, setHover] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  return (
    <Grid container>
      {!fullWidth && (
        <Grid
          size={3}
          sx={{ borderRight: "1px solid #27272A", height: "81vh" }}
        >
          <Sidebar />
        </Grid>
      )}
      <Grid
        size={0.3}
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <>
              {fullWidth ? (
                <ArrowForwardIosOutlinedIcon
                  onClick={() => {
                    setFullWidth(!fullWidth);
                    setHover(false);
                  }}
                  sx={{ cursor: "pointer", color: "#808080" }}
                />
              ) : (
                <ArrowBackIosOutlinedIcon
                  onClick={() => {
                    setFullWidth(!fullWidth);
                    setHover(false);
                  }}
                  sx={{ cursor: "pointer", color: "#808080" }}
                />
              )}
            </>
          )}
          {!hover && (
            <HorizontalRuleOutlinedIcon
              fontSize="large"
              sx={{ cursor: "pointer", rotate: "90deg", color: "#808080" }}
            />
          )}
        </Box>
      </Grid>
      <Grid size={fullWidth ? 11.7 : 8.7} sx={{px:2}}>
        <Header fullWidth={fullWidth} />
        <Editor />
      </Grid>
    </Grid>
  );
}
