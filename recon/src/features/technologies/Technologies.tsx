import CollapsibleTable from "./Table";
import Search from "../vulnerabilites/Search";
const formStyle: React.CSSProperties = {
  width: "100%",
};

export default function Technologies() {
  return (
    <div>
      <Search
        handleSubmit={(e) => {
          e.preventDefault();
        }}
        formStyle={formStyle}
        placeholder="Search your technologies"
      />
      <CollapsibleTable />
    </div>
  );
}
