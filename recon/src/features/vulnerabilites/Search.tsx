import SearchIcon from "@mui/icons-material/Search";
import styles from "./Vulnerabilites.module.css";
export default function Search({
  handleSubmit,
  handleChange,
  query,
  style,
  formStyle,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  style?: React.CSSProperties;
  formStyle?: React.CSSProperties;
}) {
  return (
    <header className={styles.header}>
      <form action="" onSubmit={handleSubmit} className={styles.test} style={formStyle}>
        <input
          type="search"
          name=""
          value={query}
          onChange={handleChange}
          placeholder="Search vulnerabilities"
          id=""
          style={style}
        />
        <SearchIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
      </form>
    </header>
  );
}
