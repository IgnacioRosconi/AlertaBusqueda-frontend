import { Col, Modal, Row } from "react-bootstrap";

function DetallePersonaModal({ persona, show, onHide }) {
  if (!persona) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="titulo-modal fw-bold">
          Detalle de la búsqueda
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row className="g-4">
          <Col md={5} className="text-center">
            {persona.foto ? (
              <img
                src={persona.foto}
                alt={`Fotografía de ${persona.nombre} ${persona.apellido}`}
                className="detalle-persona-imagen img-fluid rounded shadow-sm"
              />
            ) : (
              <div className="detalle-persona-sin-foto d-flex align-items-center justify-content-center bg-secondary text-white fw-bold rounded">
                Sin fotografía
              </div>
            )}
          </Col>

          <Col md={7}>
            <h2 className="h4 fw-bold mb-3">
              {persona.nombre} {persona.apellido}
            </h2>

            <p>
              <strong>Edad:</strong> {persona.edad || "No especificada"}
            </p>

            <p>
              <strong>Provincia:</strong>{" "}
              {persona.provincia || "No especificada"}
            </p>

            <p>
              <strong>Fecha de desaparición:</strong>{" "}
              {persona.fechaDesaparicion || "No especificada"}
            </p>

            <p>
              <strong>Último lugar donde fue vista:</strong>{" "}
              {persona.lugar || "No especificado"}
            </p>

            <p>
              <strong>Descripción:</strong>{" "}
              {persona.descripcion || "Sin descripción"}
            </p>

            <p>
              <strong>Información adicional:</strong>{" "}
              {persona.infoExtra || "Sin información adicional"}
            </p>

            <p className="mb-0">
              <strong>Estado:</strong>{" "}
              {persona.estado || "Búsqueda activa"}
            </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default DetallePersonaModal;