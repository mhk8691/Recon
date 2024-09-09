import { Outlet } from "react-router-dom";
import Tab from "../features/assets/Tab";
import { tabObject } from "../features/scans/Tab.object";

export default function ScansPage() {
  return (
    <div>
      <header>
        <Tab tabObject={tabObject} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
