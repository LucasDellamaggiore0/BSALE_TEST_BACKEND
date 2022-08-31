const server = require('./app')
const {handleConnection} = require('./db/config')



    server.listen(3000, ()=>{
        console.log('Conectado en el puerto 3000')
    })
    handleConnection();

