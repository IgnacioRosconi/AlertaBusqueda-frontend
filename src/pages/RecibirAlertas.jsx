import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
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
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h1 className="titulo-alertas fw-bold mb-3">
              RECIBIR ALERTAS DE BÚSQUEDA
            </h1>

            <p className="text-secondary mb-0">
              Registrate para recibir información sobre búsquedas prioritarias y
              novedades relevantes de acuerdo con las opciones que selecciones.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h4 fw-bold mb-4">Datos de contacto</h2>

                <Form onSubmit={enviarFormulario}>
                  <Row className="g-3 mb-4">
                    <Form.Group as={Col} md={4} controlId="nombreAlertas">
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

                    <Form.Group as={Col} md={4} controlId="edadAlertas">
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

                    <Form.Group as={Col} md={4} controlId="telefonoAlertas">
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

                    <Form.Group as={Col} xs={12} controlId="provinciaAlertas">
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
                    <Card className="bg-light border shadow-sm mt-4">
                      <Card.Body>
                        <h3 className="titulo-alertas h5 fw-bold mb-3">
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
                      </Card.Body>
                    </Card>
                  )}

                  <div className="text-center mt-5">
                    <Button
                      type="submit"
                      className="boton-alertas px-4 py-2 fw-bold"
                    >
                      QUIERO RECIBIR ALERTAS
                    </Button>
                  </div>
                </Form>

                <Modal show={mostrarModal} onHide={cerrarModal} centered>
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
                    <Button className="boton-alertas" onClick={cerrarModal}>
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

            <p className="text-secondary mb-0">
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
                    Podrás elegir recibir alertas prioritarias, búsquedas de
                    menores, personas mayores o todas las búsquedas de tu
                    provincia.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    ¿Puedo seleccionar mi provincia?
                  </Accordion.Header>

                  <Accordion.Body>
                    Sí. El formulario permite seleccionar una provincia para
                    organizar las alertas según la ubicación indicada.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    ¿Cómo se utilizan los datos?
                  </Accordion.Header>

                  <Accordion.Body>
                    Los datos proporcionados se utilizan de manera confidencial
                    y exclusivamente para el envío de alertas pertinentes.
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
