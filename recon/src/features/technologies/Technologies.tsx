import CollapsibleTable from "./Table";
import Search from "../vulnerabilites/Search";
const formStyle:React.CSSProperties = {
  width: "100%",
};

export default function Technologies() {
  return (
    <div>
      <Search
        handleChange={() => {}}
        handleSubmit={(e) => {
          e.preventDefault();
        }}
        query={""}
        formStyle={formStyle}
      />
      <CollapsibleTable />
    </div>
  );
}
