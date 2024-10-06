import "./CursosClasesP.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cursos from "../../Data/DataCursos"; // Importamos los datos de los cursos

function CursosClasesP() {
  return (
    <div className="container">
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
