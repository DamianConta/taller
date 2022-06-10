const modelos = require('../db/modelos')
const {serviciosFind, serviciosSave} = require('../servicios/servicios')
const {servicios, NOPINTAR, PINTURA} = require('../entorno/variables')
const {autosFind} = require('../servicios/autos')
const HEADERS = {
  "Access-Control-Allow-Origin" : "*",  
  "Access-Control-Allow-Credentials" : true    
  }


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
    res.set(HEADERS)  
    res.status(200).json(historial).end()
  }catch(error){
    throw new Error('Error al obtener servicios')
  }
}

async function postServicio (req,res){
  await autosFind({patente : req.params.patente})
    .then(resultado=>{
      var presupuesto = 0
      const result = JSON.parse(JSON.stringify(resultado))
      if (!(result.length===0)){
        const auto = result[0]._id
        for (const propiedad in req.body) {
          if (!((NOPINTAR===result[0].color)&&(propiedad===PINTURA))){
            console.log(propiedad)
            presupuesto+=servicios[propiedad].precio;
            const servicio = servicios[propiedad].servicio;
            const costo = servicios[propiedad].precio;
            try{
                serviciosSave({servicio, costo, auto}).then(respuesta =>{
              })
            }catch(error){
              throw new Error("Error ingresando servicios")
            }
          }
        }
        res.set(HEADERS)  
        res.status(200).json({"Presupuesto Total $": presupuesto}).end() 
      }else res.status(200).json({"Response" : "Patente no encontrada"}).end()
    })    
  }
  
module.exports = {
    getServicios,
    postServicio
}
  
  