import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logoAlertaBusqueda-recortado.png";
import logoUTN from "../assets/logoUTN.png";

function Footer() {
  return (
    <footer className="footer-alerta">
      <Container fluid className="px-4 px-xl-5">
        <Row className="gy-4 align-items-start">
          <Col xs={12} md={6} lg={3}>
            <img
              src={logo}
              alt="Logo de Alerta Búsqueda"
              className="footer-logo"
            />
            <p className="footer-descripcion">
              Plataforma universitaria orientada a colaborar con la búsqueda
              responsable de personas.
            </p>
          </Col>

          <Col xs={12} sm={6} md={3} lg={2}>
            <h2 className="footer-titulo">Enlaces útiles</h2>

            <div className="footer-enlaces">
              <Link to="/">Inicio</Link>
              <Link to="/busqueda">Búsqueda</Link>
              <Link to="/registro">Registrar búsqueda</Link>
              <Link to="/alertas">Recibir alertas</Link>
            </div>
          </Col>

          <Col xs={12} sm={6} md={3} lg={2}>
            <h2 className="footer-titulo">Sobre el proyecto</h2>

            <div className="footer-texto">
              <span>Uso responsable</span>
              <span>Colaboración ciudadana</span>
              <span>Información verificada</span>
            </div>
          </Col>

          <Col xs={12} md={6} lg={3}>
            <h2 className="footer-titulo">Desarrollado por</h2>

            <div className="footer-texto">
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
    className="footer-utn-logo"
  />
</Col>

</Row>

        <div className="footer-inferior">
          <span>Alerta Búsqueda</span>
          <span>Trabajo Práctico Nº 5 · Programación IV</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;