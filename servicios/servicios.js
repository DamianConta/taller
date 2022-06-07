const modelos = require('../db/modelos')

async function serviciosFind(filtro){
    try{
        return await modelos.servicioModel.find(filtro).populate(modelos.AUTO).exec()
    }catch(error){
        throw error
    }
}

async function serviciosSave(data){
    try{
        const modelo = modelos.servicioModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}

module.exports = {
    serviciosFind,
    serviciosSave
}

