"use strict";

// database.js
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./cursos.db', function (err) {
  if (err) {
    console.error('Error abriendo la base de datos: ' + err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
}); // Crea la tabla de cursos si no existe

db.serialize(function () {
  db.run("\n    CREATE TABLE IF NOT EXISTS cursos (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      titulo TEXT NOT NULL,\n      descripcion TEXT NOT NULL,\n      icono TEXT NOT NULL\n    )\n  ");
});
module.exports = db;