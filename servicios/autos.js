const modelos = require('../db/modelos')

async function autosFind(filtro){
    try{
        return await modelos.autoModel.find(filtro).populate(modelos.PROPIETARIO).exec()
    }catch(error){
        throw error
    }
}

async function autosSave(data){
    try{
        const modelo = modelos.autoModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}

async function autosDeleteOne(data){
    try{
        return await modelos.autoModel.deleteOne(data)
    }catch(error){
        throw error
    }
}

async function autosUpdateOne(filtro, update){
    try{
        return await modelos.autoModel.updateOne(filtro,update)
    }catch(error){
        throw(error)
    }      
}

module.exports = {
    autosFind,
    autosSave,
    autosDeleteOne,
    autosUpdateOne
}