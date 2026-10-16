import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import fondoPersonas from "../assets/fondopersonas.png";
import ConsultaGeografica from "./ConsultaGeografica";

function Hero() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  function buscarPersona(e) {
    e.preventDefault();

    const texto = busqueda.trim();

    if (texto) {
      navigate(`/busqueda?q=${encodeURIComponent(texto)}`);
    } else {
      navigate("/busqueda");
    }
  }

  return (
    <main
      className="hero-inicio position-relative d-flex align-items-center justify-content-center text-center w-100 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            #dce6f2 0%,
            #dce6f2 42%,
            rgba(220, 230, 242, 0.95) 50%,
            rgba(220, 230, 242, 0.7) 58%,
            rgba(220, 230, 242, 0) 70%
          ),
          url(${fondoPersonas})
        `,
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-lg-none"
        style={{
          backgroundColor: "rgba(220, 230, 242, 0.20)",
          pointerEvents: "none",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <Container fluid className="position-relative py-4" style={{ zIndex: 2 }}>
        <Row className="align-items-center g-4">
          <Col xs={12} lg={6}>
            <div className="hero-contenido position-relative px-3 ms-lg-5 ps-lg-5">
              <h1 className="titulo-inicio mb-3">
                TU INFORMACIÓN
                <br />
                PUEDE AYUDAR
              </h1>

              <p className="subtitulo-inicio mx-auto mb-4">
                Compartir información responsable puede ayudar a encontrar una
                persona.
              </p>

              <Form onSubmit={buscarPersona}>
                <InputGroup className="hero-buscador shadow rounded-pill overflow-hidden mx-auto border border-2 tarjeta-borde-azul">
                  <Form.Control
                    type="text"
                    id="busqueda-personas"
                    name="busqueda"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar por nombre, apellido o zona..."
                    aria-label="Buscar"
                    className="border-0 px-4 py-3 fs-6"
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    className="px-4 fw-bold fs-6"
                  >
                    Buscar
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Col>

          <Col xs={12} lg={3} className="text-start ms-lg-4">
            <div
              className="w-100 mx-auto mx-lg-0"
              style={{ maxWidth: "460px" }}
            >
              <ConsultaGeografica />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Hero;
