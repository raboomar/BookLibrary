import "./App.css";
import LandingPAge from "./pages/landing/LandingPAge";
import { Navbar } from "./components/navbar/Navbar";
import LoginPage from "./pages/auth/pages/LoginPage";
import RegisterPage from "./pages/auth/pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPAge />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
