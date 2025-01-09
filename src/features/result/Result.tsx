import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Table from "./Table";
import Filter from "./Filter";
import Sort from "./Sort";
import { useState } from "react";
import Detail from "./Detail";
export default function Result() {
  const [active, setActive] = useState(0);
  const [id, setId] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState<string | undefined>("");
  function handleOpen(id: string) {
    setOpen(id);
    setId(id);
  }
  return (
    <Box>
      <Filter />
      <Grid container spacing={0.5} mt={2} sx={{ border: "1px solid #27272A" }}>
        <Grid size={7.5}>
          <Box>
            <Sort />
            <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />
            <Container
              maxWidth={"xl"}
              sx={{
                mt: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  color="#909099"
                  sx={{ fontSize: ".8rem" }}
                >
                  15 templates
                </Typography>
              </Box>
              <Box>
                <Box
                  border={1}
                  borderColor={"#27272A"}
                  borderRadius={1}
                  display={"flex"}
                >
                  <Typography
                    variant="body2"
                    color="#909099"
                    sx={{
                      fontSize: ".8rem",
                      borderRight: "1px solid #27272A",
                      py: 0.5,
                      px: 1,
                      bgcolor: active === 0 ? "#2E2E31" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => setActive(0)}
                  >
                    All Time
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#909099"
                    sx={{
                      fontSize: ".8rem",
                      borderRight: "1px solid #27272A",
                      py: 0.5,
                      px: 1,
                      bgcolor: active === 1 ? "#2E2E31" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => setActive(1)}
                  >
                    Today
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#909099"
                    sx={{
                      fontSize: ".8rem",
                      borderRight: "1px solid #27272A",
                      py: 0.5,
                      px: 1,
                      bgcolor: active === 2 ? "#2E2E31" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => setActive(2)}
                  >
                    7D
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#909099"
                    sx={{
                      fontSize: ".8rem",
                      py: 0.5,
                      px: 1,
                      bgcolor: active === 3 ? "#2E2E31" : "",
                      cursor: "pointer",
                    }}
                    onClick={() => setActive(3)}
                  >
                    30D
                  </Typography>
                </Box>
              </Box>
            </Container>
            <hr style={{ border: "1px solid #27272A", marginTop: ".7rem" }} />

            <Table handleOpen={handleOpen} open={open} />
          </Box>
        </Grid>
        <Grid size={4.5} sx={{ borderLeft: "1px solid #27272A" }}>
          <Box>
            <Detail id={id} setId={setId} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
