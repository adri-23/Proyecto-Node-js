import express from 'express';
import { conector } from './app.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡bienvenido al servidor! Pruebas de estadias UVEG.' );
});

conector.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
