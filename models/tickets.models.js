const { Schema, model } = require('mongoose')

const TicketSchema = new Schema({
    subtotal:{
        type: Number,
        require: true
    },
    IVA:{
        type: Number,
        require: true
    },
    total:{
        type: Number,
        require:true
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
    }
})

module.exports = model('Ticket', TicketSchema);