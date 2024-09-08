import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout.page";
import Homepage from "./pages/Homepage.page";
import AssetsPages from "./pages/Assets.page";
import InventoryPage from "./pages/Inventory.page";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/assets" element={<AssetsPages />} />
          <Route path="/assets/inventory" element={<InventoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
