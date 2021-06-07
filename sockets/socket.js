//aqui importaremos el io que exportamos 
const {io} = require('../index');
const Band = require('../models/band');
const Bands = require('../models/bands');


const bands = new Bands();

bands.addBand( new Band( 'Breakin Benjamin'));
bands.addBand( new Band( 'Bon Jovi'));
bands.addBand( new Band( 'Héroes del Silencio'));
bands.addBand( new Band( 'Metallica'));




//Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

        //Mandar todas las bandas a los clientes 
        client.emit('active-bands', bands.getBands() );



    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
     });
     
    client.on('mensaje', ( payload) => {  //on para esuchar algo
        console.log('Mensaje!!!', payload);

    io.emit('mensaje',{admin:'Nuevo Mensaje'});//el io es para todos los clientes conectados

    });
/**
 * Votos
 */
client.on('vote-band', ( payload )=>{
    bands.voteBand( payload.id);
    io.emit('active-bands', bands.getBands() ); //El io es para todos los que este conectados
});
/**
 * Agregar Banda
 */
client.on('add-band', ( payload )=>{
    // bands.voteBand( payload.id);
    const newBand = new Band( payload.name )//Se crea la Banda
    bands.addBand(newBand) //Esto pide una banda
    io.emit('active-bands', bands.getBands() ); //El io es para todos los que este conectados
});
/**
 * Eliminat Banda
 */
 client.on('delete-band', ( payload )=>{
    bands.deleteBand( payload.id);
    io.emit('active-bands', bands.getBands() ); //El io es para todos los que este conectados
});


    // //Desde la aplicacion de flutter : el emitir mensaje hace referencia a que alguien va a emitir ese mendaje y luego 'nuevo mensaje es lo que mi aplicacionde flutter esta escuchando'
    // client.on('emitir-mensaje', ( payload) => {  //on para esuchar algo
    // // console.log(payload);
    // // io.emit('nuevo-mensaje',{payload});//el io es para todos los clientes conectados
    // client.broadcast.emit('nuevo-mensaje',payload);// Emite a todos menos al que lo emitió
    // });





  });