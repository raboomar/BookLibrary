import "./App.css";
import LandingPAge from "./landing/LandingPAge";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPAge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
