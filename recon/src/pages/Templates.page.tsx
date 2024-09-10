import { Outlet } from "react-router-dom";
import Tab from "../features/assets/Tab";
import { tabObject } from "../features/templates/Tab.object";

export default function TemplatesPage() {
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
