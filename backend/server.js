const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cursos.db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Cursos de ejemplo
const cursosEjemplo = [
  ["Python", "Aprende Python desde cero.", "python"],
  ["JavaScript", "Domina JavaScript y el desarrollo web.", "js"],
  ["React", "Crea aplicaciones web con React.", "react"],
  ["Java", "Curso completo de Java.", "java"],
  ["C++", "Aprende de este Framework Vue.", "vuejs"],
  ["Angular", "Desarrolla web con Angular.", "angular"],
  ["PHP", "Desarrollo web con PHP.", "php"],
  ["C#", "Curso de C# para aplicaciones de escritorio y web.", "microsoft"],
  ["Go", "Programación concurrente con Go.", "golang"],
];

// Inserta algunos cursos de ejemplo si la tabla está vacía
db.serialize(() => {
  // Primero, comprobamos si la tabla está vacía
  db.get('SELECT COUNT(*) AS count FROM cursos', [], (err, row) => {
    if (err) {
      console.error('Error al contar los cursos:', err);
      return;
    }

    // Si no hay cursos, insertamos algunos
    if (row.count === 0) {
      const sql = `INSERT INTO cursos (titulo, descripcion, icono) VALUES (?, ?, ?)`;

      cursosEjemplo.forEach(curso => {
        db.run(sql, curso, function(err) {
          if (err) {
            console.error("Error al insertar curso:", err);
          } else {
            console.log(`Curso agregado con ID: ${this.lastID}`);
          }
        });
      });
    } else {
      console.log('La tabla ya contiene cursos.');
    }
  });
});

// Rutas CRUD

// Leer todos los cursos
app.get('/cursos', (req, res) => {
  db.all('SELECT * FROM cursos', [], (err, rows) => {
    if (err) {
      console.error("Error al obtener cursos:", err);
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows); // Retorna los cursos desde la base de datos
  });
});

// Crear un nuevo curso
app.post('/cursos', (req, res) => {
  const { titulo, descripcion, icono } = req.body;
  const sql = `INSERT INTO cursos (titulo, descripcion, icono) VALUES (?, ?, ?)`;

  db.run(sql, [titulo, descripcion, icono], function(err) {
    if (err) {
      console.error("Error al insertar curso:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, titulo, descripcion, icono });
  });
});

// Actualizar un curso por ID
app.put('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, icono } = req.body;
  const sql = `UPDATE cursos SET titulo = ?, descripcion = ?, icono = ? WHERE id = ?`;

  db.run(sql, [titulo, descripcion, icono, id], function(err) {
    if (err) {
      console.error("Error al actualizar curso:", err);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.json({ id, titulo, descripcion, icono });
  });
});

// Eliminar un curso por ID
app.delete('/cursos/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM cursos WHERE id = ?`;

  db.run(sql, id, function(err) {
    if (err) {
      console.error("Error al eliminar curso:", err);
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.json({ message: 'Curso eliminado' });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
