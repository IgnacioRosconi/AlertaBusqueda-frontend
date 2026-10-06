import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Busqueda from "../../pages/Busqueda";
import Registro from "../../pages/Registro";
import RecibirAlertas from "../../pages/RecibirAlertas";
import Error404 from "../../pages/Error404";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busqueda" element={<Busqueda />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/alertas" element={<RecibirAlertas />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Rutas;