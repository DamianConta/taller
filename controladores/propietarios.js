const {propietariosSave} = require('../servicios/propietarios')
const HEADERS = {
  "Access-Control-Allow-Origin" : "*",  
  "Access-Control-Allow-Credentials" : true    
  }

async function postPropietario (req,res){
    const {nombre, apellido} = req.body
    try{
      const respuesta = await propietariosSave({nombre, apellido})
      res.set(HEADERS)
      res.status(200).send(respuesta._doc).end()
    }catch(error){
      throw new Error('Error al crear propietario')
    }
  }
  
  module.exports = {
      postPropietario
  }

