import "./CursosClasesP.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from '../../assets/Principal/logo.jpg'

function CursosClasesP(){
    return (
        <div className="contenedor" style={{ height: "100%", overflow: "none" }}>
            <h1>Max web developer</h1>
            <img src={logo} alt="Logo" />
            <h3>Ingeniero en sistemas</h3>
            <h3>Profesor de Full stack developer</h3>
            <nav>
                <a href="#">www.Maxflores.com</a>
            </nav>
       

        </div>
     
    );
    
}
export default CursosClasesP;