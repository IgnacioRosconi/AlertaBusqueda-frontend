import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logoAlertaBusqueda-recortado.png";
import logoUTN from "../assets/logoUTN.png";

function Footer() {
  return (
    <footer className="footer-alerta text-white pt-4">
      <Container fluid className="px-4 px-xl-5">
        <Row className="gy-4 align-items-start">
          <Col xs={12} md={6} lg={3}>
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              className="footer-logo img-fluid mb-3"
            />

            <p className="footer-descripcion small mb-0">
              Plataforma universitaria orientada a colaborar con la búsqueda
              responsable de personas.
            </p>
          </Col>

          <Col xs={12} sm={6} md={3} lg={2}>
            <h2 className="h6 fw-bold text-white mb-3">Enlaces útiles</h2>

            <div className="footer-enlaces d-flex flex-column gap-2 small">
              <Link className="text-decoration-none" to="/">
                Inicio
              </Link>
              <Link className="text-decoration-none" to="/busqueda">
                Búsqueda
              </Link>
              <Link className="text-decoration-none" to="/registro">
                Registrar búsqueda
              </Link>
              <Link className="text-decoration-none" to="/alertas">
                Recibir alertas
              </Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} lg={2}>
            <h2 className="h6 fw-bold text-white mb-3">Sobre el proyecto</h2>

            <div className="footer-texto d-flex flex-column gap-2 small">
              <span>Uso responsable</span>
              <span>Colaboración ciudadana</span>
              <span>Información verificada</span>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h2 className="h6 fw-bold text-white mb-3">Desarrollado por</h2>

            <div className="footer-texto d-flex flex-column gap-2 small">
              <span>Pereyra Valentina Nazarena</span>
              <span>Rosconi Ignacio Federico</span>
              <span>UTN FRT</span>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            lg={2}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={logoUTN}
              alt="Logo UTN FRT"
              className="footer-utn-logo img-fluid"
            />
          </Col>
        </Row>

        <div className="footer-inferior d-flex justify-content-between gap-3 mt-4 py-2">
          <span>Alerta Búsqueda</span>
          <span>Trabajo Práctico Nº 5 · Programación IV</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
