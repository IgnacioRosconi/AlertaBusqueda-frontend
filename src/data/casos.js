import persona1 from "../assets/personadesaparecida1.jpg";
import persona2 from "../assets/personadesaparecida2.jpg";
import persona3 from "../assets/personadesaparecida3.jpeg";

const casos = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: "28",
    provincia: "Tucumán",
    fechaDesaparicion: "No especificada",
    lugar: "Tucumán",
    descripcion: "Cabello de color castaño",
    infoExtra: "Vestido con ropa deportiva",
    estado: "Búsqueda activa",
    foto: persona2,
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    edad: "70",
    provincia: "Córdoba",
    fechaDesaparicion: "12/05",
    lugar: "Córdoba",
    descripcion: "Cabello de color blanco",
    infoExtra: "Vestida con camisón de flores rosas. Presenta demencia.",
    estado: "Búsqueda activa",
    foto: persona1,
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    edad: "60",
    provincia: "Buenos Aires",
    fechaDesaparicion: "No especificada",
    lugar: "Buenos Aires",
    descripcion: "Cabello de color blanco",
    infoExtra: "Vestido con camisa blanca y pantalón negro. Presenta demencia.",
    estado: "Búsqueda activa",
    foto: persona3,
  },
];

export default casos;