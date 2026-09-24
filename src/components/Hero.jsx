import fondoPersonas from "../assets/fondopersonas.png";
import { Button, Form, InputGroup } from "react-bootstrap";

function Hero() {
  return (
    <main
      className="position-relative d-flex align-items-center justify-content-center text-center w-100"
      style={{
        minHeight: "70vh",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      <img
  src={fondoPersonas}
  alt="Red de personas conectadas"
  className="position-absolute w-100 h-100 top-0 start-0"
style={{
  objectFit: "cover",
  objectPosition: "center 25%",
  zIndex: 1,
}}
/>

      <div
        className="container position-relative px-3"
        style={{ zIndex: 2, maxWidth: "700px" }}
      >
        <h1 className="titulo-inicio mb-3">
          TU INFORMACIÓN
          <br />
          PUEDE AYUDAR
        </h1>

        <p className="subtitulo-inicio mb-4">
          Compartir información responsable puede ayudar a encontrar una
          persona.
        </p>

        <InputGroup className="shadow rounded-pill overflow-hidden mx-auto">
          <Form.Control
            type="text"
            placeholder="Buscar por nombre, apellido o zona..."
            aria-label="Buscar"
            className="border-0 px-4 fs-6 py-3"
          />
          <Button variant="primary" className="px-4 fw-bold fs-6">
            Buscar
          </Button>
        </InputGroup>
      </div>
    </main>
  );
}

export default Hero;