import { Outlet } from "react-router-dom";
import { tabObject } from "../features/assets/Tab.object";
import Tab from "../ui/Tab";

export default function AssetsPages() {
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
