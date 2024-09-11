import { Box, Grid2 as Grid, Typography, Button } from "@mui/material";
import Search from "../../ui/Search";
import { useState } from "react";
export default function Filter() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Box mt={5}>
      <Typography variant="body1" color="initial">
        Top Contributor
      </Typography>
      <Grid
        container
        spacing={1}
        mt={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid size={3}>
          <Box>
            <Search
              handleSubmit={(e) => {
                e.preventDefault();
              }}
              formStyle={{ width: "100%" }}
              placeholder="Search contributor"
            />
          </Box>
        </Grid>
        <Box>
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            sx={{
              border: active == 1 ? "2px solid #242427" : "2px solid #141416",
              color: active == 1 ? "white" : "#575758",
              py: 0.5,
              px: 2,
            }}
            onClick={() => setActive(1)}
          >
            All time
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            sx={{
              ml: 1,
              py: 0.5,
              px: 2,
              border: active == 2 ? "2px solid #242427" : "2px solid #141416",
              color: active == 2 ? "white" : "#575758",
            }}
            onClick={() => setActive(2)}
          >
            full year
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
