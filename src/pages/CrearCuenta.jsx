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
import { Link } from "react-router-dom";

function CrearCuenta() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
  });

  const [formularioValidado, setFormularioValidado] = useState(false);
  const [errorRegistro, setErrorRegistro] = useState("");
 
function cambiarCampo(e) {
  const { name, value } = e.target;

  let valorLimpio = value;

  if (name === "nombre" || name === "apellido") {
    valorLimpio = value.replace(/[^\p{L} ]/gu, "");
  }

  setFormulario({
    ...formulario,
    [name]: valorLimpio,
  });

  setFormularioValidado(false);
}

function enviarFormulario(e) {
  e.preventDefault();

  setErrorRegistro("");
  setFormularioValidado(false);

  const nombre = formulario.nombre.trim();
  const apellido = formulario.apellido.trim();
  const correo = formulario.correo.trim().toLowerCase();

  const soloLetras = /^\p{L}+(?: +\p{L}+)*$/u;

  if (
    nombre.length < 2 ||
    apellido.length < 2 ||
    !soloLetras.test(nombre) ||
    !soloLetras.test(apellido)
  ) {
    setErrorRegistro("Ingresá un nombre y apellido válidos.");
    return;
  }

  try {
    const usuarios = JSON.parse(
      localStorage.getItem("usuariosAlertaBusqueda") || "[]"
    );

    if (!Array.isArray(usuarios)) {
      throw new Error("Datos de usuarios inválidos");
    }

    const existe = usuarios.some(
      (usuario) => usuario.correo === correo
    );

    if (existe) {
      setErrorRegistro("Ese correo ya está registrado.");
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellido,
      correo,
    };

    localStorage.setItem(
      "usuariosAlertaBusqueda",
      JSON.stringify([...usuarios, nuevoUsuario])
    );

    setFormularioValidado(true);
  } catch (error) {
    console.error("Error al guardar la cuenta:", error);
    setErrorRegistro("No se pudo guardar la cuenta.");
  }

  }

  return (
    <main className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center mb-4">
              <h1 className="titulo-registro fw-bold mb-3">CREAR CUENTA</h1>

              <p className="text-secondary">
                Registrate para participar en Alerta Búsqueda. Podrás registrar
                solicitudes de búsqueda y configurar las alertas que quieras
                recibir.
              </p>
            </div>

            <Card className="border-0 shadow-sm rounded-3">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h5 fw-bold mb-4">Datos personales</h2>

                <Form onSubmit={enviarFormulario}>
                  <Row className="g-3">
                    <Form.Group as={Col} xs={12} md={6}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="Ingresá tu nombre"
                        value={formulario.nombre}
                        onChange={cambiarCampo}
                        required
                        minLength={2}
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12} md={6}>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        placeholder="Ingresá tu apellido"
                        value={formulario.apellido}
                        onChange={cambiarCampo}
                        required
                        minLength={2}
                      />
                    </Form.Group>

                    <Form.Group as={Col} xs={12}>
                      <Form.Label>Correo electrónico</Form.Label>
                      <Form.Control
                        type="email"
                        name="correo"
                        placeholder="ejemplo@correo.com"
                        value={formulario.correo}
                        onChange={cambiarCampo}
                        required
                      />
                    </Form.Group>
                  </Row>
                  
                  {errorRegistro && (
  <Alert variant="danger" className="mt-4 mb-0">
    {errorRegistro}
  </Alert>
)}

                  {formularioValidado && (
                    <Alert variant="info" className="mt-4 mb-0">
                      Formulario completo. 
                    </Alert>
                  )}

                  <div className="d-grid mt-4">
                    <Button
                      type="submit"
                      className="boton-registro fw-bold py-2"
                    >
                      CREAR CUENTA
                    </Button>
                  </div>
                  <p className="text-center text-secondary mt-4 mb-0">
                    ¿Ya tenés una cuenta?{" "}
                    <Link
                      to="/iniciar-sesion"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      Iniciar sesión
                    </Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default CrearCuenta;
