import "./App.css";
import LandingPAge from "./landing/LandingPAge";
import { Navbar } from "./navbar/Navbar";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
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
