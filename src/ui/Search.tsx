import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
export default function Search({
  handleSubmit,
  handleChange,
  query,
  style,
  formStyle,
  placeholder,
  hasIcon=true,
}: {
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query?: string;
  style?: React.CSSProperties;
  formStyle?: React.CSSProperties;
  placeholder: string;
  hasIcon?: boolean;
}) {
  return (
    <header className={styles.header}>
      <form
        action=""
        onSubmit={handleSubmit}
        className={styles.test}
        style={formStyle}
      >
        <input
          type="search"
          name=""
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          id=""
          style={style}
        />
        {hasIcon && (
          <SearchIcon fontSize="small" sx={{ marginRight: ".3rem" }} />
        )}
      </form>
    </header>
  );
}
