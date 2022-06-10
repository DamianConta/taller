const { servicioModel, AUTO } =require('../db/modelos')

async function serviciosFind(filtro){
    try{
        return await servicioModel.find(filtro).populate(AUTO).exec()
    }catch(error){
        throw error
    }
}

async function serviciosSave(data){
    try{
        const modelo = servicioModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}


module.exports = {
    serviciosFind,
    serviciosSave
}

