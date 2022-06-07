const modelos = require('../db/modelos')
const {serviciosFind, serviciosSave} = require('../servicios/servicios') 
const entorno = require('../entorno/variables')
const {autosFind} = require('../servicios/autos')

async function getServicios (req,res){
  try{
    const respuesta = await serviciosFind({})
    let historial = []  
    respuesta.forEach(servicio=>{
    console.log(servicio._doc.auto._doc.patente)
    if (req.params.patente===servicio._doc.auto._doc.patente){
      historial.push(servicio._doc)     
        }
      })
    res.status(200).json(historial).end()
  }catch(error){
    throw new Error('Error al obtener servicios')
  }
}

async function postServicio (req,res){
  await autosFind({patente : req.body.patente})
    .then(resultado=>{
      var presupuesto = 0
      const result = JSON.parse(JSON.stringify(resultado))
      const auto = result[0]._id
      if (!(result.length===0)){
        for (const propiedad in req.body) {
          if (propiedad!="patente") {
            presupuesto+=entorno.precios[propiedad].precio;
            const servicio = entorno.precios[propiedad].servicio
            const costo = entorno.precios[propiedad].precio
            try{
                serviciosSave({servicio, costo, auto}).then(respuesta =>{
              })
            }catch(error){
              throw new Error("Error ingresando servicios")
            }
          }
        }
        res.json({"Presupuesto Total $": presupuesto}) 
        res.status(200)
      }
    })    
  }

module.exports = {
    getServicios,
    postServicio
}
  
  