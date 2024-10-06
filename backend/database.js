// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./cursos.db', (err) => {
  if (err) {
    console.error('Error abriendo la base de datos: ' + err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// Crea la tabla de cursos si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS cursos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      icono TEXT NOT NULL
    )
  `);
});

module.exports = db;
