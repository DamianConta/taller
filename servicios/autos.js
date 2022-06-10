const { autoModel, PROPIETARIO } = require( '../db/modelos')

async function autosFind(filtro){
    try{
        return await autoModel.find(filtro).populate(PROPIETARIO).exec()
    }catch(error){
        throw error
    }
}

async function autosSave(data){
    try{
        const modelo = autoModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}

async function autosDeleteOne(data){
    try{
        return await autoModel.deleteOne(data)
    }catch(error){
        throw error
    }
}

async function autosUpdateOne(filtro, update){
    try{
        return await autoModel.updateOne(filtro,update)
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