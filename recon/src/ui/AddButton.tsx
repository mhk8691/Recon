import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
export default function AddButton({ children }: any) {
  return (
    <Button
      variant="contained"
      color="inherit"
      size="medium"
      endIcon={<AddIcon />}
      sx={{ fontSize: ".8rem" }}
    >
      {children}
    </Button>
  );
}
