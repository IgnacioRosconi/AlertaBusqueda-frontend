import Registro from "./pages/Registro";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Busqueda from "./pages/Busqueda";
import RecibirAlertas from "./pages/RecibirAlertas";

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
        <Route path="/registro" element={<Registro />} />
        <Route path="/alertas" element={<RecibirAlertas />} />
      </Routes>
      
    </>
  );
}

export default App;