const modelos = require('../db/modelos')
const {autosFind, autosSave, autosDeleteOne, autosUpdateOne} = require('../servicios/autos')
const {propietariosSave} = require('../servicios/propietarios')
const HEADERS = {
  "Access-Control-Allow-Origin" : "*",  
  "Access-Control-Allow-Credentials" : true    
  }


async function getAutos(req,res){
  try{  
      const respuesta = await autosFind({})
      res.set(HEADERS);   
      res.status(200).json(respuesta).end()
  }catch(err){
    throw new Error('Error al obtener autos')
  }
}

async function getAuto (req,res){
  try{  
      const respuesta = await autosFind({patente : req.params.patente}) 
      res.set(HEADERS);   
      res.status(200).json(respuesta).end()
  }catch(err){
    throw new Error('Error al obtener auto')
  }
}

async function postAuto (req,res){
  const {nombre , apellido} = req.body
  try{
    const respuesta = await propietariosSave({nombre, apellido})
    const {marca, modelo, anio, patente, color} = req.body
    const propietario = respuesta._doc._id
    const auto = await autosSave({marca, modelo, anio, patente, color, propietario})
    res.set(HEADERS);   
    res.status(200).json(auto).end()
  }catch(error){
    throw new Error('Error al crear auto')
  }
}
  
async function deleteAuto (req,res){
  try{
    const result = await autosDeleteOne({patente : req.params.patente})
    res.set(HEADERS);   
    if (result.deletedCount===1) res.status(200).json({"Respuesta":"Ok"}).end()
    else res.status(200).json({"Respuesta":"Error"}).end()
  }catch(error){
    throw new Error('Error al borrar auto')
  }
}
  
  async function putAuto (req,res){
    try{
    const result = await autosUpdateOne({patente: req.body.patente},
      {marca: req.body.marca,
      modelo: req.body.modelo,
      anio: req.body.anio,
      color: req.body.color})
      console.log(result)
      if (result.n===1){
        res.set(HEADERS);   
        res.status(200).json({"Respuesta":"Ok"}).end()
      } else res.status(200).json({"Respuesta":"Error"}).end()
    }catch(error){
    throw new Error('Error al actualizar auto')
    }
  }

  module.exports = {
      getAutos,
      getAuto,
      postAuto,
      deleteAuto,
      putAuto
  };