const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const autos = require('./controladores/autos');
const propietarios = require('./controladores/propietarios');
const servicios = require('./controladores/servicios');

const URL_DATABASE =  'mongodb://localhost/pickit';

const config = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}

// Manejo de errores

const manejarError =(error,req,res,next)=>{
    console.log(`Error del tipo : ${error.message}`)
    res.status(500)
}

const port = process.env.app_port || 8080;

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));

// -----------------------
//      Ruteo             
// -----------------------

app.get('/v1/autos', autos.getAutos);

app.get('/v1/autos/:patente', autos.getAuto);

app.get('/v1/servicios/:patente', servicios.getServicios);

app.post('/v1/propietarios',propietarios.postPropietario)

app.post('/v1/servicios/:patente',servicios.postServicio)

app.post('/v1/autos',autos.postAuto)

app.delete('/v1/autos/:patente',autos.deleteAuto)

app.put('/v1/autos/:patente',autos.putAuto)

app.get('*', (req,res)=>{
    res.status(404).send("Recurso no encontrado").end()
 });

 app.use(manejarError)
 
mongoose.connect(URL_DATABASE, config).then(()=>{
    try{
        app.listen(port, function(err) {
            if(!err) console.log(`Escuchando en el port: ${port}`)
            else console.log(`Error en el servidor`)
        })
    }catch(err) {throw err}
},err=> console.log(err))
  


