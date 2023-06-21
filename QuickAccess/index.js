import express from 'express';
import { conectar } from './app/mysql_connector;'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡bienvenido al servidor! Pruebas de estadias UVEG.' );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
