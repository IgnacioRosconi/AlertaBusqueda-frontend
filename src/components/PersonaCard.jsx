import { Card, Col } from "react-bootstrap";

function PersonaCard({ persona, onSeleccionar }) {
  return (
    <Col sm={6} md={4} lg={3}>
      <Card
        className="persona-card h-100 border-0 shadow-sm"
        role="button"
        tabIndex="0"
        onClick={() => onSeleccionar(persona)}
      >
        {persona.foto ? (
          <Card.Img
            variant="top"
            src={persona.foto}
            alt={`Fotografía de ${persona.nombre} ${persona.apellido}`}
            className="persona-card-imagen"
          />
        ) : (
          <div className="persona-card-sin-foto d-flex align-items-center justify-content-center bg-secondary text-white fw-bold">
            Sin fotografía
          </div>
        )}

        <Card.Body className="text-center">
          <Card.Text className="fw-bold text-dark mb-1">
            {persona.nombre} {persona.apellido}
          </Card.Text>

          <Card.Text className="small text-secondary mb-0">
            {persona.provincia} - Edad {persona.edad || "No especificada"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PersonaCard;