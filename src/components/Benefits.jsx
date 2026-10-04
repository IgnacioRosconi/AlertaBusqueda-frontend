import { Col, Container, Row } from "react-bootstrap";

function Benefits() {
  return (
    <section className="bg-white py-5">
      <Container>
        <Row className="text-center g-4">
          <Col md={4}>
            <div className="tarjeta-beneficio p-4 h-100 rounded border shadow-sm">
              <div className="fs-1 text-primary mb-3">
                <i className="bi bi-info-circle"></i>
              </div>

              <h2 className="h6 fw-bold text-primary">
                INFORMACIÓN RESPONSABLE
              </h2>

              <p className="text-dark fw-semibold small px-3 mt-3 mb-0">
                Consultá información clara sobre las búsquedas publicadas.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="tarjeta-beneficio p-4 h-100 rounded border shadow-sm">
              <div className="fs-1 text-primary mb-3">
                <i className="bi bi-geo-alt"></i>
              </div>

              <h2 className="h6 fw-bold text-primary">ALERTAS POR ZONA</h2>

              <p className="text-dark fw-semibold small px-3 mt-3 mb-0">
                Recibí avisos relacionados con búsquedas cercanas a tu
                ubicación.
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="tarjeta-beneficio p-4 h-100 rounded border shadow-sm">
              <div className="fs-1 text-primary mb-3">
                <i className="bi bi-check-circle"></i>
              </div>

              <h2 className="h6 fw-bold text-primary">
                COLABORACIÓN CIUDADANA
              </h2>

              <p className="text-dark fw-semibold small px-3 mt-3 mb-0">
                La información aportada de forma responsable puede ser
                importante.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
