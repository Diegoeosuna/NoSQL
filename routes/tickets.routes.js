const { Router } = require('express')

const { ticketPost, ticketGet, ticketPut, ticketDel} = require('../controllers/tickets.controller')

const router = Router()

//CRUD
router.post("/", ticketPost); //C
router.get("/", ticketGet); //R
router.put("/:id", ticketPut); //U
router.delete("/:id", ticketDel); //D

module.exports = router