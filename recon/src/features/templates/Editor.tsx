import CodeMirror from "@uiw/react-codemirror";

export default function Editor() {
  return (
    <div
      style={{
        height: "500px",
        backgroundColor: "#0F0F12",
        border: "1px solid #212121",
        borderRadius: "5px",
        marginTop: ".5rem",
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
    </div>
  );
}
