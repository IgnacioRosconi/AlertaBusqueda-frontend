import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

function IniciarSesion() {
  const [correo, setCorreo] = useState("");
  const [aviso, setAviso] = useState(null);

  function enviarFormulario(e) {
    e.preventDefault();

    setAviso(null);

    const correoIngresado = correo.trim().toLowerCase();

    try {
      const usuarios = JSON.parse(
        localStorage.getItem("usuariosAlertaBusqueda") || "[]",
      );

      if (!Array.isArray(usuarios)) {
        throw new Error("Datos de usuarios inválidos");
      }

      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.correo === correoIngresado,
      );

      if (!usuarioEncontrado) {
        setAviso({
          tipo: "warning",
          mensaje: "No existe una cuenta registrada con ese correo.",
        });
        return;
      }

      sessionStorage.setItem(
        "sesionAlertaBusqueda",
        JSON.stringify(usuarioEncontrado),
      );

      window.dispatchEvent(new Event("sesionAlertaBusquedaActualizada"));

      setAviso({
        tipo: "success",
        mensaje: "Sesión de prueba iniciada correctamente.",
      });
    } catch {
      setAviso({
        tipo: "danger",
        mensaje: "No se pudo verificar la cuenta. Intentá nuevamente.",
      });
    }
  }

  return (
    <main className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center mb-4">
              <h1 className="titulo-registro fw-bold mb-3">INICIAR SESIÓN</h1>

              <p className="text-secondary">
                Ingresá a Alerta Búsqueda para participar y administrar tus
                preferencias de alertas.
              </p>
            </div>

            <Card className="border border-2 rounded-5 shadow-sm tarjeta-borde-azul">
              <Card.Body className="p-4 p-md-5">
                <h2 className="h5 fw-bold mb-4">Acceso a tu cuenta</h2>

                <Form onSubmit={enviarFormulario}>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="correo-inicio-sesion">
                      Correo electrónico
                    </Form.Label>

                    <Form.Control
                      type="email"
                      id="correo-inicio-sesion"
                      name="correo"
                      placeholder="ejemplo@correo.com"
                      value={correo}
                      onChange={(e) => {
                        setCorreo(e.target.value);
                        setAviso(null);
                      }}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      className="boton-registro fw-bold py-2"
                    >
                      INGRESAR
                    </Button>
                  </div>

                  {aviso && (
                    <Alert variant={aviso.tipo} className="mt-3 mb-0">
                      {aviso.mensaje}
                    </Alert>
                  )}

                  <p className="text-center text-secondary mt-4 mb-0">
                    ¿Todavía no tenés cuenta?{" "}
                    <Link
                      to="/crear-cuenta"
                      className="text-primary fw-semibold text-decoration-none"
                    >
                      Crear cuenta
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

export default IniciarSesion;
