//OPIONTS ACEPTA OBJETOS SIN LA NECESIDAD DE COMANDOS.


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obetener el clima',
        demand: true
    }
}).argv;


module.exports = {
    argv
}