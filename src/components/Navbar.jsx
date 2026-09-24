import { useState } from "react";
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
      <BootstrapNavbar bg="white" className="shadow-sm px-3 py-1">
        <Container fluid className="position-relative">
          <Button
            variant="link"
            className="text-primary text-decoration-none fw-bold"
            onClick={handleShow}
          >
            ☰ Menú
          </Button>

          <BootstrapNavbar.Brand className="position-absolute start-50 translate-middle-x py-0">
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              style={{ height: "85px", width: "auto", objectFit: "contain" }}
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
              as="button"
              className="text-start text-dark"
              onClick={handleClose}
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as="button"
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
