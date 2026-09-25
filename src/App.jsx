import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Busqueda from "./pages/Busqueda";

function Inicio() {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/busqueda" element={<Busqueda />} />
      </Routes>
    </>
  );
}

export default App;