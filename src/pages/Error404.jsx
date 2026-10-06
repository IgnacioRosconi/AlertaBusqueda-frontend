import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Container as="main" className="py-5 text-center">
      <h1 className="fw-bold mb-3">404</h1>

      <p className="text-secondary mb-4">
        La página que estás buscando no existe.
      </p>

      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </Container>
  );
}

export default Error404;