//aqui importaremos el io que exportamos 
const {io} = require('../index')

//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
     });
     
    client.on('mensaje', ( payload) => {  //on para esuchar algo
        console.log('Mensaje!!!', payload);

    io.emit('mensaje',{admin:'Nuevo Mensaje'});//el io es para todos los clientes conectados

    });


  });