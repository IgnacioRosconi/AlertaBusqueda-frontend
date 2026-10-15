import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Card, Form } from "react-bootstrap";
const URL_API = import.meta.env.VITE_GEOREF_API_URL;
function ConsultaGeografica() {
  const [provincia, setProvincia] = useState("");
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  const [cargandoLocalidades, setCargandoLocalidades] = useState(false);
  const [errorLocalidades, setErrorLocalidades] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

  const controller = new AbortController();

  async function cargarProvincias() {
    try {
      const respuesta = await axios.get(
  `${URL_API}/provincias`,
        {
          params: {
            campos: "id,nombre",
            max: 24,
            orden: "nombre",
          },
          signal: controller.signal,
        }
      );

      if (!controller.signal.aborted) {
        setProvincias(respuesta.data.provincias || []);
      }
    } catch (errorPeticion) {
      if (!axios.isCancel(errorPeticion)) {
        setError("No se pudieron cargar las provincias.");
      }
    } finally {
      if (!controller.signal.aborted) {
        setCargando(false);
      }
    }
  }

  cargarProvincias();

  return () => controller.abort();
}, []);


useEffect(() => {
  if (!provincia) return;

  const controller = new AbortController();

  async function cargarLocalidades() {
    try {
      const respuesta = await axios.get(
        `${URL_API}/localidades`,
        {
          params: {
            provincia: provincia,
            campos: "id,nombre",
            max: 5000,
            orden: "nombre",
          },
          signal: controller.signal,
        }
      );

      if (!controller.signal.aborted) {
        setLocalidades(respuesta.data.localidades || []);
      }
    } catch (errorPeticion) {
      if (!controller.signal.aborted && !axios.isCancel(errorPeticion)) {
        setErrorLocalidades("No se pudieron cargar las localidades.");
      }
    } finally {
      if (!controller.signal.aborted) {
        setCargandoLocalidades(false);
      }
    }
  }

  cargarLocalidades();

  return () => controller.abort();
}, [provincia]);


  return (
  
<Card className="border border-2 rounded-5 shadow-sm tarjeta-borde-azul">

      <Card.Body className="p-3">
        <h2
  className="h5 fw-bold mb-2"
  style={{ color: "#0a2f6b" }}
>
  Consulta geográfica
</h2>

        <p className="text-secondary mb-2">
          Seleccioná una provincia para consultar sus localidades.
        </p>

        {error && (
  <Alert variant="danger">
    {error}
  </Alert>
)}

        <Form.Group controlId="provinciaGeografica">
          <Form.Label>Provincia</Form.Label>


<Form.Select
  value={provincia}

  

  
  
onChange={(e) => {
  const nuevaProvincia = e.target.value;

  setProvincia(nuevaProvincia);
  setLocalidades([]);
  setErrorLocalidades("");
  setCargandoLocalidades(Boolean(nuevaProvincia));
}}

  disabled={cargando || Boolean(error)}
>
  <option value="">
    {cargando ? "Cargando provincias..." : "Seleccioná una provincia"}
  </option>

  {provincias.map((item) => (
    <option key={item.id} value={item.id}>
      {item.nombre}
    </option>
  ))}
</Form.Select>

        </Form.Group>
        
{provincia && (
  <Form.Group controlId="localidadGeografica" className="mt-3">
    <Form.Label>Localidad</Form.Label>

    <Form.Select
      key={provincia}
      defaultValue=""
      disabled={
        cargandoLocalidades ||
        Boolean(errorLocalidades) ||
        localidades.length === 0
      }
    >
      <option value="">
        {cargandoLocalidades
          ? "Cargando localidades..."
          : "Seleccioná una localidad"}
      </option>

      {localidades.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nombre}
        </option>
      ))}
    </Form.Select>

    {errorLocalidades && (
      <Alert variant="danger" className="mt-2">
        {errorLocalidades}
      </Alert>
    )}
  </Form.Group>
)}

      </Card.Body>
    </Card>
  );
}

export default ConsultaGeografica;
