import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Offcanvas,
} from "react-bootstrap";

import logo from "../assets/logoAlertaBusqueda-recortado.png";

const opcionesMenu = [
  {
    texto: "Inicio",
    ruta: "/",
    icono: "bi-house-door",
  },
  {
    texto: "Búsqueda",
    ruta: "/busqueda",
    icono: "bi-search",
  },
  {
    texto: "Registrar búsqueda",
    ruta: "/registro",
    icono: "bi-file-earmark-person",
  },
  {
    texto: "Recibir alertas",
    ruta: "/alertas",
    icono: "bi-bell",
  },
];

function Navbar() {
  const [show, setShow] = useState(false);

  const [sesionIniciada, setSesionIniciada] = useState(() =>
    Boolean(sessionStorage.getItem("sesionAlertaBusqueda")),
  );

  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    function actualizarSesion() {
      const sesion = sessionStorage.getItem("sesionAlertaBusqueda");
      setSesionIniciada(Boolean(sesion));
    }

    window.addEventListener(
      "sesionAlertaBusquedaActualizada",
      actualizarSesion,
    );

    return () => {
      window.removeEventListener(
        "sesionAlertaBusquedaActualizada",
        actualizarSesion,
      );
    };
  }, []);

  function cerrarSesion() {
    sessionStorage.removeItem("sesionAlertaBusqueda");
    setSesionIniciada(false);
    handleClose();
    navigate("/");
  }

  return (
    <>
      <BootstrapNavbar className="navbar-alerta bg-white border-bottom shadow-sm py-0">
        <Container
          fluid
          className="px-3 px-md-4 px-xl-5 h-100 align-items-center"
        >
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center py-0 me-2"
          >
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>

          <Nav className="d-none d-xl-flex align-items-center gap-3 mx-auto menu-principal">
            {opcionesMenu.map((opcion) => (
              <Nav.Link
                as={NavLink}
                key={opcion.ruta}
                to={opcion.ruta}
                end={opcion.ruta === "/"}
                className="nav-link-alerta d-flex align-items-center gap-2 fw-semibold text-decoration-none"
              >
                <i className={`bi ${opcion.icono}`}></i>
                <span>{opcion.texto}</span>
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-none d-xl-flex align-items-center gap-2">
            {sesionIniciada ? (
              <Button
                variant="primary"
                size="sm"
                className="boton-registro rounded-pill fw-semibold text-nowrap"
                onClick={cerrarSesion}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/iniciar-sesion"
                  variant="outline-primary"
                  size="sm"
                  className="fw-semibold text-nowrap"
                >
                  Iniciar sesión
                </Button>

                <Button
                  as={Link}
                  to="/crear-cuenta"
                  size="sm"
                  className="fw-semibold text-nowrap"
                >
                  Crear cuenta
                </Button>
              </>
            )}
          </div>

          <Button
            variant="link"
            className="boton-menu-mobile d-xl-none text-decoration-none p-1"
            onClick={handleShow}
            aria-label="Abrir menú"
          >
            <i className="bi bi-list"></i>
          </Button>
        </Container>
      </BootstrapNavbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="bg-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              className="offcanvas-logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column gap-2">
            {opcionesMenu.map((opcion) => (
              <Nav.Link
                as={NavLink}
                key={opcion.ruta}
                to={opcion.ruta}
                end={opcion.ruta === "/"}
                onClick={handleClose}
                className="nav-link-mobile d-flex align-items-center gap-3 fw-semibold text-decoration-none px-3 py-2 rounded"
              >
                <i className={`bi ${opcion.icono}`}></i>
                <span>{opcion.texto}</span>
              </Nav.Link>
            ))}
          </Nav>

          <Nav className="flex-column gap-2 mt-3 border-top pt-3">
            {sesionIniciada ? (
              <Button
                variant="primary"
                className="boton-registro rounded-pill text-start fw-semibold"
                onClick={cerrarSesion}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Cerrar sesión
              </Button>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/iniciar-sesion"
                  onClick={handleClose}
                  className="nav-link-mobile d-flex align-items-center gap-3 fw-semibold text-decoration-none px-3 py-2 rounded"
                >
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Iniciar sesión</span>
                </Nav.Link>

                <Nav.Link
                  as={NavLink}
                  to="/crear-cuenta"
                  onClick={handleClose}
                  className="nav-link-mobile d-flex align-items-center gap-3 fw-semibold text-decoration-none px-3 py-2 rounded"
                >
                  <i className="bi bi-person-plus"></i>
                  <span>Crear cuenta</span>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
