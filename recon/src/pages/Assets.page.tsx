import { Outlet } from "react-router-dom";
import { tabObject } from "../features/assets/Tab.object";
import Tab from "../features/assets/Tab";

export default function AssetsPages() {
  return (
    <div>
      <header>
        <Tab tabObject={tabObject} />
        <hr style={{ border: "1px solid #52525B" }} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
