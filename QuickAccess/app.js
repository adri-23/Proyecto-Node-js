import mysql from 'mysql'


const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '970603',
database: 'quickaccessdb'
});

const conectar = () =>
connection.connect((err) => {
if (err) 
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
}

//console.log('Conexión exitosa a la base de datos MySQL')
);
 

export {conectar}


