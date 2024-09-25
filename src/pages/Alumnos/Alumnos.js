import "./Alumnos.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/Principal/logo.jpg";

function Alumnos() {
  return (
    <div className="contenedor" style={{ height: "74vh", overflow: "none" }}>
      <h1 className="titulo">Alumnos</h1>
      <img src={logo} alt="Logo" />
      <h3>Ingeniero en sistemas</h3>
      <h3>Profesor de Full stack developer</h3>
      <nav>
        <a href="#">www.Maxflores.com</a>
      </nav>
    </div>
  );
}
export default Alumnos;
