const express = require('express'); //Para crear nuestro servidor
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();//Con esto ya podremos escuchar peticiones, esta es mi aplicacion de express


//Node Server
const server = require('http').createServer(app);
//const io = require('socket.io')(server);//esto necesita el socket.js pero aqui tambien lo vamos a ocupar asi que lo exportaremoa
module.exports.io = require('socket.io')(server);



// aqui mandamos a llamar eñ socket.js
require('./sockets/socket');



// Path Público
const publicPath = path.resolve(__dirname, 'public' );//el dirname es donde se encuentra montado nuestro servidor, y apunta a nuestroa carpeta public


app.use( express.static(publicPath));


server.listen( process.env.PORT, ( err)=>{

    if (err)  throw new Error(err);

    console.log('Servidor corriendo en el puerto:',process.env.PORT);
});


