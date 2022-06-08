const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PROPIETARIOS = 'propietarios';
const PROPIETARIO = 'propietario';
const AUTOS = 'autos';
const AUTO = 'auto';
const SERVICIOS = 'servicios';
const SERVICIO = 'servicio'

const propietarioSchema = new Schema({
    apellido: String,
    nombre: String
})

const autoSchema = new Schema({
    marca : String,
    modelo : String,
    anio : String,
    patente : String,
    color : String,
    propietario :  {type: Schema.Types.ObjectId, ref : PROPIETARIOS}
    
})

const servicioSchema = new Schema({
    servicio: String,
    costo: Number,
    auto: {type : Schema.Types.ObjectId, ref : AUTOS}          
})

const propietarioModel = mongoose.model(PROPIETARIOS, propietarioSchema)
const autoModel = mongoose.model(AUTOS, autoSchema)
const servicioModel = mongoose.model(SERVICIOS, servicioSchema)

module.exports = { 
    propietarioModel,
    autoModel,
    servicioModel,
    PROPIETARIOS,
    PROPIETARIO,
    AUTOS,
    AUTO,
    SERVICIOS,
    SERVICIO
}
