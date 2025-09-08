import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateShowcase from "./components/TemplateShowcase";
import Mzz64Homepage from "./components/Mzz64Homepage";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mzz64Homepage />} />
          <Route path="/template" element={<TemplateShowcase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;