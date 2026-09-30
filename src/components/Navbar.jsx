import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <BootstrapNavbar className="navbar-alerta shadow-sm py-0">
        <Container fluid className="px-2 h-100 align-items-center">
          <BootstrapNavbar.Brand
            as={Link}
            to="/"
           className="d-flex align-items-center h-100 py-0 pt-1"
          >
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>

          <Nav className="d-none d-lg-flex align-items-center gap-5 mx-auto menu-principal">
            {opcionesMenu.map((opcion) => (
              <NavLink
                key={opcion.ruta}
                to={opcion.ruta}
                end={opcion.ruta === "/"}
                className={({ isActive }) =>
                  `nav-link-alerta ${isActive ? "activo" : ""}`
                }
              >
                <i className={`bi ${opcion.icono}`}></i>
                <span>{opcion.texto}</span>
              </NavLink>
            ))}
          </Nav>

          <Button
            variant="link"
            className="boton-menu-mobile d-lg-none"
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
        className="offcanvas-alerta"
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
              <NavLink
                key={opcion.ruta}
                to={opcion.ruta}
                end={opcion.ruta === "/"}
                onClick={handleClose}
                className={({ isActive }) =>
                  `nav-link-mobile ${isActive ? "activo" : ""}`
                }
              >
                <i className={`bi ${opcion.icono}`}></i>
                <span>{opcion.texto}</span>
              </NavLink>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;