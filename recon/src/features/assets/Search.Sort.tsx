import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import Search from "../vulnerabilites/Search";

export default function SearchSort() {
  const [query, setQuery] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Box display={"flex"} mt={5}>
      <Box width={"100%"}>
        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
          placeholder="Search Assets groups"
          formStyle={{ width: "100%" }}
          style={{ paddingTop: ".7rem ",paddingBottom : ".7rem" }}
        />
      </Box>
      <select
        name=""
        id=""
        style={{
          backgroundColor: "black",
          border: "2px solid #202022",
          borderRadius: "5px",
          padding: ".5rem",
          marginLeft: "1rem",
        }}
      >
        <option value="All">All</option>
        <option value="Uploads">Uploads</option>
        <option value="Discovery">Discovery</option>
        <option value="Integrations">Integrations</option>
      </select>
      <select
        name=""
        id=""
        style={{
          backgroundColor: "black",
          border: "2px solid #202022",
          borderRadius: "5px",
          padding: ".5rem",
          marginLeft: "1rem",
        }}
      >
        <option value="Status">Status</option>
        <option value="Uploads">Uploads</option>
        <option value="Discovery">Discovery</option>
        <option value="Integrations">Integrations</option>
      </select>
      <IconButton
        color="inherit"
        sx={{
          marginLeft: "1rem",
          backgroundColor: "#111113",
          px: ".7rem",
          borderRadius: "5px",
        }}
      >
        <DeleteOutlinedIcon />
      </IconButton>
      <IconButton
        color="inherit"
        sx={{
          marginLeft: "1rem",
          border: "1px solid #202022",
          borderRadius: "5px",
        }}
      >
        <CachedOutlinedIcon />
      </IconButton>
    </Box>
  );
}
