import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Busqueda from "../../pages/Busqueda";
import Registro from "../../pages/Registro";
import RecibirAlertas from "../../pages/RecibirAlertas";
import CrearCuenta from "../../pages/CrearCuenta";
import IniciarSesion from "../../pages/IniciarSesion";
import Error404 from "../../pages/Error404";

function RutaProtegida({ children }) {
  const sesion = sessionStorage.getItem("sesionAlertaBusqueda");

  if (!sesion) {
    return <Navigate to="/iniciar-sesion" replace />;
  }

  return children;
}

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/busqueda" element={<Busqueda />} />

      <Route path="/crear-cuenta" element={<CrearCuenta />} />

      <Route path="/iniciar-sesion" element={<IniciarSesion />} />

      <Route
        path="/registro"
        element={
          <RutaProtegida>
            <Registro />
          </RutaProtegida>
        }
      />

      <Route
        path="/alertas"
        element={
          <RutaProtegida>
            <RecibirAlertas />
          </RutaProtegida>
        }
      />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Rutas;
