const { Router } = require('express')

const { articlePost, articleGet, articlePut, articleDel} = require('../controllers/articles.controller')

const router = Router()

//CRUD
router.post("/", articlePost); //C
router.get("/", articleGet); //R
router.put("/:id", articlePut); //U
router.delete("/:id", articleDel); //D

module.exports = router