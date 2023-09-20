const mongoose = require('mongoose')

const dataBaseConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONN_DEV, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Conectado al servidor")
    } catch (error) {
        console.log(error)
        throw new Error ("No se pudo conectar con la base de datos")
    }
}

module.exports = {
    dataBaseConnection
}