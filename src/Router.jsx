import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
