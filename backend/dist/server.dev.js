"use strict";

var express = require('express');

var cors = require('cors');

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./cursos.db');
var app = express();
var PORT = 5000;
app.use(cors());
app.use(express.json()); // Cursos de ejemplo

var cursosEjemplo = [["Python", "Aprende Python desde cero.", "python"], ["JavaScript", "Domina JavaScript y el desarrollo web.", "js"], ["React", "Crea aplicaciones web con React.", "react"], ["Java", "Curso completo de Java.", "java"], ["C++", "Aprende de este Framework Vue.", "vuejs"], ["Angular", "Desarrolla web con Angular.", "angular"], ["PHP", "Desarrollo web con PHP.", "php"], ["C#", "Curso de C# para aplicaciones de escritorio y web.", "microsoft"], ["Go", "Programación concurrente con Go.", "golang"]]; // Inserta algunos cursos de ejemplo si la tabla está vacía

db.serialize(function () {
  // Primero, comprobamos si la tabla está vacía
  db.get('SELECT COUNT(*) AS count FROM cursos', [], function (err, row) {
    if (err) {
      console.error('Error al contar los cursos:', err);
      return;
    } // Si no hay cursos, insertamos algunos


    if (row.count === 0) {
      var sql = "INSERT INTO cursos (titulo, descripcion, icono) VALUES (?, ?, ?)";
      cursosEjemplo.forEach(function (curso) {
        db.run(sql, curso, function (err) {
          if (err) {
            console.error("Error al insertar curso:", err);
          } else {
            console.log("Curso agregado con ID: ".concat(this.lastID));
          }
        });
      });
    } else {
      console.log('La tabla ya contiene cursos.');
    }
  });
}); // Rutas CRUD
// Leer todos los cursos

app.get('/cursos', function (req, res) {
  db.all('SELECT * FROM cursos', [], function (err, rows) {
    if (err) {
      console.error("Error al obtener cursos:", err);
      res.status(500).json({
        error: err.message
      });
      return;
    }

    res.json(rows); // Retorna los cursos desde la base de datos
  });
}); // Crear un nuevo curso

app.post('/cursos', function (req, res) {
  var _req$body = req.body,
      titulo = _req$body.titulo,
      descripcion = _req$body.descripcion,
      icono = _req$body.icono;
  var sql = "INSERT INTO cursos (titulo, descripcion, icono) VALUES (?, ?, ?)";
  db.run(sql, [titulo, descripcion, icono], function (err) {
    if (err) {
      console.error("Error al insertar curso:", err);
      return res.status(500).json({
        error: err.message
      });
    }

    res.status(201).json({
      id: this.lastID,
      titulo: titulo,
      descripcion: descripcion,
      icono: icono
    });
  });
}); // Actualizar un curso por ID

app.put('/cursos/:id', function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      titulo = _req$body2.titulo,
      descripcion = _req$body2.descripcion,
      icono = _req$body2.icono;
  var sql = "UPDATE cursos SET titulo = ?, descripcion = ?, icono = ? WHERE id = ?";
  db.run(sql, [titulo, descripcion, icono, id], function (err) {
    if (err) {
      console.error("Error al actualizar curso:", err);
      return res.status(500).json({
        error: err.message
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: 'Curso no encontrado'
      });
    }

    res.json({
      id: id,
      titulo: titulo,
      descripcion: descripcion,
      icono: icono
    });
  });
}); // Eliminar un curso por ID

app.delete('/cursos/:id', function (req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM cursos WHERE id = ?";
  db.run(sql, id, function (err) {
    if (err) {
      console.error("Error al eliminar curso:", err);
      return res.status(500).json({
        error: err.message
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: 'Curso no encontrado'
      });
    }

    res.json({
      message: 'Curso eliminado'
    });
  });
}); // Iniciar el servidor

app.listen(PORT, function () {
  console.log("Servidor corriendo en http://localhost:".concat(PORT));
});