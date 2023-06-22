//importar mysql

import mysql from 'mysql'

//crear la conexion 
const conector = mysql.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: 'quickaccessdb'
    }
) 

conector.connect(err => {
    if(err) throw err
    console.log('conectado ')
})


export{conector}
