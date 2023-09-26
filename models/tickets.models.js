const { Schema, model } = require('mongoose')

const TicketSchema = new Schema({
    subtotal:{
        type: Number,
        required: [true, 'El subtotal es requerido']
    },
    IVA:{
        type: Number,
        required: [true, 'El IVA es requerido']
    },
    total:{
        type: Number,
        required:[true, 'El total es requerido']
    },
    articulos:{
        type:Schema.Types.ObjectId,
        ref:'Article',
        required:[true, 'El artículo es requerido']
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true, 'El artículo es requerido']
    },
    state:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Ticket', TicketSchema);