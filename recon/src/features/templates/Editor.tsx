import { Button, Box } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";

export default function Editor() {
  return (
    <div
      style={{
        height: "420px",
        overflow: "auto",
        backgroundColor: "#0F0F12",
        border: "1px solid #212121",
        borderRadius: "5px",
        marginTop: ".5rem",
        position: "relative",
      }}
    >
      <CodeMirror
        options={{
          theme: "monokai",
          keyMap: "sublime",
          mode: "jsx",
        }}
        style={{
          color: "black",
          backgroundColor: "black",
          margin: "0 1rem",
          marginTop: "1rem",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          size="medium"
          sx={{
            border: "1px solid #ECECEC",
            bgcolor: "#0A0A0E",
            color: "white",
            borderRadius: "7px",
            textTransform: "none",
          }}
        >
          Start with AI
        </Button>
      </Box>
    </div>
  );
}
