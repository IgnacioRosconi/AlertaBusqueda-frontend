import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

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

function Registro() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    provincia: "",
    fechaDesaparicion: "",
    lugar: "",
    descripcion: "",
    infoExtra: "",
    nombreContacto: "",
    dniContacto: "",
    telefonoContacto: "",
  });

  const [archivoFoto, setArchivoFoto] = useState(null);
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  function soloLetras(texto) {
    return texto.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g, "");
  }

  function soloNumeros(texto) {
    return texto.replace(/[^0-9]/g, "");
  }

  function cambiarCampo(e) {
    const { name, value } = e.target;

    let nuevoValor = value;

    if (
      name === "nombre" ||
      name === "apellido" ||
      name === "nombreContacto"
    ) {
      nuevoValor = soloLetras(value);
    }

    if (name === "edad" || name === "dniContacto") {
      nuevoValor = soloNumeros(value);
    }

    if (name === "telefonoContacto") {
      nuevoValor = value.replace(/[^0-9+\-]/g, "");
    }

    setFormulario({
      ...formulario,
      [name]: nuevoValor,
    });
  }

  function convertirFotoBase64(archivo) {
    return new Promise((resolve, reject) => {
      if (!archivo) {
        resolve("");
        return;
      }

      const lector = new FileReader();

      lector.onload = () => {
        resolve(lector.result);
      };

      lector.onerror = () => {
        reject(lector.error);
      };

      lector.readAsDataURL(archivo);
    });
  }

  async function enviarFormulario(e) {
    e.preventDefault();

    const fotoBase64 = await convertirFotoBase64(archivoFoto);

    const nuevaSolicitud = {
      nombre: formulario.nombre.trim(),
      apellido: formulario.apellido.trim(),
      edad: formulario.edad,
      provincia: formulario.provincia,
      fechaDesaparicion: formulario.fechaDesaparicion,
      lugar: formulario.lugar.trim(),
      descripcion: formulario.descripcion.trim(),
      infoExtra: formulario.infoExtra.trim(),
      foto: fotoBase64,
      estado: "Pendiente de verificación",
    };

    const solicitudesGuardadas =
      JSON.parse(localStorage.getItem("solicitudesBusqueda")) || [];

    solicitudesGuardadas.push(nuevaSolicitud);

    localStorage.setItem(
      "solicitudesBusqueda",
      JSON.stringify(solicitudesGuardadas),
    );

    setSolicitudEnviada(true);
  }

  return (
    <main className="bg-light py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h1 className="titulo-registro fw-bold mb-3">
              REGISTRAR BÚSQUEDA
            </h1>

            <p className="text-secondary mb-0">
              Completá la información necesaria para iniciar una solicitud de
              registro de una persona desaparecida. La información deberá ser
              verificada antes de su publicación.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Body className="p-4 p-md-5">
                <Form onSubmit={enviarFormulario}>
                  <h2 className="h4 mb-4 fw-bold">
                    Datos de la persona buscada
                  </h2>

                  <Row className="g-3 mb-4">
                    <Form.Group as={Col} md={6}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={cambiarCampo}
                        placeholder="Ingresá el nombre"
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={6}>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        value={formulario.apellido}
                        onChange={cambiarCampo}
                        placeholder="Ingresá el apellido"
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={4}>
                      <Form.Label>Edad</Form.Label>
                      <Form.Control
                        type="text"
                        name="edad"
                        value={formulario.edad}
                        onChange={cambiarCampo}
                        placeholder="Ej: 25"
                        maxLength={3}
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={4}>
                      <Form.Label>Provincia</Form.Label>
                      <Form.Select
                        name="provincia"
                        value={formulario.provincia}
                        onChange={cambiarCampo}
                        required
                      >
                        <option value="">Seleccioná una provincia</option>

                        {provincias.map((provincia) => (
                          <option key={provincia} value={provincia}>
                            {provincia}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md={4}>
                      <Form.Label>Fecha de desaparición</Form.Label>
                      <Form.Control
                        type="date"
                        name="fechaDesaparicion"
                        value={formulario.fechaDesaparicion}
                        onChange={cambiarCampo}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12}>
                      <Form.Label>
                        Lugar donde fue vista por última vez
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lugar"
                        value={formulario.lugar}
                        onChange={cambiarCampo}
                        placeholder="Localidad, barrio o dirección aproximada..."
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12}>
                      <Form.Label>Descripción física</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="descripcion"
                        value={formulario.descripcion}
                        onChange={cambiarCampo}
                        placeholder="Contextura, color de pelo, ojos, etc."
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12}>
                      <Form.Label className="text-primary">
                        Información adicional
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="infoExtra"
                        value={formulario.infoExtra}
                        onChange={cambiarCampo}
                        placeholder="Vestimenta, tatuajes, cicatrices u otra información útil..."
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12}>
                      <Form.Label>Fotografía reciente</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setArchivoFoto(e.target.files[0] || null)
                        }
                      />
                    </Form.Group>
                  </Row>

                  <hr className="my-5" />

                  <h2 className="h4 mb-4 fw-bold">
                    Datos de contacto del denunciante
                  </h2>

                  <Row className="g-3">
                    <Form.Group as={Col} md={4}>
                      <Form.Label>Nombre y apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombreContacto"
                        value={formulario.nombreContacto}
                        onChange={cambiarCampo}
                        placeholder="Ingresá nombre completo"
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={4}>
                      <Form.Label>DNI</Form.Label>
                      <Form.Control
                        type="text"
                        name="dniContacto"
                        value={formulario.dniContacto}
                        onChange={cambiarCampo}
                        placeholder="Ej: 40123456"
                        maxLength={8}
                        required
                      />
                    </Form.Group>

                    <Form.Group as={Col} md={4}>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefonoContacto"
                        value={formulario.telefonoContacto}
                        onChange={cambiarCampo}
                        placeholder="Ej: +54381..."
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Alert variant="warning" className="text-center mt-4 mb-0">
                    <strong>Importante:</strong> La información subida será
                    verificada antes de ser publicada en la página.
                  </Alert>

                  <div className="text-center mt-5">
                    <Button
                      type="submit"
                      className="boton-registro rounded-pill fw-bold px-5 py-3"
                    >
                      {solicitudEnviada
                        ? "SOLICITUD ENVIADA"
                        : "ENVIAR SOLICITUD DE BÚSQUEDA"}
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

export default Registro;