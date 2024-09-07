import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import styles from "../vulnerabilites/Vulnerabilites.module.css";


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
      <form
        action=""
        onSubmit={handleSubmit}
        className={styles.test}
        style={{ width: "75%", paddingTop: ".1rem", paddingBottom: ".1rem" }}
      >
        <input
          type="search"
          name=""
          value={query}
          onChange={handleChange}
          placeholder="Search assets groups"
          id=""
        />
        <SearchIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
      </form>
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
