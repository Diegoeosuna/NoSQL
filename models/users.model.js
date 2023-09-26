const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    userName:{
        type:String,
        required:[true, "El Username es requerido"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "El Email es requerido"],
        unique:true
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String,
        required:[true, "La contraseña es requerida"]
    },
    state:{
        type:Boolean,
        default: true
    }
})

module.exports = model('User', UserSchema) //Se exporta en singular y con mayúscula.