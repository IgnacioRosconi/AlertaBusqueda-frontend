import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-alerta-busqueda.png";
import {
  Button,
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Offcanvas,
} from "react-bootstrap";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
<BootstrapNavbar
  className="shadow-sm px-4 py-1"
  style={{ backgroundColor: "#084f9f", minHeight: "90px" }}
>

        <Container fluid className="position-relative">
<Button
  variant="link"
  className="text-white text-decoration-none fw-bold"
  style={{ fontSize: "20px" }}
  onClick={handleShow}
>
  ☰ Menú
</Button>

          <BootstrapNavbar.Brand className="position-absolute start-50 translate-middle-x py-0">
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              style={{ height: "100px", width: "auto", objectFit: "contain" }}
            />
          </BootstrapNavbar.Brand>
        </Container>
      </BootstrapNavbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary fw-bold">
            Alerta Búsqueda
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
  <Nav.Link
  as={Link}
  to="/"
  className="text-start text-dark"
  onClick={handleClose}
>
  Inicio
</Nav.Link>

<Nav.Link
  as={Link}
  to="/busqueda"
  className="text-start text-dark"
  onClick={handleClose}
>
  Búsqueda
</Nav.Link>

            <Nav.Link
              as="button"
              className="text-start text-dark"
              onClick={handleClose}
            >
              Registrar búsqueda
            </Nav.Link>

            <Nav.Link
              as="button"
              className="text-start text-dark"
              onClick={handleClose}
            >
              Recibir Alertas
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
