const axios = require('axios');


const getLugarLatLng = async(direccion) => { // TODA FUNCION CON ASYNC SIEMPRE DEVOLVERA UNA PROMESA. HAY QUE MANEJAR EL THEN Y CATCH.

    //TRANSFORMA UN STRING A UN STRING DE URL SEGURO
    //POR EJEMPLO "NEW YORK" LO CAMBIA A NEW%20YORK
    const encodedUlr = encodeURI(direccion);



    const instance = axios.create({ // SE CREA UNA INSTANCIA USANDO AXIOS
        //PARA EL URL DE LA API.
        baseURL: `https://geocode.xyz/${encodedUlr}.,+57632?json=1`,

    });

    const resp = await instance.get();

    if (resp.data.length === 0) { // EN CASO DE QUE EL OBJETO QUE DEVUELVE LA API SEA VACIO O NO TENGA PROPIEDADES. THROW ERROR
        throw new Error(`No hay direccion para ${direccion}`);
    }


    const data = resp.data;
    const pais = resp.data.standard.countryname;
    const ciudad = resp.data.standard.city; // SE DECLARAN VARIABLES PARA GUARDAR LOS ATRIBUTOS QUE QUEREMOS.
    const lat = resp.data.latt;
    const lng = resp.data.longt;




    return {
        pais,
        ciudad,
        lat,
        lng
    }


}





module.exports = {
    getLugarLatLng
}