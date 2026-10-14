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

          <Nav className="d-none d-lg-flex align-items-center gap-5 mx-auto menu-principal">
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

          <Button
            variant="link"
            className="boton-menu-mobile d-lg-none text-decoration-none p-1"
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
