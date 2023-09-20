const { response, request } = require('express')

const Ticket = require('../models/tickets.models')

const ticketGet = async(req = require, res = response) => {
    try {
        const articuloDisp = {state:true};
        const { limite = 10 } = req.query;
        const cantidadArticulos = await Ticket.coundDocuments();
        const ticket = await Ticket.find(articuloDisp).limit(Number(limite));
        res.status(200).json({
            total:cantidadArticulos,
            ticket
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas los tickets.',
            error
        })
    }
}

const ticketPost = async(req = require, res = response) => {
    try {
        const { subtotal, IVA, total, articulos, usuario } = req.body
        const data ={ subtotal, IVA, total, articulos, usuario }
    
        const ticket = new Ticket(data)
        await ticket.save()
        res.status(200).json({
            message: 'Ticket ha sido creado.',
            ticket
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando creabas un ticket.',
            error
        })
    }
}

const ticketPut = async(req = require, res) => {
    try {
        const { id } = req.params;
        const { subtotal, IVA, total, articulos, usuario }  = req.body;
        const data = { subtotal, IVA, total, articulos, usuario  } 

        const user = await Ticket.findByIdAndUpdate(id, data)
        res.status(200).json({
            message: 'Ticket se ha actualizado.',
            ticket
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando editabas un ticket.',
            error
        })
    }
}

const ticketDel = async(req = require, res = response) => {
    try {
        const { id } = req.params
        const falseState = {state:false}
        const ticket = await Ticket.findByIdAndUpdate(id, falseState)

        res.status(200).json({
            message: 'Ticket se ha eliminado.',
            ticket
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando borrabas un artículo.',
            error
        })
    }
}

module.exports = {
    ticketGet,
    ticketPost,
    ticketPut,
    ticketDel
}