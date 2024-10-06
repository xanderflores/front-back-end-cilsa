import "./CursosClasesP.css";
import React, { useEffect, useState } from "react"; // Importa useEffect y useState
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CursosClasesP() {
  const [cursos, setCursos] = useState([]); // Estado para almacenar los cursos

  // Función para obtener los cursos desde la API
  const obtenerCursos = async () => {
    try {
      const response = await fetch('http://localhost:5000/cursos'); // Cambia la URL según tu configuración
      const data = await response.json();
      setCursos(data); // Actualiza el estado con los cursos obtenidos
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
    }
  };

  useEffect(() => {
    obtenerCursos(); // Carga los cursos al montar el componente
  }, []);

  return (
    <div className="container-principal">
      {cursos.map((curso) => (
        <Card style={{ width: '18rem', margin: '10px' }} key={curso.id}>
          <div className="d-flex justify-content-center align-items-center" style={{ height: '180px', backgroundColor: '#f8f9fa' }}>
            <FontAwesomeIcon icon={['fab', curso.icono]} size="6x" />
          </div>
          <Card.Body className="text-center">
            <Card.Title>{curso.titulo}</Card.Title>
            <Card.Text>{curso.descripcion}</Card.Text>
            <a href={`/curso/${curso.id}`} className="btn btn-primary custom-button">
              Ver Curso
            </a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CursosClasesP;
