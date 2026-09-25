import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
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

function Busqueda() {
  const [searchParams] = useSearchParams();

  const [busqueda, setBusqueda] = useState(searchParams.get("q") || "");
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const solicitudesGuardadas = (() => {
    try {
      return JSON.parse(localStorage.getItem("solicitudesBusqueda")) || [];
    } catch {
      return [];
    }
  })();

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
    <main className="container py-5">
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 col-lg-6 text-center">
          <h1 className="h3 fw-bold mb-4" style={{ color: "#0A2F6B" }}>
            Casos Activos
          </h1>

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
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {personasFiltradas.length > 0 ? (
          personasFiltradas.map((persona, index) => (
            <PersonaCard
              key={persona.id || `${persona.nombre}-${index}`}
              persona={persona}
              onSeleccionar={abrirDetalle}
            />
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center fw-bold shadow-sm">
              No se encontraron casos que coincidan con la búsqueda.
            </div>
          </div>
        )}
      </div>

      <DetallePersonaModal
        persona={personaSeleccionada}
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
      />
    </main>
  );
}

export default Busqueda;