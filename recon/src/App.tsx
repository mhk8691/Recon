import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout.page";
import Homepage from "./pages/Homepage.page";
import AssetsPages from "./pages/Assets.page";
import ScansPage from "./pages/Scans.page";
import Configs from "./features/configs/Configs";
import TemplatesPage from "./pages/Templates.page";
import Templates from "./features/templates/Templates";
import Historty from "./features/history/Historty";
import Scans from "./features/scans/Scans";
import Result from "./features/result/Result";
import Technologies from "./features/technologies/Technologies";
import Inventory from "./features/inventory/Inventory";
import Assets from "./features/assets/Assets";
import Leaderboard from "./features/leaderboard/Leaderboard";
import SettingsPage from "./pages/Settings.page";
import Profile from "./features/profile/Profile";
import Team from "./features/team/Team";
import ScanIPs from "./features/scan-ips/Scan-IPs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/assets" element={<AssetsPages />}>
            <Route index element={<Assets />} />
            <Route path="/assets/inventory" element={<Inventory />} />
            <Route path="/assets/technologies" element={<Technologies />} />
          </Route>

          <Route path="/scans" element={<ScansPage />}>
            <Route index element={<Scans />} />
            <Route path="/scans/results" element={<Result />} />
            <Route path="/scans/configs" element={<Configs />} />
          </Route>

          <Route path="/templates" element={<TemplatesPage />}>
            <Route index element={<Templates />} />
            <Route path="/templates/history" element={<Historty />} />
            <Route path="/templates/leaderboard" element={<Leaderboard />} />
            <Route path="/templates/feed" element={<Configs />} />
          </Route>
          <Route path="/settings" element={<SettingsPage />}>
            <Route index element={<Profile />} />
            <Route path="/settings/team" element={<Team />} />
            <Route path="/settings/scan-ips" element={<ScanIPs />} />
            <Route path="/settings/billing" element={<Configs />} />
            <Route path="/settings/security" element={<Configs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
