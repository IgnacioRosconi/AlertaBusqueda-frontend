import { Col, Container, Row } from "react-bootstrap";

function Benefits() {
  return (
    <section className="beneficios-section">
      <Container>
        <Row className="text-center g-4">
          <Col md={4}>
            <div className="tarjeta-beneficio p-4 h-100 rounded">
              <div className="beneficio-icono">
                <i className="bi bi-info-circle"></i>
              </div>

              <h2 className="h6 fw-bold">
                INFORMACIÓN RESPONSABLE
              </h2>

              <p>
                Consultá información clara sobre las búsquedas publicadas.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="tarjeta-beneficio tarjeta-central p-4 h-100 rounded">
              <div className="beneficio-icono">
                <i className="bi bi-geo-alt"></i>
              </div>

              <h2 className="h6 fw-bold">
                ALERTAS POR ZONA
              </h2>

              <p>
                Recibí avisos relacionados con búsquedas cercanas a tu ubicación.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="tarjeta-beneficio p-4 h-100 rounded">
              <div className="beneficio-icono">
                <i className="bi bi-check-circle"></i>
              </div>

              <h2 className="h6 fw-bold">
                COLABORACIÓN CIUDADANA
              </h2>

              <p>
                La información aportada de forma responsable puede ser importante.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;