import LandingPAge from "./pages/landing/LandingPAge";
import { Navbar } from "./components/navbar/Navbar";
import LoginPage from "./pages/auth/pages/LoginPage";
import RegisterPage from "./pages/auth/pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/loading/Loading";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPAge />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
