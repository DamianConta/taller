const modelos = require('../db/modelos')

async function propietariosSave(data){
    try{
        const modelo = modelos.propietarioModel(data)
        return await modelo.save()
    }catch(error){
        throw error
    }
}


module.exports = {
    propietariosSave
}