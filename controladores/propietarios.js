const {propietariosSave} = require('../servicios/propietarios')

async function postPropietario (req,res){
    const {nombre, apellido} = req.body
    try{
      const respuesta = await propietariosSave({nombre, apellido})
      res.status(200).send(respuesta._doc).end()
    }catch(error){
      throw new Error('Error al crear propietario')
    }
  }
  
  module.exports = {
      postPropietario
  }

