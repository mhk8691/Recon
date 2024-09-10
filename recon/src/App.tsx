import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout.page";
import Homepage from "./pages/Homepage.page";
import AssetsPages from "./pages/Assets.page";
import InventoryPage from "./pages/Inventory.page";
import AssetsGroups from "./pages/AssetsGroups.page";
import TechnologiesPage from "./pages/Technologies.page";
import ScansPage from "./pages/Scans.page";
import Configs from "./features/configs/Configs";
import Scans from "./features/scans/Scans";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/assets" element={<AssetsPages />}>
            <Route index element={<AssetsGroups />} />
            <Route path="/assets/inventory" element={<InventoryPage />} />
            <Route path="/assets/technologies" element={<TechnologiesPage />} />
          </Route>

          <Route path="/scans" element={<ScansPage />}>
            <Route index element={<Scans/>} />
            <Route path="/scans/results" element={<h1>scans</h1>} />
            <Route path="/scans/configs" element={<Configs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
