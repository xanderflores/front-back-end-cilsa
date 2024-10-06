import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import { Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Panel() {
  const [cursoData, setCursoData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({ titulo: '', descripcion: '', icono: '' });

  // Función para obtener los cursos desde el backend
  const obtenerCursos = async () => {
    try {
      const response = await fetch('http://localhost:5000/cursos');
      const data = await response.json();
      setCursoData(data); // Actualiza el estado con los cursos obtenidos
    } catch (error) {
      console.error('Error al obtener los cursos:', error);
    }
  };

  useEffect(() => {
    obtenerCursos(); // Carga los cursos al montar el componente
  }, []);

  const eliminarCurso = async (id) => {
    try {
      await fetch(`http://localhost:5000/cursos/${id}`, {
        method: 'DELETE'
      });
      obtenerCursos(); // Actualiza la lista de cursos después de eliminar
    } catch (error) {
      console.error('Error al eliminar el curso:', error);
    }
  };

  const crearCurso = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/cursos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoCurso)
      });
      const data = await response.json();
      setCursoData([...cursoData, data]); // Agregar el nuevo curso a la lista
      setShowModal(false); // Cerrar el modal
      setNuevoCurso({ titulo: '', descripcion: '', icono: '' }); // Reiniciar el formulario
    } catch (error) {
      console.error('Error al crear el curso:', error);
    }
  };

  return (
    <div className="container-principal">
      <h1 className="text-center mb-4">Lista de Cursos</h1>
      <Button variant="primary" className="mb-3" onClick={() => setShowModal(true)}>
        Nuevo Curso
      </Button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Icono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursoData.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.id}</td>
              <td>{curso.titulo}</td>
              <td>{curso.descripcion}</td>
              <td>
                <FontAwesomeIcon icon={['fab', curso.icono]} />
              </td>
              <td>
                <Button variant="danger" onClick={() => eliminarCurso(curso.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para crear un nuevo curso */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={crearCurso}>
            <Form.Group controlId="formTitulo">
              <Form.Label>Título</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Título del curso" 
                value={nuevoCurso.titulo} 
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, titulo: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Descripción del curso" 
                value={nuevoCurso.descripcion} 
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formIcono">
              <Form.Label>Icono</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Icono del curso (por ejemplo, 'js', 'python')" 
                value={nuevoCurso.icono} 
                onChange={(e) => setNuevoCurso({ ...nuevoCurso, icono: e.target.value })} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Crear Curso
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Panel;
