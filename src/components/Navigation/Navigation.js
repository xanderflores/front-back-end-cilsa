import React, {useState} from "react";
import "./Navigation.scss";
import { Container, Nav, Navbar, Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Funciones para abrir y cerrar el modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Validación simple, puedes adaptarla
    if (username === "admin" && password === "admin") {
      handleClose(); // Cerrar el modal
      window.location.href = "/Panel"; // Redirigir a /Panel si es correcto
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          position: "fixed",
          zIndex: "900",
          width: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <Container className="d-flex">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="my-custom-class w-100 ">
              <div className="row w-100">
                <div className="col-8 col-lg-8 nav-dropDown d-flex justify-content-center align-items-center">
                  
                  <Nav.Link
                    className="navItemsText"
                    href="/"
                    style={{ color: "white" }}
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="navItemsText"
                    href="/CursosClasesP"
                    style={{ color: "white" }}
                  >
                    CURSOS&CLASES
                  </Nav.Link>
                  <Nav.Link
                    className="navItemsText"
                    href="/Alumnos"
                    style={{ color: "white" }}
                  >
                    ALUMNOS
                  </Nav.Link>
                  <Nav.Link
                    className="navItemsText"
                    href="/BlogForo"
                    style={{ color: "white" }}
                  >
                    BLOG
                  </Nav.Link>
                  
                  <Nav.Link
                    className="navItemsText"
                    href="/Foro"
                    style={{ color: "white" }}
                  >
                    FORO
                  </Nav.Link>
                  <Nav.Link
                    className="navItemsText"
                    onClick={handleShow} // Al hacer clic, abre el modal
                    style={{ color: "white", cursor: "pointer" }}
                  >
                    PANEL
                  </Nav.Link>
                  
                </div>
                <div className="col-4 col-lg-4 brand-icon d-flex justify-content-end align-items-center">
                  
                  <div className="icon-second d-flex justify-content-between align-items-center ">
                    <a
                      className="icons-fab"
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "facebook-f"]}
                        size="lg"
                        style={{ color: "#000" }}
                      />
                    </a>
                    <a
                      className="icons-fab"
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "instagram"]}
                        size="lg"
                        style={{ color: "#000" }}
                      />
                    </a>
                    <a
                      className="icons-fab"
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "tiktok"]}
                        size="lg"
                        style={{ color: "#000" }}
                      />
                    </a>

                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       {/* Modal de inicio de sesión */}
       <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN - PANEL </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary custom-button" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navigation;
