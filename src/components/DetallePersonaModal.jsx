import { Modal } from "react-bootstrap";

function DetallePersonaModal({ persona, show, onHide }) {
  if (!persona) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold" style={{ color: "#0A2F6B" }}>
          Detalle de la búsqueda
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row g-4">
          <div className="col-md-5 text-center">
            {persona.foto ? (
              <img
                src={persona.foto}
                alt={`Fotografía de ${persona.nombre} ${persona.apellido}`}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center bg-secondary text-white fw-bold rounded"
                style={{ height: "300px" }}
              >
                Sin fotografía
              </div>
            )}
          </div>

          <div className="col-md-7">
            <h2 className="h4 fw-bold mb-3">
              {persona.nombre} {persona.apellido}
            </h2>

            <p><strong>Edad:</strong> {persona.edad || "No especificada"}</p>
            <p><strong>Provincia:</strong> {persona.provincia || "No especificada"}</p>
            <p><strong>Fecha de desaparición:</strong> {persona.fechaDesaparicion || "No especificada"}</p>
            <p><strong>Último lugar donde fue vista:</strong> {persona.lugar || "No especificado"}</p>
            <p><strong>Descripción:</strong> {persona.descripcion || "Sin descripción"}</p>
            <p><strong>Información adicional:</strong> {persona.infoExtra || "Sin información adicional"}</p>
            <p><strong>Estado:</strong> {persona.estado || "Búsqueda activa"}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DetallePersonaModal;