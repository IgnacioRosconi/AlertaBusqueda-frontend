function PersonaCard({ persona, onSeleccionar }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div
        className="card h-100 border-0 shadow-sm"
        role="button"
        tabIndex="0"
        onClick={() => onSeleccionar(persona)}
        style={{ cursor: "pointer" }}
      >
        {persona.foto ? (
          <img
            src={persona.foto}
            className="card-img-top"
            alt={`Fotografía de ${persona.nombre} ${persona.apellido}`}
            style={{ height: "250px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="d-flex align-items-center justify-content-center bg-secondary text-white fw-bold"
            style={{ height: "250px" }}
          >
            Sin fotografía
          </div>
        )}

        <div className="card-body text-center">
          <p className="fw-bold text-dark mb-1">
            {persona.nombre} {persona.apellido}
          </p>

          <p className="small text-secondary mb-0">
            {persona.provincia} - Edad {persona.edad || "No especificada"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonaCard;