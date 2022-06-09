
const NOPINTAR = "GRIS"
const PINTURA = "pintura"

const servicios ={
    "aceite" : {precio : 5000,
                servicio: "Cambio de Aceite"},
    "filtro" : {precio : 3500,
                servicio: "Cambio de Filtro"},
    "correa" : {precio : 2800,
                servicio: "Cambio de Correa"},
    "pintura" : {precio : 20000,
                servicio: "Pintura"},
    "otro" :{precio: 4000,
            servicio : "Otro"}
}

module.exports = {
    servicios,
    NOPINTAR,
    PINTURA,
}

