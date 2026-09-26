import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
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
  
  function evitarEnvioTemporal(e) {
    e.preventDefault();
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

                <Form onSubmit={evitarEnvioTemporal}>
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
        ""
      )
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
      e.target.value.replace(/[^0-9+\-\s]/g, "")
    )
  }
  required
/>
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group controlId="provinciaAlertas">
                        <Form.Label>Provincia</Form.Label>

                        <Form.Select defaultValue="" required>
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
                  />

                  <Form.Check
                    type="checkbox"
                    id="menores"
                    label="Búsquedas de niños y adolescentes"
                    className="mb-3"
                  />

                  <Form.Check
                    type="checkbox"
                    id="adultosMayores"
                    label="Personas mayores"
                    className="mb-3"
                  />

                  <Form.Check
                    type="checkbox"
                    id="miZona"
                    label="Desapariciones en mi zona"
                    className="mb-3"
                  />

                  <div className="bg-light border rounded p-3 mb-4">
                    <Form.Check
                      type="checkbox"
                      id="todas"
                      label="Todas las búsquedas"
                      className="fw-bold"
                    />
                  </div>

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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default RecibirAlertas;