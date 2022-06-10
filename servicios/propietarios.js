const { propietarioModel } = require('../db/modelos')

async function propietariosSave(data){
    try{
        const modelo = propietarioModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}

module.exports = {
    propietariosSave
}