// Clase para manejar todas las clases, es decir la coleccion de bandas

const Band = require("./band");

class Bands{

    constructor(){
        this.bands = []; //Creamos el arreglo de bandas
    }

    addBand( band = new Band()){
        this.bands.push( band ); //Agregar una nueva banda

    }

    getBands(){ //Obtenemos las bandas
        return this.bands;//
    }


    deleteBand(id =''){// Borramos una banda
        this.bands = this.bands.filter( band => band.id !==id);///filter : la condicion necesito regresar todos los arreglos que  cumplan con la cindicion
        return this.bands;
    }

    voteBand( id=''){ //Botamos por una banda
        this.bands = this.bands.map( band=>{ //
            if (band.id===id) {
                band.votes++;
                return band;
            } else{
                return band;
            }
        })
    }



}

module.exports = Bands;