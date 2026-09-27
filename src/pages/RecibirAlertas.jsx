import { Accordion, Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";

const provincias = [
  "Buenos Aires",
  "Ciudad Autónoma de Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

function RecibirAlertas() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [provincia, setProvincia] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const [alertas, setAlertas] = useState({
    prioritarias: false,
    menores: false,
    adultosMayores: false,
    miZona: false,
  });

  const todasSeleccionadas = Object.values(alertas).every(
    (seleccionada) => seleccionada,
  );

  const nombresAlertas = {
    prioritarias: "Alertas prioritarias",
    menores: "Búsquedas de niños y adolescentes",
    adultosMayores: "Personas mayores",
    miZona: "Desapariciones en mi zona",
  };

  const alertasSeleccionadas = Object.keys(alertas)
    .filter((tipo) => alertas[tipo])
    .map((tipo) => nombresAlertas[tipo]);
  function enviarFormulario(e) {
    e.preventDefault();
    setMostrarModal(true);
  }

function cerrarModal() {
  setMostrarModal(false);
  setNombre("");
  setEdad("");
  setTelefono("");
  setProvincia("");
  setAlertas({
    prioritarias: false,
    menores: false,
    adultosMayores: false,
    miZona: false,
  });
}
  return (
    <main className="bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "#0A2F6B" }}>
            RECIBIR ALERTAS DE BÚSQUEDA
          </h1>

          <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Registrate para recibir información sobre búsquedas prioritarias y
            novedades relevantes de acuerdo con las opciones que selecciones.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h4 fw-bold mb-4">Datos de contacto</h2>

                <Form onSubmit={enviarFormulario}>
                  <Row className="g-3 mb-4">
                    <Col md={4}>
                      <Form.Group controlId="nombreAlertas">
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ej: Juan Pérez"
                          value={nombre}
                          onChange={(e) =>
                            setNombre(
                              e.target.value.replace(
                                /[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g,
                                "",
                              ),
                            )
                          }
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group controlId="edadAlertas">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                          type="text"
                          inputMode="numeric"
                          maxLength={3}
                          placeholder="Ej: 30"
                          value={edad}
                          onChange={(e) =>
                            setEdad(e.target.value.replace(/[^0-9]/g, ""))
                          }
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group controlId="telefonoAlertas">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Ej: 381..."
                          value={telefono}
                          onChange={(e) =>
                            setTelefono(
                              e.target.value.replace(/[^0-9+\-\s]/g, ""),
                            )
                          }
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="provinciaAlertas">
                        <Form.Label>Provincia</Form.Label>

                        <Form.Select
                          value={provincia}
                          onChange={(e) => setProvincia(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                            Seleccioná una provincia
                          </option>

                          {provincias.map((provincia) => (
                            <option key={provincia} value={provincia}>
                              {provincia}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <h2 className="h4 fw-bold mb-2">
                    ¿Qué alertas querés recibir?
                  </h2>

                  <p className="text-secondary small mb-4">
                    Podés seleccionar una o varias opciones.
                  </p>

                  <Form.Check
                    type="checkbox"
                    id="alertasPrioritarias"
                    label="Alertas prioritarias"
                    className="mb-3"
                    checked={alertas.prioritarias}
                    onChange={(e) =>
                      setAlertas({
                        ...alertas,
                        prioritarias: e.target.checked,
                      })
                    }
                  />

                  <Form.Check
                    type="checkbox"
                    id="menores"
                    label="Búsquedas de niños y adolescentes"
                    className="mb-3"
                    checked={alertas.menores}
                    onChange={(e) =>
                      setAlertas({
                        ...alertas,
                        menores: e.target.checked,
                      })
                    }
                  />

                  <Form.Check
                    type="checkbox"
                    id="adultosMayores"
                    label="Personas mayores"
                    className="mb-3"
                    checked={alertas.adultosMayores}
                    onChange={(e) =>
                      setAlertas({
                        ...alertas,
                        adultosMayores: e.target.checked,
                      })
                    }
                  />

                  <Form.Check
                    type="checkbox"
                    id="miZona"
                    label="Desapariciones en mi zona"
                    className="mb-3"
                    checked={alertas.miZona}
                    onChange={(e) =>
                      setAlertas({
                        ...alertas,
                        miZona: e.target.checked,
                      })
                    }
                  />

                  <div className="bg-light border rounded p-3 mb-4">
                    <Form.Check
                      type="checkbox"
                      id="todas"
                      label="Todas las búsquedas"
                      className="fw-bold"
                      checked={todasSeleccionadas}
                      onChange={(e) =>
                        setAlertas({
                          prioritarias: e.target.checked,
                          menores: e.target.checked,
                          adultosMayores: e.target.checked,
                          miZona: e.target.checked,
                        })
                      }
                    />
                  </div>

                  {(nombre || provincia || alertasSeleccionadas.length > 0) && (
                    <div className="mt-4 p-3 bg-light border rounded shadow-sm">
                      <h3
                        className="h5 fw-bold mb-3"
                        style={{ color: "#0A2F6B" }}
                      >
                        Resumen de tus alertas
                      </h3>

                      <p className="mb-2">
                        <strong>Nombre:</strong> {nombre || "Sin completar"}
                      </p>

                      <p className="mb-2">
                        <strong>Provincia:</strong>{" "}
                        {provincia || "Sin seleccionar"}
                      </p>

                      <p className="mb-0">
                        <strong>Alertas seleccionadas:</strong>{" "}
                        {alertasSeleccionadas.length > 0
                          ? alertasSeleccionadas.join(", ")
                          : "Ninguna"}
                      </p>
                    </div>
                  )}

                  <div className="text-center mt-5">
                    <Button
                      type="submit"
                      className="px-4 py-2 fw-bold"
                      style={{ backgroundColor: "#0A2F6B" }}
                    >
                      QUIERO RECIBIR ALERTAS
                    </Button>
                  </div>
                </Form>

                <Modal
                  show={mostrarModal}
                  onHide={cerrarModal}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Solicitud de alertas registrada</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p className="mb-2">
                      <strong>Nombre:</strong> {nombre}
                    </p>

                    <p className="mb-2">
                      <strong>Provincia:</strong> {provincia}
                    </p>

                    <p className="mb-3">
                      <strong>Alertas seleccionadas:</strong>{" "}
                      {alertasSeleccionadas.length > 0
                        ? alertasSeleccionadas.join(", ")
                        : "Ninguna"}
                    </p>

                    <p className="text-secondary mb-0">
                      Tus preferencias de alertas fueron registradas
                      correctamente.
                    </p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      onClick={cerrarModal}
                      style={{ backgroundColor: "#0A2F6B" }}
                    >
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <section className="py-5">
  <div className="text-center mb-4">
    <h2 className="fw-bold">¿Cómo funcionan las alertas?</h2>
    <p className="text-secondary">
      Información sobre el sistema de notificaciones de Alerta Búsqueda.
    </p>
  </div>

  <Row className="justify-content-center">
    <Col xs={12} lg={8}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            ¿Qué tipo de alertas voy a recibir?
          </Accordion.Header>
          <Accordion.Body>
            Podrás elegir recibir alertas prioritarias, búsquedas de menores,
            personas mayores o todas las búsquedas de tu provincia.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            ¿Puedo seleccionar mi provincia?
          </Accordion.Header>
          <Accordion.Body>
            Sí. El formulario permite seleccionar una provincia para organizar
            las alertas según la ubicación indicada.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ¿Cómo se utilizan los datos?
          </Accordion.Header>
          <Accordion.Body>
            Los datos proporcionados se utilizan de manera confidencial y
            exclusivamente para el envío de alertas pertinentes.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  </Row>
</section>
      </Container>
    </main>
  );
}

export default RecibirAlertas;
