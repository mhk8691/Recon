import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>    
      <main>
        <Outlet />
      </main>
    </div>
  );
}
