import React from "react";
import "./Navigation.scss";
import { Container, Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Navigation() {
 
  

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
                    BLOG&FORO
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
    </>
  );
}

export default Navigation;
