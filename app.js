const argv = require('./config/yargs.js').argv;

const lugar = require('./lugar/lugar.js');

const clima = require('./clima/clima.js');




//clima.getClima(10.06430, -69.35145) //pruebas
//  .then(console.log)
//.catch(console.log);




//lugar.getLugarLatLng(argv.direccion)//pruebas
//.then(console.log);



const getInfo = async(direccion) => {


    try {

        let nombre = await lugar.getLugarLatLng(direccion);

        let latitud = nombre.lat;
        let longitud = nombre.lng;
        let resp = await clima.getClima(latitud, longitud);

        return (`El Clima de ${ direccion } es: ${ resp }`);

    } catch (e) {
        return (`No se pudo determinar el clima de ${ direccion } `);
    }









}


getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));