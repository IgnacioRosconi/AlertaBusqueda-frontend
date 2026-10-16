import { useEffect, useState } from "react";
import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import casos from "../data/casos";
import PersonaCard from "../components/PersonaCard";
import DetallePersonaModal from "../components/DetallePersonaModal";

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function obtenerSolicitudesGuardadas() {
  try {
    return JSON.parse(localStorage.getItem("solicitudesBusqueda")) || [];
  } catch {
    return [];
  }
}

function Busqueda() {
  const [searchParams] = useSearchParams();

  const [busqueda, setBusqueda] = useState(searchParams.get("q") || "");
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [solicitudesGuardadas, setSolicitudesGuardadas] = useState(
    obtenerSolicitudesGuardadas,
  );

  useEffect(() => {
    function actualizarSolicitudes(e) {
      if (e.key === "solicitudesBusqueda") {
        setSolicitudesGuardadas(obtenerSolicitudesGuardadas());
      }
    }

    window.addEventListener("storage", actualizarSolicitudes);

    return () => {
      window.removeEventListener("storage", actualizarSolicitudes);
    };
  }, []);

  const todasLasPersonas = [...casos, ...solicitudesGuardadas];

  const textoBusqueda = normalizarTexto(busqueda.trim());

  const personasFiltradas = todasLasPersonas.filter((persona) => {
    const contenido = normalizarTexto(
      `${persona.nombre || ""} ${persona.apellido || ""} ${
        persona.provincia || ""
      } ${persona.lugar || ""} ${persona.estado || ""}`,
    );

    return contenido.includes(textoBusqueda);
  });

  function abrirDetalle(persona) {
    setPersonaSeleccionada(persona);
    setMostrarModal(true);
  }

  return (
    <Container as="main" className="py-5">
      <Row className="justify-content-center mb-5">
        <Col md={8} lg={6} className="text-center">
          <h1 className="titulo-busqueda h3 fw-bold mb-4">Casos Activos</h1>

          <InputGroup className="shadow rounded-pill overflow-hidden">
            <Form.Control
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre, apellido o zona..."
              aria-label="Buscar personas"
              className="border-0 px-4 py-3"
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {personasFiltradas.length > 0 ? (
          personasFiltradas.map((persona, index) => (
            <PersonaCard
              key={persona.id || `${persona.nombre}-${index}`}
              persona={persona}
              onSeleccionar={abrirDetalle}
            />
          ))
        ) : (
          <Col xs={12}>
            <Alert
              variant="warning"
              className="text-center fw-bold shadow-sm mb-0"
            >
              No se encontraron casos que coincidan con la búsqueda.
            </Alert>
          </Col>
        )}
      </Row>

      <DetallePersonaModal
        persona={personaSeleccionada}
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
      />
    </Container>
  );
}

export default Busqueda;
